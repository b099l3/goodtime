"use client"

import type React from "react"

import { subscribeToNewsletter } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { useState, useTransition } from "react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    const formData = new FormData()
    formData.append("email", email)

    startTransition(async () => {
      const result = await subscribeToNewsletter(formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        })
        setEmail("") // Clear the input on success
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    })
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Your email"
        className="w-80 rounded-md border border-input bg-background px-3 py-2 text-sm"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isPending}
      />
      <Button type="submit" className="w-1/2" disabled={isPending} size="lg" variant="secondary">
        {isPending ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}

