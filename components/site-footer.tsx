import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="py-8 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Portfolio
            </Link>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-teal-500 dark:text-teal-400" />
            </a>
            <a
              href="#"
              className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-teal-500 dark:text-teal-400" />
            </a>
            <a
              href="#"
              className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-teal-500 dark:text-teal-400" />
            </a>
            <a
              href="#"
              className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-teal-500 dark:text-teal-400" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="text-sm transition-colors hover:text-teal-500 dark:hover:text-teal-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm transition-colors hover:text-teal-500 dark:hover:text-teal-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
