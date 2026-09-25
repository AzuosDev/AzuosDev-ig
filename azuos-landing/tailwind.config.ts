import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: token("paper"),
        "paper-2": token("paper-2"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        line: token("line"),
        ink: token("ink"),
        body: token("body"),
        muted: token("muted"),
        accent: token("accent"),
        signal: token("signal"),
        "signal-2": token("signal-2"),
        "on-signal": token("on-signal"),
        scene: token("scene"),
        "scene-line": token("scene-line"),
        brand: {
          start: "#7C3AED",
          end: "#A78BFA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.04em",
      },
      maxWidth: {
        page: "88rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)", filter: "blur(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
