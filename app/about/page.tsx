import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Me | Creative Portfolio",
  description: "Learn more about my background, experience, and skills",
}

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h1>
            <div className="w-16 h-1 mt-4 bg-teal-500 rounded"></div>
            <p className="max-w-2xl mt-4 text-zinc-600 dark:text-zinc-400">
              I'm a passionate web developer with a background in design, bringing a unique perspective to every
              project.
            </p>
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
              <h2 className="text-2xl font-bold">My Journey</h2>
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

      <section className="py-20 bg-zinc-100 dark:bg-zinc-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Story</h2>
            <div className="w-16 h-1 mt-4 bg-teal-500 rounded"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="relative pl-8 border-l-2 border-teal-500">
              <div className="absolute -left-3 mt-1 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold">Early Beginnings</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                I started my journey in tech at a young age, tinkering with computers and building simple websites. My
                curiosity led me to pursue a degree in Computer Science, where I developed a strong foundation in
                programming principles and software development.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-teal-500">
              <div className="absolute -left-3 mt-1 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold">Professional Growth</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                After graduating, I joined a tech startup where I had the opportunity to work on diverse projects and
                wear multiple hats. This experience was invaluable as it allowed me to develop skills across the full
                stack and understand the business side of technology.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-teal-500">
              <div className="absolute -left-3 mt-1 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold">Design Integration</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Recognizing the importance of user experience, I pursued additional training in UI/UX design. This dual
                expertise in development and design has become my unique selling point, allowing me to create solutions
                that are both technically sound and aesthetically pleasing.
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-3 mt-1 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold">Present Day</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Today, I work as a freelance developer and consultant, helping businesses and individuals bring their
                digital ideas to life. I'm passionate about creating accessible, responsive, and performant web
                applications that provide exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Values</h2>
            <div className="w-16 h-1 mt-4 bg-teal-500 rounded"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Quality First</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                I believe in delivering high-quality work that exceeds expectations. Every line of code I write is
                crafted with care and attention to detail.
              </p>
            </div>

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
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Innovation</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                I'm constantly learning and exploring new technologies to find innovative solutions to complex problems.
                I embrace change and adapt quickly.
              </p>
            </div>

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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Collaboration</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                I believe the best results come from working together. I value open communication, feedback, and the
                diverse perspectives that collaboration brings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
