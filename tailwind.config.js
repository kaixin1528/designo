module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      peach: "#E7816B",
      black: "#1D1C1E",
      "light-peach": "#FFAD9B",
      "very-light-peach": "#FDF3F0",
      "dark-grey": "#333136",
      "light-grey": "#F1F3F5",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      peach: "#E7816B",
      black: "#1D1C1E",
      "light-peach": "#FFAD9B",
      "dark-grey": "#333136",
      "light-grey": "#F1F3F5",
    }),
    extend: {
      screens: {
        t: "768px",
        d: "1024px",
      },
      backgroundImage: {
        "hero-home": "url('./assets/home/desktop/bg-pattern-hero-home.svg')",
        "m-web-design": "url('./assets/home/mobile/image-web-design.jpg')",
        "t-web-design": "url('./assets/home/tablet/image-web-design.jpg')",
        "d-web-design":
          "url('./assets/home/desktop/image-web-design-large.jpg')",
        "m-app-design": "url('./assets/home/mobile/image-app-design.jpg')",
        "t-app-design": "url('./assets/home/tablet/image-app-design.jpg')",
        "d-app-design": "url('./assets/home/desktop/image-app-design.jpg')",
        "m-graphic-design":
          "url('./assets/home/mobile/image-graphic-design.jpg')",
        "t-graphic-design":
          "url('./assets/home/tablet/image-graphic-design.jpg')",
        "d-graphic-design":
          "url('./assets/home/desktop/image-graphic-design.jpg')",
        "m-footer":
          "url('./assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg')",
        "t-footer":
          "url('./assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg')",
        "d-footer":
          "url('./assets/shared/desktop/bg-pattern-call-to-action.svg')",
        "m-about":
          "url('./assets/about/mobile/bg-pattern-hero-about-mobile.svg')",
        "d-about":
          "url('./assets/about/desktop/bg-pattern-hero-about-desktop.svg')",
        "m-about-hero": "url('./assets/about/mobile/image-about-hero.jpg')",
        "t-about-hero": "url('./assets/about/tablet/image-about-hero.jpg')",
        "d-about-hero": "url('./assets/about/desktop/image-about-hero.jpg')",
        "m-world-class":
          "url('./assets/about/mobile/image-world-class-talent.jpg')",
        "t-world-class":
          "url('./assets/about/tablet/image-world-class-talent.jpg')",
        "d-world-class":
          "url('./assets/about/desktop/image-world-class-talent.jpg')",
        "m-real-deal": "url('./assets/about/mobile/image-real-deal.jpg')",
        "t-real-deal": "url('./assets/about/tablet/image-real-deal.jpg')",
        "d-real-deal": "url('./assets/about/desktop/image-real-deal.jpg')",
        "t-canada": "url('./assets/locations/tablet/image-map-canada.png')",
        "d-canada": "url('./assets/locations/desktop/image-map-canada.png')",
        "t-australia":
          "url('./assets/locations/tablet/image-map-australia.png')",
        "d-australia":
          "url('./assets/locations/desktop/image-map-australia.png')",
        "t-uk": "url('./assets/locations/tablet/image-map-uk.png')",
        "d-uk":
          "url('./assets/locations/desktop/image-map-united-kingdom.png')",
        "m-contact-hero":
          "url('./assets/contact/desktop/bg-pattern-hero-desktop.svg')",
        "web-design":
          "url('./assets/web-design/desktop/bg-pattern-intro-web.svg')",
        "app-design":
          "url('./assets/app-design/desktop/bg-pattern-intro-app.svg')",
        "graphic-design":
          "url('./assets/graphic-design/desktop/bg-pattern-intro-graphic.svg')",
        locations: "url('./assets/shared/desktop/bg-pattern-two-circles.svg')",
        about: "url('./assets/shared/desktop/bg-pattern-three-circles.svg')",
      },
    },
  },
  plugins: [],
};
