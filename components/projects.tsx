"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl?: string
  category: string
}

interface ProjectCardProps {
  project: Project
  index: number
  inView: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Loan Management System",
    description: "A web application to track Loans and company finances, including expenses, income, and budget planning. Live demo unavailable.",
    image: "/lms.jpeg?height=400&width=600",
    tags: ["Php", "Laravel", "MySQL"],
    liveUrl: "https://example.com",
    category: "Web Application",
  },
  {
    id: 2,
    title: "Eziit System",
    description: "A Fintech System for managing financial transactions and user accounts. Live demo unavailable.",
    image: "/eziit (3).jpeg?height=400&width=600",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://example.com",
    category: "Web Application",
  },
  {
    id: 3,
    title: "Whence Financial Services",
    description: "A Company Website",
    image: "/whencegroup.png?height=400&width=600",
    tags: ["Python", "Html", "Css"],
    liveUrl: "https://whencegroup.com/",
    category: "web",
  },
  {
    id: 4,
    title: "X-press Automotive Fitness",
    description: "An e-commerce web-app.",
    image: "/xpress.jpeg?height=400&width=600",
    tags: ["React", "Next.js", "TypeScript"],
    liveUrl: "https://xpressservices.netlify.app/",
    category: "web",
  },
  {
    id: 5,
    title: "Valentine's Day",
    description: "Will you be my valentine?",
    image: "/valentine.jpeg?height=400&width=600",
    tags: [ "CSS", "html"],
    liveUrl: "https://plsbe-mine.netlify.app/",
    category: "web",
  }
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="bg-background py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are some of the projects I've worked on
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} inView={inView} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    >
      <Card className="h-full overflow-hidden card-hover">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}