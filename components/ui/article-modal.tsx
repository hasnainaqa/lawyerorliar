"use client"

import type React from "react"

import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface ArticleModalProps {
  isOpen: boolean
  onClose: () => void
  article: {
    title: string
    content: React.ReactNode
    author?: string
    date?: string
    image?: string
  }
}

export function ArticleModal({ isOpen, onClose, article }: ArticleModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!mounted) return null

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">{article.title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="overflow-y-auto p-6">
          {article.image && (
            <div className="mb-6">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          {article.author && article.date && (
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span>By {article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
          )}

          <div className="prose dark:prose-invert max-w-none">{article.content}</div>
        </div>
      </div>
    </div>
  )
}

