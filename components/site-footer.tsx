import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="py-8 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Jaliem
            </Link>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/jaliem/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-teal-500 dark:text-teal-400" />
            </a>
            <a
              href="https://github.com/Jaliem"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-teal-500 dark:text-teal-400" />
            </a>
            <a
              href="https://www.instagram.com/jaliem_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-teal-500 dark:text-teal-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
