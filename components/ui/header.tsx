 import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
 
 export default function Header() {
 
   return (<header className="sticky top-0 z-40 bg-background p-3">
        <div className="container mx-auto flex h-8 items-center justify-between pl-2">
          <div className="flex items-center gap-2">
          <Link href="/" >
          <Image
              src="/logo-dark.svg?height=180&width=100"
              alt="Runners in action"
              width={100}
              height={80}
              priority
              />
          </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-semibold transition-colors hover:text-primary">
              ABOUT
            </Link>
            <Link href="/#runs" className="text-sm font-semibold transition-colors hover:text-primary">
              REGULAR RUNS
            </Link>
            <Link href="/#events" className="text-sm font-semibold transition-colors hover:text-primary">
              EVENTS
            </Link>
            <Link href="/#contact" className="text-sm font-semibold transition-colors hover:text-primary">
              CONTACT
            </Link>
          </nav>
          <MobileMenu />
          </div>
      </header>
      )};
