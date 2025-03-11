"use client"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { articlesData } from "@/data/articles"

interface ArticleModalProps {
  slug: string
  buttonText?: string
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  buttonClassName?: string
}

export function ArticleModal({
  slug,
  buttonText = "Read More",
  buttonVariant = "default",
  buttonClassName,
}: ArticleModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const article = articlesData[slug]

  if (!article) {
    return null
  }

  return (
    <>
      <Button variant={buttonVariant} className={buttonClassName} onClick={() => setIsOpen(true)}>
        {buttonText}
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={article.title}>
        <div className="prose dark:prose-invert max-w-none">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          {article.content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}

          {article.sections &&
            article.sections.map((section, index) => (
              <div key={index} className="mt-6">
                <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

          {article.conclusion && (
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">Conclusion</h3>
              <p>{article.conclusion}</p>
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}

