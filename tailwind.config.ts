import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(215, 60%, 25%)", // Deep navy blue
          foreground: "hsl(0, 0%, 98%)",
          100: "hsl(215, 60%, 95%)",
          200: "hsl(215, 60%, 85%)",
          300: "hsl(215, 60%, 75%)",
          400: "hsl(215, 60%, 65%)",
          500: "hsl(215, 60%, 55%)",
          600: "hsl(215, 60%, 45%)",
          700: "hsl(215, 60%, 35%)",
          800: "hsl(215, 60%, 25%)",
          900: "hsl(215, 60%, 15%)",
        },
        secondary: {
          DEFAULT: "hsl(35, 80%, 50%)", // Gold accent
          foreground: "hsl(215, 60%, 25%)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(35, 80%, 50%)", // Gold accent
          foreground: "hsl(215, 60%, 25%)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
      },
      backgroundImage: {
        "hero-pattern": "url('/placeholder.svg?height=1080&width=1920')",
        texture: "url('/placeholder.svg?height=200&width=200')",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "var(--tw-prose-body)",
            lineHeight: "1.75",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

