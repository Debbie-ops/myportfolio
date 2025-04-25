import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold font-poppins">
              <span className="gradient-text">Debbie</span>
              <span className="text-foreground">.dev</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">Building modern web experiences</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <Button variant="ghost" size="icon" className="mb-2" asChild>
              <a href="#" aria-label="Scroll to top">
                <ArrowUp size={20} />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Daliso.D All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
