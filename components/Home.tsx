"use client";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { ProjectCard } from "@/components/project-card";
import { SkillCategory } from "@/components/skill-category";

export default function Hero() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 px-4 pt-2 dark:shadow-2xl border dark:border-gray-800 transition-all duration-500">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-stretch gap-1.5 sm:gap-3 mt-5 max-w-full sm:pb-1 z-10">
          <div className="relative w-24 sm:w-36 aspect-square flex-shrink-0">
            <Image
              src="/images/photo.jpg"
              alt="My Picture"
              className="w-full h-auto object-cover rounded-xl transition-opacity duration-400"
              fill
              priority
              sizes="(min-width: 640px) 144px, 96px"
            />
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
            <div className="flex items-start justify-between relative">
              <h1 className="text-[25px] xs:text-3xl sm:text-5xl font-extrabold leading-tight truncate max-w-full text-wrap min-w-0 dark:text-white transition-colors duration-500 font-sans">
                Justine Nicolao
              </h1>
              <div className="flex items-center gap-2">
                <ThemeToggle />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-1">
              <div className="flex flex-wrap items-center pl-0.5">
                <span className="text-sm sm:text-2xl text-indigo-700 dark:text-indigo-400 pb-0.5 font-bold transition-colors duration-300">
                  Software Engineer
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                📍 Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="backdrop-blur-xl bg-white/40 dark:bg-slate-800/30 rounded-2xl p-5 transition-all duration-300 border border-white/40 dark:border-slate-700/40 shadow-lg hover:shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent dark:from-slate-700/30 dark:to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200/20 via-sky-200/20 to-indigo-200/20 dark:from-indigo-800/20 dark:via-sky-800/20 dark:to-indigo-800/20 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors duration-500 font-sans">
                  About
                </h2>
                <p className="font-normal text-gray-700 dark:text-gray-200 text-sm md:text-base leading-relaxed transition-colors duration-500 font-sans">
                  I&apos;m a Software Engineer with 4 years of experience
                  building reliable, maintainable applications. I enjoy solving
                  real problems with clean code, and I&apos;m always learning
                  new tools and practices to get better at what I do. I care
                  about writing code that not only works well but also makes a
                  real difference for the people using it.
                </p>
              </div>
            </div>
            <div className="backdrop-blur-xl bg-white/40 dark:bg-slate-800/30 rounded-2xl p-5 transition-all duration-300 border border-white/40 dark:border-slate-700/40 shadow-lg hover:shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent dark:from-slate-700/30 dark:to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200/20 via-sky-200/20 to-indigo-200/20 dark:from-indigo-800/20 dark:via-sky-800/20 dark:to-indigo-800/20 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold text-black dark:text-white mb-4 transition-colors duration-500 font-sans">
                  Connect
                </h2>
                <div className="grid grid-cols-2 gap-3 pl-2">
                  <a
                    href="mailto:bororio96@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#4caf50"
                        d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                      ></path>
                      <path
                        fill="#1e88e5"
                        d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                      ></path>
                      <polygon
                        fill="#e53935"
                        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                      ></polygon>
                      <path
                        fill="#c62828"
                        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                      ></path>
                      <path
                        fill="#fbc02d"
                        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                      ></path>
                    </svg>
                    <span>Gmail</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jnicolao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 72 72"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          fill="#0A66C2"
                          d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                        />
                      </g>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/JNicolao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 98 96"
                    >
                      <path
                        fill="#24292f"
                        fillRule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#24292f"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        className="dark:fill-white"
                      />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://x.com/jnicolao5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 1200 1227"
                    >
                      <path
                        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                        fill="#000000"
                        className="dark:fill-white"
                      />
                    </svg>
                    <span>X (Twitter)</span>
                  </a>
                  <a
                    href="https://medium.com/@jnicolao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 1043.63 592.71"
                    >
                      <g data-name="Layer 2">
                        <g data-name="Layer 1">
                          <path
                            d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
                            fill="#000000"
                            className="dark:fill-white"
                          />
                        </g>
                      </g>
                    </svg>
                    <span>Medium</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-indigo-500"></span>
            <h2 className="text-sm font-medium tracking-wide uppercase text-indigo-700 dark:text-indigo-400 font-sans transition-colors duration-500">
              Skills
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <SkillCategory
              title="Frontend Engineering"
              skills={[
                {
                  name: "React",
                  subskills: [
                    "React 19",
                    "Hooks",
                    "Server Components",
                    "Context API",
                    "State Management",
                    "Reusable Component Systems",
                  ],
                },
                {
                  name: "Next.js",
                  subskills: [
                    "App Router",
                    "SSR",
                    "SSG",
                    "ISR",
                    "API Routes",
                    "Middleware",
                    "Image Optimisation",
                  ],
                },
                {
                  name: "TypeScript & JavaScript",
                  subskills: [
                    "TypeScript",
                    "ES6+",
                    "Type-Safe APIs",
                    "Async/Await",
                    "DOM APIs",
                  ],
                },
                {
                  name: "Flutter & Dart",
                  subskills: ["Cross-platform Mobile Apps", "Dart"],
                },
                {
                  name: "Styling & UI",
                  subskills: [
                    "Tailwind CSS 4",
                    "Responsive Design",
                    "Semantic HTML",
                    "CSS3",
                    "Flexbox",
                    "Grid",
                    "SASS/SCSS",
                    "Design Systems",
                    "Figma",
                  ],
                },
              ]}
            />

            <SkillCategory
              title="Quality, Security & Accessibility"
              skills={[
                {
                  name: "Testing",
                  subskills: [
                    "Jest",
                    "React Testing Library",
                    "Cypress",
                    "Test-Driven Development",
                    "Component & E2E Testing",
                  ],
                },
                {
                  name: "Accessibility",
                  subskills: [
                    "WCAG 2.1 AA",
                    "Semantic HTML",
                    "ARIA",
                    "Keyboard Navigation",
                  ],
                },
                {
                  name: "Frontend Security",
                  subskills: [
                    "XSS Prevention",
                    "CSP Headers",
                    "Secure Cookie Handling",
                    "Token Storage",
                    "JWT Authentication",
                  ],
                },
                {
                  name: "Performance",
                  subskills: [
                    "Code Splitting",
                    "Lazy Loading",
                    "Image Optimisation",
                    "Bundle Analysis",
                    "Core Web Vitals",
                  ],
                },
              ]}
            />

            <SkillCategory
              title="Backend & Data"
              skills={[
                {
                  name: "Node.js",
                  subskills: [
                    "Express",
                    "REST APIs",
                    "JWT",
                    "Authentication",
                    "Middleware",
                  ],
                },
                {
                  name: "Python",
                  subskills: ["Django", "Flask", "Scripting", "Automation"],
                },
                {
                  name: "Databases",
                  subskills: [
                    "MongoDB",
                    "PostgreSQL",
                    "MySQL",
                    "Redis",
                    "Supabase",
                    "Firebase",
                  ],
                },
              ]}
            />

            <SkillCategory
              title="Tools, Platforms & Practices"
              skills={[
                {
                  name: "Build Tooling",
                  subskills: ["Turbopack", "Webpack", "Vite", "npm"],
                },
                {
                  name: "Cloud & DevOps",
                  subskills: [
                    "AWS",
                    "Azure",
                    "Docker",
                    "CI/CD",
                    "GitHub Actions",
                    "Vercel",
                  ],
                },
                {
                  name: "Collaboration & Practices",
                  subskills: [
                    "Git",
                    "GitHub",
                    "Code Reviews",
                    "Agile & Scrum",
                    "Documentation",
                    "Mentoring",
                  ],
                },
              ]}
            />
          </div>
        </section>

        <section id="projects" className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-indigo-500"></span>
            <h2 className="text-sm font-medium tracking-wide uppercase text-indigo-700 dark:text-indigo-400 font-sans transition-colors duration-500">
              Selected Work
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <ProjectCard
              title="PickSend"
              org="PickSpot Network"
              period="2024 — Present"
              status="In production"
              problem="Merchants sending parcels had no single place to register a shipment, hand it off, and see where it was — coordination ran on phone calls and spreadsheets."
              role="Frontend lead"
              stack={["Next.js", "React", "TypeScript"]}
              outcomes={[
                "Merchants register parcels and follow them through to delivery from one dashboard, replacing ad-hoc coordination.",
                "The same platform runs the internal portals operations staff use to manage dispatch and support day to day.",
                "Merchant-facing surfaces hold above 90% user satisfaction in production.",
              ]}
            />
            <ProjectCard
              title="Battery Inventory System"
              org="eWAKA Mobility"
              period="2024"
              status="Deployed"
              problem="Battery swaps across franchises were logged by hand, so inventory counts drifted from reality and errors surfaced days late."
              role="Engineer"
              stack={["Next.js", "TypeScript", "Node.js"]}
              outcomes={[
                "Administrators control battery swaps electronically and monitor locations in real time across every franchise.",
                "Cut tracking errors by 35% by replacing manual logs with one centralized platform.",
                "Slotted into existing fleet-management workflows instead of forcing new ones.",
              ]}
            />
            <ProjectCard
              title="Murmur"
              org="Personal Project"
              period="2025 — Present"
              status="In development"
              problem="Journaling apps assume you want to type; most people process feelings by talking. Murmur is a space for your inner voice."
              role="Design & build"
              stack={["Flutter", "Next.js", "TypeScript", "OpenAI", "Supabase"]}
              outcomes={[
                "Speak instead of write — real-time voice-to-chat conversation that listens, transcribes, and responds as you talk.",
                "Emotional awareness built in: mood and sentiment are tracked over time so patterns surface, not just entries.",
                "One product, two surfaces — a web app and a Flutter mobile app, designed voice-first from the ground up.",
              ]}
            />
          </div>
        </section>

        <div className="mt-12 mb-6">
          <p className="text-center text-sm text-gray-800 dark:text-gray-300 transition-colors duration-300">
            &copy; {new Date().getFullYear()} • Justine Nicolao • All Rights
            Reserved
          </p>
        </div>
      </div>
    </main>
  );
}
