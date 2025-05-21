import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Skills & Expertise | Creative Portfolio",
  description: "Explore my technical skills and expertise in web development and design",
}

export default function SkillsPage() {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Expertise</h1>
            <div className="w-16 h-1 mt-4 bg-pink-500 rounded"></div>
            <p className="max-w-2xl mt-4 text-zinc-600 dark:text-zinc-400">
              I've developed a diverse set of skills throughout my career. Here's an overview of my technical expertise
              and capabilities.
            </p>
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
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
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

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Technical Proficiency</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {["JavaScript", "TypeScript", "HTML", "CSS", "SQL", "Python", "PHP"].map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "React",
                      "Next.js",
                      "Vue.js",
                      "Express",
                      "Tailwind CSS",
                      "Bootstrap",
                      "Material UI",
                      "Redux",
                      "React Query",
                    ].map((framework) => (
                      <span key={framework} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Git", "GitHub", "VS Code", "Docker", "AWS", "Vercel", "Netlify", "Firebase", "Heroku"].map(
                      (tool) => (
                        <span key={tool} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
                          {tool}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Design</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Figma",
                      "Adobe XD",
                      "Photoshop",
                      "Illustrator",
                      "UI/UX Design",
                      "Responsive Design",
                      "Wireframing",
                      "Prototyping",
                    ].map((design) => (
                      <span key={design} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
                        {design}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Databases</h3>
                  <div className="flex flex-wrap gap-3">
                    {["MongoDB", "PostgreSQL", "MySQL", "Firebase Firestore", "Redis", "Supabase"].map((db) => (
                      <span key={db} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
                        {db}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Other Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "RESTful APIs",
                      "GraphQL",
                      "Testing",
                      "CI/CD",
                      "Performance Optimization",
                      "Accessibility",
                      "SEO",
                      "Agile Methodology",
                    ].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Professional Development</h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
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
                    className="w-8 h-8 text-teal-500 dark:text-teal-400"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Continuous Learning</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    I'm committed to staying current with the latest technologies and best practices through online
                    courses, workshops, and self-directed learning.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
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
                    className="w-8 h-8 text-purple-500 dark:text-purple-400"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Project Management</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    I have experience managing projects from conception to completion, ensuring they are delivered on
                    time and meet all requirements.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900">
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
                    className="w-8 h-8 text-pink-500 dark:text-pink-400"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Team Collaboration</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    I excel in collaborative environments, working effectively with designers, developers, and
                    stakeholders to achieve project goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Button asChild className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700">
              <a href="/contact">Discuss Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
