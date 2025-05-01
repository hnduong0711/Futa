// import plugin from "tailwindcss/plugin";

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
    extend: {
      colors: {
        "futa-primary": "rgb(239 82 34)",
        "futa-primary-light": "rgb(254 243 240)",
        "futa-heading": "#00613d",
        "futa-subheading": "#637280",
        "futa-primary-hover": "#fc7b4c"

      },
      backgroundImage: {
        "header-background": 'linear-gradient(to bottom, rgb(252, 150, 41), rgb(204, 31, 2))',
      },
      borderRadius: {
        "custom-10px": "10px", // Khai báo border radius tùy chỉnh
      },
      backgroundImage: {
        "disable-seat": "url('assets/icons/seats/seat_disabled.svg')",
        "active-seat": "url('assets/icons/seats/seat_active.svg')",
        "selecting-seat": "url('assets/icons/seats/seat_selecting.svg')",
      },
      keyframes: {
        bgSlideIn: {
          'from': { transform: 'translateY(-100%)' },
          'to': { transform: 'translateY(0)' },
        },
        bgSlideUp: {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'bg-slide-in': 'bgSlideIn 0.3s ease-in-out forwards',
        'bg-slide-up': 'bgSlideUp 0.3s ease-in-out forwards',
      },
    },
  },
  // plugins: [
  //   plugin(function ({ addBase, addComponents }) {
  //     addBase({});
  //     addComponents({
  //       ".button": {
  //         "@apply text-[14px] font-bold flex rounded-md items-center justify-center cursor-pointer relative overflow-hidden":
  //           {},
  //         ".md:button": {
  //           "@apply flex": {},
  //         },
  //       },
  //       ".select-data-btn": {
  //         "@apply border border-cinestar-purple rounded-md text-[16px] flex  px-2 py-3  bg-white font-bold overflow-hidden text-ellipsis whitespace-nowrap":
  //           {},
  //       },
  //       ".heading": {
  //         "@apply text-4xl tracking-wide uppercase": {},
  //       },
  //     });
  //   }),
  // ],
};
