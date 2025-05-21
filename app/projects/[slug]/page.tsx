import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Project Details | Creative Portfolio",
  description: "Detailed information about my projects",
}

// Project data
const projects = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, featuring product listings, cart functionality, and secure checkout.",
    longDescription:
      "This e-commerce platform was built to provide a seamless shopping experience for users. It features a responsive design, product filtering, user authentication, shopping cart functionality, and integration with Stripe for secure payments. The admin dashboard allows for easy product management and order tracking.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Next.js", "React", "Tailwind", "Stripe"],
    features: [
      "Responsive design for all devices",
      "Product search and filtering",
      "User authentication and profiles",
      "Shopping cart and wishlist",
      "Secure checkout with Stripe",
      "Order tracking and history",
      "Admin dashboard for product management",
    ],
    technologies: [
      "Next.js for server-side rendering and API routes",
      "React for the frontend UI",
      "Tailwind CSS for styling",
      "Stripe for payment processing",
      "MongoDB for database storage",
      "NextAuth.js for authentication",
    ],
    github: "https://github.com",
    liveDemo: "https://example.com",
    year: 2023,
  },
  {
    id: "dashboard-ui",
    title: "Dashboard UI",
    description: "A responsive admin dashboard with data visualization, user management, and real-time analytics.",
    longDescription:
      "This dashboard UI was designed to provide administrators with a comprehensive overview of their business data. It features interactive charts and graphs for data visualization, user management tools, and real-time analytics. The dashboard is fully responsive and includes dark mode support.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
    features: [
      "Interactive data visualization",
      "User management interface",
      "Real-time analytics",
      "Customizable widgets",
      "Dark mode support",
      "Responsive design",
      "Data export functionality",
    ],
    technologies: [
      "React for the frontend UI",
      "TypeScript for type safety",
      "Chart.js for data visualization",
      "Tailwind CSS for styling",
      "React Query for data fetching",
      "Context API for state management",
    ],
    github: "https://github.com",
    liveDemo: "https://example.com",
    year: 2023,
  },
  {
    id: "social-media-app",
    title: "Social Media App",
    description: "A social networking application with real-time messaging, post sharing, and user profiles.",
    longDescription:
      "This social media application was built to connect users through shared interests and real-time communication. It features user profiles, post creation and sharing, real-time messaging, notifications, and friend connections. The app is built with a focus on performance and user experience.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Next.js", "Firebase", "Tailwind", "Socket.io"],
    features: [
      "User profiles and authentication",
      "Post creation and sharing",
      "Real-time messaging",
      "Friend connections",
      "Notifications",
      "Image and video uploads",
      "Comment and reaction system",
    ],
    technologies: [
      "Next.js for the frontend and API routes",
      "Firebase for authentication and storage",
      "Tailwind CSS for styling",
      "Socket.io for real-time communication",
      "Firestore for database",
      "React Hook Form for form handling",
    ],
    github: "https://github.com",
    liveDemo: "https://example.com",
    year: 2022,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A creative portfolio website for a photographer showcasing their work with a beautiful gallery.",
    longDescription:
      "This portfolio website was designed for a professional photographer to showcase their work in a visually appealing way. It features a responsive image gallery, smooth animations, contact form, and about section. The design focuses on highlighting the photographer's work while providing a seamless user experience.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    features: [
      "Responsive image gallery",
      "Smooth page transitions",
      "Contact form",
      "About section",
      "Service information",
      "Testimonials",
      "Social media integration",
    ],
    technologies: [
      "HTML for structure",
      "CSS for styling",
      "JavaScript for interactivity",
      "GSAP for animations",
      "FormSubmit for contact form handling",
      "Lightbox for image gallery",
    ],
    github: "https://github.com",
    liveDemo: "https://example.com",
    year: 2022,
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A productivity app for managing tasks, projects, and team collaboration with drag-and-drop functionality.",
    longDescription:
      "This task management application was built to help teams organize their work and collaborate effectively. It features task creation and assignment, project management, team collaboration tools, and drag-and-drop functionality for easy task organization. The app includes user authentication and role-based permissions.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    features: [
      "Task creation and assignment",
      "Project management",
      "Team collaboration",
      "Drag-and-drop task organization",
      "Due date and priority settings",
      "User authentication",
      "Role-based permissions",
    ],
    technologies: [
      "React for the frontend UI",
      "Redux for state management",
      "Node.js for the backend",
      "Express for API routes",
      "MongoDB for database storage",
      "JWT for authentication",
      "React Beautiful DnD for drag-and-drop",
    ],
    github: "https://github.com",
    liveDemo: "https://example.com",
    year: 2021,
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
    longDescription:
      "This weather application was built to provide users with accurate and up-to-date weather information for locations around the world. It features current weather conditions, 7-day forecasts, hourly forecasts, and location search. The app uses the OpenWeather API to fetch weather data and displays it in a user-friendly interface.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "OpenWeather API", "CSS Modules"],
    features: [
      "Current weather conditions",
      "7-day forecast",
      "Hourly forecast",
      "Location search",
      "Geolocation support",
      "Weather alerts",
      "Unit conversion (Celsius/Fahrenheit)",
    ],
    technologies: [
      "React for the frontend UI",
      "OpenWeather API for weather data",
      "CSS Modules for styling",
      "Axios for API requests",
      "React Icons for weather icons",
      "Local Storage for saving preferences",
    ],
    github: "https://github.com",
    liveDemo: "https://example.com",
    year: 2021,
  },
]

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-white dark:bg-zinc-900">
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/projects" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{project.title}</h1>
              <div className="w-16 h-1 mb-6 bg-purple-500 rounded"></div>

              <p className="mb-6 text-zinc-600 dark:text-zinc-400">{project.longDescription}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-700">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mb-8">
                <Button
                  asChild
                  className="bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700"
                >
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-3">Project Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-zinc-500 dark:text-zinc-400">Year</h3>
                    <p>{project.year}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-500 dark:text-zinc-400">Type</h3>
                    <p>Web Application</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-500 dark:text-zinc-400">Role</h3>
                    <p>Full Stack Developer</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-500 dark:text-zinc-400">Duration</h3>
                    <p>3 months</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 bg-purple-500 rounded-lg opacity-50"></div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-12 mt-16 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
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
                      className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-zinc-600 dark:text-zinc-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <ul className="space-y-3">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="flex items-start">
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
                      className="w-5 h-5 mr-2 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-0.5"
                    >
                      <path d="m12 14 4-4" />
                      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                    <span className="text-zinc-600 dark:text-zinc-400">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">More Screenshots</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Screenshot ${i}`}
                    alt={`${project.title} screenshot ${i}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-16">
            <Button asChild variant="outline">
              <Link
                href={
                  projects[0].id === params.slug
                    ? `/projects/${projects[projects.length - 1].id}`
                    : `/projects/${projects[projects.findIndex((p) => p.id === params.slug) - 1].id}`
                }
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous Project
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href={
                  projects[projects.length - 1].id === params.slug
                    ? `/projects/${projects[0].id}`
                    : `/projects/${projects[projects.findIndex((p) => p.id === params.slug) + 1].id}`
                }
              >
                Next Project
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
                  className="w-4 h-4 ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
