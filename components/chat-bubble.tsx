"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, Bot } from "lucide-react"
import { useState } from "react"

export function ChatBubble() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
    >
      <Link
        href="/chat"
        className="fixed bottom-6 right-6 z-40 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:scale-110 transition-all duration-300" />
          
          {/* Main bubble */}
          <motion.div 
            className="relative bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-2 border-primary/20"
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.3 }}
          >
            <Bot className="h-6 w-6" />
          </motion.div>
          
          {/* Tooltip */}
          <motion.div
            className={`absolute bottom-full right-0 mb-2 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            Discuter avec Chronos
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
