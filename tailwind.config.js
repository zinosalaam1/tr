/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   safelist: [
    // core colors
    "bg-background",
    "text-foreground",
    "border-border",
    "outline-ring",

    // common UI tokens
    "bg-primary",
    "text-primary-foreground",
    "bg-secondary",
    "text-secondary-foreground",
    "bg-muted",
    "text-muted-foreground",
    "bg-accent",
    "text-accent-foreground",
    "bg-destructive",
    "text-destructive-foreground",

    // layout + spacing (important)
    "flex",
    "grid",
    "hidden",
    "block",
    "inline-flex",

    // spacing (Tailwind might strip dynamic ones)
    "p-2","p-4","p-6",
    "m-2","m-4","m-6",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        ring: "var(--ring)",
      },
    },
  },
  plugins: [],
}