"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Image from "next/image"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 -z-10 transform rotate-3" />
            <div className="absolute inset-0 rounded-2xl border border-primary/10 transform -rotate-3" />
            <div className="relative h-full w-full overflow-hidden rounded-xl border border-border">
              <Image
                src="/me.jpeg?height=600&width=600"
                alt="Daliso"
                width={600}
                height={600}
                className="object-cover h-full w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/*<h3 className="text-2xl font-bold mb-4 font-poppins">
              Software Engineer with a passion for building exceptional digital experiences
            </h3>*/}

            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a software engineer with over a year of professional experience in developing modern web
                applications. My journey in software development began with a strong foundation in computer science and
                has evolved through hands on experience with various technologies and frameworks.
              </p>

              <p>
                I specialize in full stack development, with my experience including frameworks like React and Laravel. I'm passionate about writing clean, maintainable code and creating intuitive user
                interfaces that provide exceptional user experiences.
              </p>

              <p>
                When I'm not coding, you can find me exploring new places and adventures as a creative {";)"}
              </p>
            </div>

            <div className="mt-8">
              <Button asChild>
                <a href="/DALISO.MITICV.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
