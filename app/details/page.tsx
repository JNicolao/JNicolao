import React from "react";
import Link from "next/link";
import { Mail, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timeline } from "@/components/timeline";
import { SkillCategory } from "@/components/skill-category";
import { ProjectCard } from "@/components/project-card";

export default function Details() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <main className="container px-4 py-4 mx-auto">
        <div className="mb-4 text-center">
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm"></span>
            <span className="text-sm font-medium tracking-wide text-indigo-800 uppercase">
              Specializing in building exceptional digital experiences.
            </span>
          </div>
        </div>

        <section className="space-y-6">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-6 bg-indigo-100/50 p-1 rounded-full">
              <TabsTrigger
                value="experience"
                className="rounded-full data-[state=active]:bg-indigo-800 data-[state=active]:text-white py-2"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="rounded-full data-[state=active]:bg-indigo-800 data-[state=active]:text-white py-2"
              >
                Skills
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="experience"
              className="animate-in fade-in-50 duration-500"
            >
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 bg-indigo-500"></span>
                  <span className="text-sm font-medium tracking-wide text-indigo-700 uppercase font-aeonik">
                    Work History
                  </span>
                </div>
                <h3 className="text-[27px] font-extralight leading-[1.2] tracking-tight mb-4">
                  Professional Experience
                </h3>
              </div>
              <Timeline
                items={[
                  {
                    title: "Software Engineer - Contract",
                    company: "Pickspot Network",
                    period: "Jun 2024 - Present",
                    description: [
                      "Developing and deploying scalable web applications by implemented new features and functionalities using technologies including React, Node.js, and MongoDB, improving platform performance by 85%.",
                      "Collaborating with cross-functional teams to design and launch the new product along with a host of many features, contributing to a significant revenue boost and customer satisfaction.",
                      "Integrating third-party APIs and services thereby expanding our platform's capabilities and offering more value to users.",
                    ],
                  },
                  {
                    title: "Junior Software Engineer - Internship",
                    company: "eWAKA Mobility",
                    period: "Apr 2024 - Jun 2024",
                    description: [
                      "Designed and deployed a robust battery inventory management system, enabling administrators to electronically control battery swaps and monitor locations in real-time across multiple franchises.",
                      "Collaborated with cross-functional teams to ensure seamless integration of the new system with existing processes such as fleet management.",
                      "Developed a centralized platform that streamlined inventory control, reducing tracking errors by 35% and enhancing operational efficiency, resulting in significant cost savings and improved operational agility for the company.",
                    ],
                  },
                  {
                    title: "Fullstack Developer",
                    company: "Prasins Energy Limited",
                    period: "Jan 2024 - Mar 2024",
                    description: [
                      "Identified inefficiencies in the production process, implemented a streamlined workflow, resulting in a 18% reduction in production time.",
                      "Website development using JavaScript and related technologies (React and Next.js) gaining hands-on experience in building web applications.",
                      "Optimized website content, leading to a 25% increase in organic search traffic and a 15% improvement in conversion rates.",
                    ],
                  },
                ]}
              />
            </TabsContent>

            <TabsContent
              value="skills"
              className="animate-in fade-in-50 duration-500"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <SkillCategory
                  title="Frontend Development"
                  skills={[
                    {
                      name: "React",
                      subskills: [
                        "React 16+",
                        "Hooks",
                        "Context API",
                        "Next.js",
                        "TypeScript",
                        "TailwindCSS",
                        "Styled Components",
                        "Formik",
                        "TDD",
                        "PWA",
                      ],
                    },
                    {
                      name: "JavaScript",
                      subskills: [
                        "ES6+",
                        "DOM Manipulation",
                        "Async/Await",
                        "Fetch API",
                        "NPM",
                        "Webpack",
                        "Babel",
                      ],
                    },
                    {
                      name: "HTML/CSS",
                      subskills: [
                        "Semantic HTML",
                        "CSS3",
                        "Flexbox",
                        "Grid",
                        "Responsive Design",
                        "SASS/SCSS",
                        "CSS Modules",
                      ],
                    },
                    {
                      name: "Design",
                      subskills: [
                        "Figma",
                        "Webflow",
                        "Adobe XD",
                        "UI/UX Design",
                        "Prototyping",
                        "Wireframing",
                        "Design Systems",
                      ],
                    },
                  ]}
                />

                <SkillCategory
                  title="Backend Development"
                  skills={[
                    {
                      name: "Node.js",
                      subskills: [
                        "Express",
                        "REST APIs",
                        "JWT",
                        "Authentication",
                        "Middleware",
                        "MongoDB Integration",
                      ],
                    },
                    {
                      name: "Python",
                      subskills: [
                        "Django",
                        "Flask",
                        "Data Analysis",
                        "Scripting",
                        "Automation",
                      ],
                    },
                    {
                      name: "C",
                      subskills: [
                        "Embedded Systems",
                        "System Programming",
                        "Memory Management",
                        "Data Structures",
                        "Algorithms",
                      ],
                    },
                    {
                      name: "Databases",
                      subskills: [
                        "MongoDB",
                        "MySQL",
                        "PostgreSQL",
                        "Redis",
                        "Mongoose",
                        "Sequelize",
                        "Database Design",
                      ],
                    },
                  ]}
                />

                <SkillCategory
                  title="Tools & Platforms"
                  skills={[
                    {
                      name: "Version Control",
                      subskills: [
                        "Git",
                        "GitHub",
                        "GitLab",
                        "Branching Strategies",
                        "Pull Requests",
                        "Code Reviews",
                      ],
                    },
                    {
                      name: "DevOps",
                      subskills: [
                        "Docker",
                        "CI/CD",
                        "GitHub Actions",
                        "Vercel",
                        "Netlify",
                        "AWS",
                      ],
                    },
                  ]}
                />

                <SkillCategory
                  title="Professional Skills"
                  skills={[
                    {
                      name: "Development Practices",
                      subskills: [
                        "Agile Methodology",
                        "Scrum",
                        "Test-Driven Development",
                        "Code Reviews",
                        "Documentation",
                      ],
                    },
                    {
                      name: "Soft Skills",
                      subskills: [
                        "Team Collaboration",
                        "Problem Solving",
                        "Communication",
                        "Time Management",
                        "Mentoring",
                      ],
                    },
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section id="projects" className="py-10 mb-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-indigo-500"></span>
              <span className="text-sm font-medium tracking-wide text-indigo-700 uppercase font-aeonik">
                Portfolio
              </span>
            </div>
            <h2 className="text-[36px] font-extralight tracking-tight md:text-[48px] mb-4 leading-[1.15]">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              Showcasing my best work and contributions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <ProjectCard
              title="Battery Inventory System"
              description="A real-time battery management system that tracks battery swaps and locations across multiple franchises."
              tags={["React", "Node.js", "MongoDB", "Socket.io"]}
              image="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />

            <ProjectCard
              title="AI-Powered Task Manager"
              description="A sophisticated task management application with AI capabilities for prioritization and smart scheduling"
              tags={["Next.js", "TypeScript", "TensorFlow.js", "Tailwind CSS"]}
              image="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />

            <ProjectCard
              title="Real-time Collaboration Tool"
              description="A collaborative platform for teams to work together in real-time with document editing and video conferencing."
              tags={["React", "Node.js", "WebSockets", "WebRTC"]}
              image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              className="border-indigo-200 text-indigo-800 hover:bg-indigo-100/50 px-8 py-6 rounded-full text-lg font-bold transition-all hover:translate-y-[-2px] gap-2"
            >
              View All Projects
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </section>

        <section className="py-10 bg-indigo-950 text-white rounded-3xl overflow-hidden relative mb-12">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(119, 119, 142, 0.3),transparent_40%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.3),transparent_40%)]" />
          </div>

          <div className="relative container px-4 mx-auto">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-indigo-400"></span>
                <span className="text-sm font-medium tracking-wide text-indigo-300 uppercase font-aeonik">
                  Open Source
                </span>
              </div>
              <h2 className="text-[36px] font-extralight tracking-tight md:text-[48px] mb-4 leading-[1.15]">
                Community Contributions
              </h2>
              <p className="text-indigo-200 max-w-2xl mx-auto text-lg font-light">
                Projects I&apos;ve contributed to in the developer community
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/10 shadow-lg">
                <div className="h-48 bg-indigo-900/50 overflow-hidden">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.2),transparent_70%)]" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[27px] font-extralight leading-[1.2]">
                      DroidconKE
                    </h3>
                    <Badge className="bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30 border-none font-medium">
                      Contributor
                    </Badge>
                  </div>
                  <p className="text-indigo-200 mb-6 text-[18px] font-light leading-[1.3] tracking-tight">
                    Contributed to the official DroidconKE website and mobile
                    app, improving the developer experience
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-indigo-800/50 text-indigo-200 font-medium">
                        UI/UX
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-indigo-800/50 text-indigo-200 font-medium">
                        Frontend
                      </span>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-indigo-200 hover:text-white hover:bg-indigo-800/50 font-medium"
                    >
                      <Link
                        href="https://github.com/droidconKE"
                        target="_blank"
                        className="flex items-center gap-1"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/10 shadow-lg">
                <div className="h-48 bg-indigo-900/50 overflow-hidden">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.2),transparent_70%)]" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[27px] font-extralight leading-[1.2]">
                      React Devs KE
                    </h3>
                    <Badge className="bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30 border-none font-medium">
                      Mentor
                    </Badge>
                  </div>
                  <p className="text-indigo-200 mb-6 text-[18px] font-light leading-[1.3] tracking-tight">
                    Active member of the React Devs KE community through
                    mentorship and code contributions
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-indigo-800/50 text-indigo-200 font-medium">
                        React
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-indigo-800/50 text-indigo-200 font-medium">
                        Community
                      </span>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-indigo-200 hover:text-white hover:bg-indigo-800/50 font-medium"
                    >
                      <Link
                        href="https://github.com/reactdevske"
                        target="_blank"
                        className="flex items-center gap-1"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/10 shadow-lg">
                <div className="h-48 bg-indigo-900/50 overflow-hidden">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.2),transparent_70%)]" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[27px] font-extralight leading-[1.2]">
                      FlutterconKE
                    </h3>
                    <Badge className="bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30 border-none font-medium">
                      Contributor
                    </Badge>
                  </div>
                  <p className="text-indigo-200 mb-6 text-[18px] font-light leading-[1.3] tracking-tight">
                    Contributed to the FlutterconKE website, the largest Flutter
                    conference in East Africa
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-indigo-800/50 text-indigo-200 font-medium">
                        Flutter
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-indigo-800/50 text-indigo-200 font-medium">
                        Dart
                      </span>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-indigo-200 hover:text-white hover:bg-indigo-800/50 font-medium"
                    >
                      <Link
                        href="https://github.com/FlutterconKE"
                        target="_blank"
                        className="flex items-center gap-1"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 py-16 bg-indigo-950 text-white rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_40%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.3),transparent_40%)]" />
          </div>

          <div className="relative container px-4 mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-indigo-400"></span>
              <span className="text-sm font-medium tracking-wide text-indigo-300 uppercase font-aeonik">
                Get in Touch
              </span>
            </div>

            <h2 className="text-[36px] font-extralight tracking-tight md:text-[48px] mb-6 leading-[1.15]">
              Let&apos;s Work Together
            </h2>

            <p className="text-indigo-200 max-w-2xl mx-auto text-lg font-light mb-10">
              Have a project in mind or looking to hire? I&apos;m always open to
              discussing new opportunities.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                className="bg-white hover:bg-white/90 text-indigo-950 px-8 py-6 rounded-full text-lg font-bold transition-all hover:translate-y-[-2px] hover:shadow-lg"
              >
                <Link
                  href="mailto:bororio96@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/50 text-white bg-white/20 px-8 py-6 rounded-full text-lg font-bold transition-all hover:translate-y-[-2px] shadow-md"
              >
                <Link href="/" className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 rotate-180" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
