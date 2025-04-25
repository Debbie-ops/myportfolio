"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Software Engineer"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="section-container flex flex-col items-center text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-poppins">
            Hi, I'm <span className="gradient-text">Daliso D. Miti</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 font-poppins">
            <span>{typedText}</span>
            <span className="animate-blink">|</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8"
        >
          Building modern web applications with a focus on clean code, performance and user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex gap-4 mt-8"
        >
          {/*<Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} />
            </a>
          </Button>*/}
        </motion.div>
      </div>

      {/*<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <a href="#about">
            <ArrowDown size={24} />
          </a>
        </Button>
      </div>*/}
    </section>
  )
}
