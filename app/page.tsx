import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (    
    <div className="bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-zinc-800">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>        
        <div className="container relative z-10 px-0 md:px-0 lg:px-0 mx-auto max-w-6xl">
          <div className="grid items-center md:grid-cols-2">
            <div className="flex flex-col space-y-6 px-6 md:px-8 lg:px-12">
              <div className="inline-block px-4 py-1 text-sm font-medium text-teal-500 bg-teal-100 rounded-full dark:bg-teal-900 dark:text-teal-300">
                Hello, my name is Jason
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
                  src="/fotoaslab1.JPG?height=400&width=400"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
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
      <section className="py-20 bg-white dark:bg-zinc-900">        <div className="container px-6 md:px-8 lg:px-12 mx-auto max-w-6xl">
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
                <h3 className="mb-2 text-xl font-bold">Heal n Clinic</h3>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  Developed a modern company profile website for a dentist clinic using Next.js, showcasing services, client testimonials and articles with responsive design.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://healnclinic.vercel.app/">View Project</Link>
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
                <h3 className="mb-2 text-xl font-bold">Valopedia</h3>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  Developed a website that allows customers to order Valorant boosting and coaching services, featuring order forms, service listings, and responsive design.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://valopedia.net/">View Project</Link>
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
                <h3 className="mb-2 text-xl font-bold">Vuper Auto Pets</h3>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  Created a Super Auto Pets clone with HTML, CSS, and JavaScript for a Software Laboratory Assistant project, focusing on user interface.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://healnclinic.vercel.app/">View Project</Link>
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
                  src="/fotoaslab1.JPG?height=600&width=800"
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
                  <p className="text-zinc-600 dark:text-zinc-400">4th Semester of Computer Science at Binus University</p>
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">Tangerang, Banten</p>
                </div>
                <div>
                  <h4 className="font-bold">Experience</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">2+ Years</p>
                </div>
                <div>
                  <h4 className="font-bold">Freelance</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">Available</p>
                </div>
              </div>              <Button asChild className="self-start bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700">
                <Link href="/Jason_CV_Academy2026.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </Link>
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
              <h3 className="mb-4 text-xl font-bold">Database</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">MySQL</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700">
                    <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">SQL Server</span>
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
        <div className="container px-4 mx-auto max-w-2xl">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-teal-100 dark:bg-teal-900">
              <Mail className="w-6 h-6 text-teal-500 dark:text-teal-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
            <div className="w-16 h-1 mt-4 bg-teal-500 rounded"></div>
            <p className="max-w-lg mt-4 text-zinc-600 dark:text-zinc-400">
              Have a project in mind or want to collaborate? Feel free to reach out through any of these channels.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full p-8 bg-white rounded-lg shadow-lg dark:bg-zinc-900">
              <div className="space-y-6">
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
                    <p className="text-zinc-600 dark:text-zinc-400">+62 851 5650 6975</p>
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
                    <p className="text-zinc-600 dark:text-zinc-400">jasonliem2005@gmail.com</p>
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
                    <p className="text-zinc-600 dark:text-zinc-400">Tangerang, Indonesia</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="mb-4 text-xl font-bold">Follow Me</h3>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/jaliem/"
                    className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    className="p-2 transition-colors rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-100 dark:hover:bg-teal-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                  </a>
                  <a
                    href="https://www.instagram.com/jaliem_/"
                    target="_blank"
                    rel="noopener noreferrer"
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
    </div>
  )
}
