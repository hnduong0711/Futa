import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      title: ["Anton", "sans-serif"],
      content: ["josefin sans", "sans-serif"],
    },
    extend: {
      colors: {
        "futa-primary": "rgb(239 82 34)",
        "futa-primary-light": "rgb(254 243 240)",
        "futa-heading-text": "#00613d",

      },
      backgroundImage: {
        "header-background": 'linear-gradient(to bottom, rgb(252, 150, 41), rgb(204, 31, 2))',
      },
      borderRadius: {
        "custom-10px": "10px", // Khai báo border radius tùy chỉnh
      },
      keyframes: {
        scaleUpDown: {
          "0%, 100%": { transform: "scale(1)" }, // Kích thước ban đầu
          "50%": { transform: "scale(1.2)" }, // Phóng to ở giữa
        },
      },
      animation: {
        scaleLoop: "scaleUpDown 1s ease-in-out infinite", // Hiệu ứng lặp vô hạn
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".button": {
          "@apply text-[14px] font-bold flex rounded-md items-center justify-center cursor-pointer relative overflow-hidden":
            {},
          ".md:button": {
            "@apply flex": {},
          },
        },
        ".select-data-btn": {
          "@apply border border-cinestar-purple rounded-md text-[16px] flex  px-2 py-3  bg-white font-bold overflow-hidden text-ellipsis whitespace-nowrap":
            {},
        },
        ".heading": {
          "@apply text-4xl font-title tracking-wide uppercase": {},
        },
      });
    }),
  ],
};
