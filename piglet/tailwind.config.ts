import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'cream': '#ECE8EC',
      'pink': '#FFC2D4',
      'red': '#841637',
      'turquoise': '#76BCBC',
      'navy': '#244856',
    },
  },
  plugins: [],
}
export default config
