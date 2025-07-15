module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
          text3: "var(--global-text-3)",
          text4: "var(--global-text-4)",
          text5: "var(--global-text-5)",
          text6: "var(--global-text-6)",
          text7: "var(--global-text-7)"
        },
        header: {
          text1: "var(--header-text-1)"
        },
        button: {
          background1: "var(--button-bg-1)",
          text1: "var(--button-text-1)"
        },
        footer: {
          background1: "var(--footer-bg-1)",
          text1: "var(--footer-text-1)"
        },
        edittext: {
          background1: "var(--edittext-bg-1)",
          text1: "var(--edittext-text-1)"
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        bricolage: ['Bricolage Grotesque', 'sans-serif']
      }
    }
  },
  plugins: []
};