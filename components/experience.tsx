"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Building } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2023 - Present",
    description:
      "Developing and maintaining responsive web applications using React and Next.js. Collaborating with designers and backend developers to implement new features and improve user experience.",
    achievements: [
      "Reduced page load time by 40% through code optimization and lazy loading",
      "Implemented a component library that improved development efficiency by 30%",
      "Led the migration from CSS modules to Tailwind CSS, resulting in more consistent UI",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    id: 2,
    role: "Junior Web Developer",
    company: "Digital Innovations",
    period: "Jun 2022 - Dec 2022",
    description:
      "Worked on developing and maintaining client websites and web applications. Collaborated with the design team to implement responsive layouts and interactive features.",
    achievements: [
      "Developed a custom CMS for a client that reduced content update time by 50%",
      "Implemented SEO best practices that improved client site rankings by 25%",
      "Created reusable UI components that were adopted across multiple projects",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "WordPress"],
  },
  {
    id: 3,
    role: "Web Development Intern",
    company: "StartUp Hub",
    period: "Jan 2022 - May 2022",
    description:
      "Assisted in the development of web applications and learned industry best practices. Participated in code reviews and team meetings to understand the development workflow.",
    achievements: [
      "Developed a dashboard feature that was included in the final product",
      "Fixed 20+ bugs in the existing codebase",
      "Created documentation for the onboarding process for future interns",
    ],
    technologies: ["JavaScript", "React", "Bootstrap", "Git"],
  },
]

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="bg-secondary/30 py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My professional journey as a software engineer
        </motion.p>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative mb-12 md:mb-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-6 ${
                  index % 2 === 0 ? "right-0 md:-right-6" : "left-0 md:-left-6"
                } w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center z-10`}
              >
                <Briefcase className="h-5 w-5 text-primary" />
              </div>

              {/* Content card */}
              <div className={`relative ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className={`flex items-center mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Building className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-muted-foreground">{exp.company}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>

                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>

                    <p className="mb-4 text-muted-foreground">{exp.description}</p>

                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className={`list-disc ${index % 2 === 0 ? "md:ml-auto md:text-right" : "ml-5"} mb-4 space-y-1`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className={index % 2 === 0 ? "md:list-none" : ""}>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
