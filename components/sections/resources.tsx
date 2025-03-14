"use client"

import { useState } from "react"
import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArticleModal } from "@/components/ui/article-modal"
import { articles } from "@/lib/articles"

export default function Resources() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null)

  const openArticle = (index: number) => {
    setSelectedArticle(index)
  }

  const closeArticle = () => {
    setSelectedArticle(null)
  }

  return (
    <section id="resources" className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Legal Resources
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Helpful Legal Articles & Resources</h2>
          <p className="text-muted-foreground max-w-[800px] mb-8">
            Stay informed with our collection of legal articles, guides, and resources designed to help you understand
            your rights and navigate legal challenges effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{article.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <Button
                  variant="ghost"
                  className="group text-primary hover:text-primary/80 p-0 h-auto font-medium"
                  onClick={() => openArticle(index)}
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {selectedArticle !== null && (
          <ArticleModal isOpen={selectedArticle !== null} onClose={closeArticle} article={articles[selectedArticle]} />
        )}
      </div>
    </section>
  )
}

