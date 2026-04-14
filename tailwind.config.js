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

     "from-purple-600",
    "to-pink-600",
    "from-green-500",
    "to-green-600",
    "from-blue-600",
    "to-cyan-600",
    "from-red-600",
    "to-orange-600",
  ],
   theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        ring: "var(--ring)",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",

        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
      },
    },
  },
  plugins: [],
}