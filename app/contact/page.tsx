import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Contact Me | Creative Portfolio",
  description: "Get in touch with me for project inquiries or collaboration opportunities",
}

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h1>
            <div className="w-16 h-1 mt-4 bg-teal-500 rounded"></div>
            <p className="max-w-2xl mt-4 text-zinc-600 dark:text-zinc-400">
              Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as
              possible.
            </p>
          </div>          
          <div className="max-w-xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-zinc-800">
              <h2 className="mb-6 text-2xl font-bold text-center">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 rounded-full bg-teal-100 dark:bg-teal-900">
                    <Phone className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">+62 851 5650 6975</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 rounded-full bg-teal-100 dark:bg-teal-900">
                    <Mail className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Email</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">jasonliem2005@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 rounded-full bg-teal-100 dark:bg-teal-900">
                    <MapPin className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Location</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Tangerang, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/jaliem/"
                    className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-700 hover:bg-teal-100 dark:hover:bg-teal-900"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-teal-500 dark:text-teal-400"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Jaliem"
                    className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-700 hover:bg-teal-100 dark:hover:bg-teal-900"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-teal-500 dark:text-teal-400"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/jaliem_/"
                    className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-700 hover:bg-teal-100 dark:hover:bg-teal-900"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-teal-500 dark:text-teal-400"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-zinc-800">
                <h3 className="mb-3 text-xl font-bold">What services do you offer?</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  I offer a range of web development services including frontend development, backend development,
                  full-stack development, responsive design, and UI/UX implementation.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-zinc-800">
                <h3 className="mb-3 text-xl font-bold">What is your typical project timeline?</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Project timelines vary depending on complexity and scope. A simple website might take 2-3 weeks, while
                  a complex web application could take 2-3 months or more.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-zinc-800">
                <h3 className="mb-3 text-xl font-bold">Do you offer maintenance services?</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Yes, I offer ongoing maintenance and support services to ensure your website or application continues
                  to run smoothly after launch.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-zinc-800">
                <h3 className="mb-3 text-xl font-bold">How do you handle project pricing?</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  I offer both fixed-price and hourly rate options depending on the project requirements. I'll provide a
                  detailed quote after discussing your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
