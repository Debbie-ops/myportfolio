"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML"],
  },
  {
    title: "Backend",
    icon: <Database className="h-8 w-8 mb-4 text-primary" />,
    skills: ["Node.js", "Express", "RESTful APIs", "MySQL", "PostgreSQL", "PHP", "Laravel"],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="bg-secondary/30 py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are the technologies and tools I work with
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full card-hover">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  </div>

                  <ul className="space-y-2">
                    {category.skills?.map((skill) => (
                      <li key={skill} className="flex items-center">
                        <Code className="h-4 w-4 mr-2 text-primary" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}