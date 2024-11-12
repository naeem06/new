import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      animation:{
        needle:"needle  5s ease-in-out infinite",
        circle:"circle 4s ease-in-out infinite",
        spin:" spin 15s ease-in-out infinite",
        gol:" gol 10s ease-in-out infinite",
      },
      keyframes:{
        needle:{
          "0% 100%":{
            transform:"rotate(-10deg)",
          },
          "50%":{transform:"rotate(90deg)"},
        },
        circle:{
          "0% 100%":{
            transform:"rotate(-1deg)",
          },
          "50%":{transform:"rotate(-50deg)"},
        },
        spin:{
          "0% 100%":{
            transform:"rotate(0deg)",
          },
          "100% 0%":{transform:"rotate(0deg)"},
        },
        gol:{
          "0% 100%":{
            transform:"rotate(-0deg)",
          },
          "50%":{transform:"rotate(120deg)"},
        },
      },
        
    },
  },
  plugins: [],
} satisfies Config;
