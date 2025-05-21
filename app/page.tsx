import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Mail, User } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-zinc-800">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter transition-colors hover:text-teal-500 dark:hover:text-teal-400"
          >
            Portfolio
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-teal-500 dark:hover:text-teal-400"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium transition-colors hover:text-teal-500 dark:hover:text-teal-400"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium transition-colors hover:text-teal-500 dark:hover:text-teal-400"
            >
              Skills
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-teal-500 dark:hover:text-teal-400"
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Resume
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
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
              className="w-6 h-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex flex-col space-y-6">
              <div className="inline-block px-4 py-1 text-sm font-medium text-teal-500 bg-teal-100 rounded-full dark:bg-teal-900 dark:text-teal-300">
                Hello, I'm a Creative Developer
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Crafting digital <span className="text-teal-500 dark:text-teal-400">experiences</span> that inspire
              </h1>
              <p className="max-w-lg text-zinc-600 dark:text-zinc-400">
                I design and build engaging digital products with a focus on responsive design, accessibility, and
                cutting-edge technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-800 rounded-full p-4 shadow-lg">
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
                  className="w-8 h-8 text-teal-500"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="absolute -top-6 -left-6 bg-white dark:bg-zinc-800 rounded-full p-4 shadow-lg">
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
                  className="w-8 h-8 text-purple-500"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="/about" className="flex flex-col items-center text-sm text-zinc-500 dark:text-zinc-400">
            <span>Learn More</span>
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
              className="w-6 h-6"
            >
              <line x1="12" x2="12" y1="5" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <div className="w-16 h-1 mt-4 bg-purple-500 rounded"></div>
            <p className="max-w-2xl mt-4 text-zinc-600 dark:text-zinc-400">
              Here are some of my recent projects. Check out my projects page to see more of my work.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured Project 1 */}
            <div className="group relative overflow-hidden rounded-lg bg-white dark:bg-zinc-800 shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project 1"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">E-Commerce Platform</h3>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  A modern e-commerce platform built with Next.js, featuring product listings, cart functionality, and
                  secure checkout.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/projects/e-commerce-platform">View Project</Link>
                </Button>
              </div>
            </div>

            {/* Featured Project 2 */}
            <div className="group relative overflow-hidden rounded-lg bg-white dark:bg-zinc-800 shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project 2"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Dashboard UI</h3>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  A responsive admin dashboard with data visualization, user management, and real-time analytics.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/projects/dashboard-ui">View Project</Link>
                </Button>
              </div>
            </div>

            {/* Featured Project 3 */}
            <div className="group relative overflow-hidden rounded-lg bg-white dark:bg-zinc-800 shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project 3"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Social Media App</h3>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  A social networking application with real-time messaging, post sharing, and user profiles.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/projects/social-media-app">View Project</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" className="group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-zinc-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-teal-100 dark:bg-teal-900">
              <User className="w-6 h-6 text-teal-500 dark:text-teal-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <div className="w-16 h-1 mt-4 bg-teal-500 rounded"></div>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 bg-teal-500 rounded-lg"></div>
              <div className="relative h-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="About me"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                I'm a passionate web developer with a background in design, bringing a unique perspective to every
                project. With over 5 years of experience, I've worked on a variety of projects from small business
                websites to complex web applications.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                My approach combines technical expertise with creative problem-solving to deliver solutions that are not
                only functional but also visually compelling and user-friendly.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold">Education</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">B.S. Computer Science</p>
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">San Francisco, CA</p>
                </div>
                <div>
                  <h4 className="font-bold">Experience</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">5+ Years</p>
                </div>
                <div>
                  <h4 className="font-bold">Freelance</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">Available</p>
                </div>
              </div>
              <Button className="self-start bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-zinc-100 dark:bg-zinc-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-purple-100 dark:bg-purple-900">
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
                className="w-6 h-6 text-purple-500 dark:text-purple-400"
              >
                <path d="M2 9.5V5c0-1.1.9-2 2-2h3.5" />
                <path d="M2 14.5V19c0 1.1.9 2 2 2h3.5" />
                <path d="M22 9.5V5c0-1.1-.9-2-2-2h-3.5" />
                <path d="M22 14.5V19c0 1.1-.9 2-2 2h-3.5" />
                <path d="M7 12h10" />
                <path d="M12 7v10" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Expertise</h2>
            <div className="w-16 h-1 mt-4 bg-purple-500 rounded"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Skill Category 1 */}
            <div className="p-6 transition-transform duration-300 bg-white rounded-lg shadow-lg dark:bg-zinc-800 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-teal-100 dark:bg-teal-900">
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
                  className="w-6 h-6 text-teal-500 dark:text-teal-400"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold">Frontend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">React & Next.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">JavaScript/TypeScript</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">HTML & CSS</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">Tailwind CSS</span>
                </li>
              </ul>
            </div>

            {/* Skill Category 2 */}
            <div className="p-6 transition-transform duration-300 bg-white rounded-lg shadow-lg dark:bg-zinc-800 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-purple-100 dark:bg-purple-900">
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
                  className="w-6 h-6 text-purple-500 dark:text-purple-400"
                >
                  <path d="M2 9.5V5c0-1.1.9-2 2-2h3.5" />
                  <path d="M2 14.5V19c0 1.1.9 2 2 2h3.5" />
                  <path d="M22 9.5V5c0-1.1-.9-2-2-2h-3.5" />
                  <path d="M22 14.5V19c0 1.1-.9 2-2 2h-3.5" />
                  <path d="M7 12h10" />
                  <path d="M12 7v10" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold">Backend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">Node.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">Express</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">MongoDB</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">PostgreSQL</span>
                </li>
              </ul>
            </div>

            {/* Skill Category 3 */}
            <div className="p-6 transition-transform duration-300 bg-white rounded-lg shadow-lg dark:bg-zinc-800 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-pink-100 dark:bg-pink-900">
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
                  className="w-6 h-6 text-pink-500 dark:text-pink-400"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold">Design & Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">Figma</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">Git & GitHub</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">Responsive Design</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">UI/UX Principles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-100 dark:bg-zinc-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-teal-100 dark:bg-teal-900">
              <Mail className="w-6 h-6 text-teal-500 dark:text-teal-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
            <div className="w-16 h-1 mt-4 bg-teal-500 rounded"></div>
            <p className="max-w-lg mt-4 text-zinc-600 dark:text-zinc-400">
              Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-zinc-900">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-zinc-900">
              <h3 className="mb-4 text-xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 rounded-full bg-teal-100 dark:bg-teal-900">
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 rounded-full bg-teal-100 dark:bg-teal-900">
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
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Email</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 rounded-full bg-teal-100 dark:bg-teal-900">
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
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Location</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
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
                    href="#"
                    className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
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
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
                  >
                    <Github className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                  </a>
                  <a
                    href="#"
                    className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
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
        </div>
      </section>

      {/* Footer */}
      <footer>
      </footer>
    </div>
  )
}
