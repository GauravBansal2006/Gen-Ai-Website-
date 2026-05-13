import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1180px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Consolas", "monospace"]
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))"
      },
      boxShadow: {
        glow: "0 0 60px rgba(0, 136, 255, 0.28)",
        card: "0 24px 80px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(0,136,255,.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,136,255,.13) 1px, transparent 1px)",
        aurora: "radial-gradient(circle at 20% 20%, rgba(0,136,255,.24), transparent 28%), radial-gradient(circle at 80% 0%, rgba(255,255,255,.12), transparent 24%), radial-gradient(circle at 50% 80%, rgba(0,209,255,.15), transparent 28%)"
      },
      keyframes: {
        grid: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-48px, -48px, 0)" }
        },
        typing: {
          "0%, 12%": { width: "0%" },
          "42%, 72%": { width: "100%" },
          "88%, 100%": { width: "0%" }
        },
        blink: {
          "0%, 45%": { borderColor: "hsl(var(--primary))" },
          "46%, 100%": { borderColor: "transparent" }
        }
      },
      animation: {
        grid: "grid 18s linear infinite",
        typing: "typing 6s steps(28) infinite",
        blink: "blink 1s step-end infinite"
      }
    }
  },
  plugins: [animate, typography]
};

export default config;
