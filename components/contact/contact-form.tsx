"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, ExternalLink } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const generateMailtoLink = () => {
    const recipient = "israrahmadvirk42@gmail.com"
    const subject = encodeURIComponent(formData.subject || "Legal Consultation Request")

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        (formData.phone ? `Phone: ${formData.phone}\n\n` : "\n") +
        `Message: ${formData.message}`,
    )

    return `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
        <p className="text-muted-foreground">Fill out the form below to contact us directly via email.</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 300 1234567"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject <span className="text-red-500">*</span>
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Legal Consultation"
              required
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Your Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please describe how we can help you..."
            required
            className="min-h-[150px] w-full"
          />
        </div>

        <a
          href={generateMailtoLink()}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full md:w-auto"
        >
          <Mail className="mr-2 h-4 w-4" /> Send Email <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

