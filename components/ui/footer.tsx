import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="border-t px-2 bg-muted/50">
      <div className="container pb-12 p-6">
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          <Link href="https://www.facebook.com/profile.php?id=61555882064629" className="text-primary hover:text-primary">
            <h3 className="font-extrabold text-xl">FACEBOOK</h3>
          </Link>
          <Link href="https://www.instagram.com/goodtimerunning" className="text-primary hover:text-primary">
            <h3 className="font-extrabold text-xl">INSTAGRAM</h3>
          </Link>
          <Link href="https://www.strava.com/clubs/GoodTimeRunnin" className="text-primary hover:text-primary">
            <h3 className="font-extrabold text-xl">STRAVA</h3>
          </Link>
          <Link href="mailto:goodtimerunning@outlook.com" className="text-primary hover:text-primary">
            <h3 className="font-extrabold text-xl">EMAIL</h3>
          </Link>
        </div>
      </div>
    </footer>
  )
}
