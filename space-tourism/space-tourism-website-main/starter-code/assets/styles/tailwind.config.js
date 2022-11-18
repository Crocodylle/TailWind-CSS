
tailwind.config = {
  theme: {
    extend: {
      colors: {
        blue: {
           escuro: "#0B0D17"
        },
        white:{ 
            claro: '#D0D6F9'
        },

      },
      fonFamily: {
        barlow: ["Barlow", "sans-serif"],
        barlow_condensed: ["Barlow Condensed", "sans-serif"],
        bellefair: ["bellefair", "sans=serif"],
      },
      backgroundImage: {
        "bg_home__desktop": "url('./starter-code/assets/home/background-home-desktop.jpg' )",
        "bg_home__mobile": "url('./starter-code/assets/home/background-home-mobile.jpg' )",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
};
