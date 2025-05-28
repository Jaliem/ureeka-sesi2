import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Projects | Creative Portfolio",
  description: "Explore my portfolio of web development and design projects",
}

// Project data
const projects = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, featuring product listings, cart functionality, and secure checkout.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "Tailwind", "Stripe"],
    featured: true,
  },
  {
    id: "dashboard-ui",
    title: "Dashboard UI",
    description: "A responsive admin dashboard with data visualization, user management, and real-time analytics.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
    featured: true,
  },
  {
    id: "social-media-app",
    title: "Social Media App",
    description: "A social networking application with real-time messaging, post sharing, and user profiles.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Firebase", "Tailwind", "Socket.io"],
    featured: true,
  },
  // {
  //   id: "portfolio-website",
  //   title: "Portfolio Website",
  //   description: "A creative portfolio website for a photographer showcasing their work with a beautiful gallery.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   tags: ["HTML", "CSS", "JavaScript", "GSAP"],
  //   featured: false,
  // },
  // {
  //   id: "task-management-app",
  //   title: "Task Management App",
  //   description:
  //     "A productivity app for managing tasks, projects, and team collaboration with drag-and-drop functionality.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   tags: ["React", "Redux", "Node.js", "MongoDB"],
  //   featured: false,
  // },
  // {
  //   id: "weather-app",
  //   title: "Weather App",
  //   description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   tags: ["React", "OpenWeather API", "CSS Modules"],
  //   featured: false,
  // },
]

export default function ProjectsPage() {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h1>
            <div className="w-16 h-1 mt-4 bg-purple-500 rounded"></div>
            <p className="max-w-2xl mt-4 text-zinc-600 dark:text-zinc-400">
              Here's a collection of my recent work. Each project represents a unique challenge and solution.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg bg-white dark:bg-zinc-800 shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-zinc-600 dark:text-zinc-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/projects/${project.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
