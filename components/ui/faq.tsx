import { FC } from "react"

interface FAQItem {
  question: string
  answer: string | JSX.Element
}

const faqs: FAQItem[] = [
  {
    question: "Who is GTRC for?",
    answer:
      "Anyone who wants/needs it. You’re welcome to come along, all inclusive means all inclusive. You don’t even need to run, just come for the food, drink and chats.",
  },
  {
    question: "When/Where do you run?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Mondays, 18:30 @civerinos_official on the portobello prom, 5km</li>
        <li>Thursdays, 18:30 @oldeastwaytap, 5km</li>
        <li>Sundays @traade_space, 8:00am 5km</li>
      </ul>
    ),
  },
  {
    question: "Do I need sign up/pay",
    answer: "No, just show up if you fancy it, no need to let us know if you’re coming. The runs are completely free.",
  },
  {
    question: "Do you do any longer runs/other events?",
    answer:
      "Yes, these are usually organised in our group WhatsApp chat, give us a message if you’d like more info.",
  },
  {
    question: "Is there a set pace?",
    answer:
      "No, we’ll run as a group, or several smaller groups, but you won’t run alone. First time? Just make sure you let someone know and we’ll make sure someone sticks by you. If you need to slow down someone will slow with you, if you need to walk someone will walk with you.",
  },
  {
    question: "Do you sell merch?",
    answer:
      "Yes, right now good time tote bags can be purchased from @traade_space or @upandrunningedinburgh, for other products check the links in our bio.",
  },
]

const FAQ: FC = () => {
  return (
    <section id="faq" className="py-4 pb-8 px-2 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">FAQs</h2>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((item, idx) => (
            <details key={idx} className="border rounded-lg p-4 bg-white shadow">
              <summary className="font-bold cursor-pointer">{item.question}</summary>
              <div className="mt-2 text-muted-foreground text-base">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
