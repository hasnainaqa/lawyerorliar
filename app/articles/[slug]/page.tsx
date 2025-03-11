import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { articlesData } from "@/data/articles"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articlesData[params.slug]

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    }
  }

  return {
    title: `${article.title} | Israr Ahmad - Advocate & Legal Consultant`,
    description: article.metaDescription,
    keywords: article.metaKeywords,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articlesData[params.slug]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-20">

        <article className="prose dark:prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary-800 mb-6">{article.title}</h1>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
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
              <div key={index} className="mt-8">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

          {article.conclusion && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p>{article.conclusion}</p>
            </div>
          )}
        </article>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({
    slug,
  }))
}

