import passionate from "../assets/home/desktop/illustration-passionate.svg";
import resourceful from "../assets/home/desktop/illustration-resourceful.svg";
import friendly from "../assets/home/desktop/illustration-friendly.svg";

import express from "../assets/web-design/desktop/image-express.jpg";
import transfer from "../assets/web-design/desktop/image-transfer.jpg";
import photon from "../assets/web-design/desktop/image-photon.jpg";
import builder from "../assets/web-design/desktop/image-builder.jpg";
import blogr from "../assets/web-design/desktop/image-blogr.jpg";
import camp from "../assets/web-design/desktop/image-camp.jpg";

import airfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../assets/app-design/desktop/image-faceit.jpg";
import todo from "../assets/app-design/desktop/image-todo.jpg";
import loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";

import change from "../assets/graphic-design/desktop/image-change.jpg";
import water from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import science from "../assets/graphic-design/desktop/image-science.jpg";

export const illustrations = [
  {
    img: passionate,
    title: "PASSIONATE",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    img: resourceful,
    title: "RESOURCEFUL",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.",
  },
  {
    img: friendly,
    title: "FRIENDLY",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

export const webDesigns = [
  {
    img: express,
    title: "EXPRESS",
    description: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    img: transfer,
    title: "TRANSFER",
    description:
      "Site for low-cost money transfers and sending money within seconds",
  },
  {
    img: photon,
    title: "PHOTON",
    description:
      " A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    img: builder,
    title: "BUILDER",
    description:
      "Connects users with local contractors based on their location",
  },
  {
    img: blogr,
    title: "BLOGR",
    description:
      "Blogr is a platform for creating an online blog or publication",
  },
  {
    img: camp,
    title: "CAMP",
    description:
      "Get expert training in coding, data, design, and digital marketing",
  },
];

export const appDesigns = [
  {
    img: airfilter,
    title: "AIRFILTER",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    img: eyecam,
    title: "EYECAM",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    img: faceit,
    title: "FACEIT",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
  },
  {
    img: todo,
    title: "TODO",
    description: "A todo app that features cloud sync with light and dark mode",
  },
  {
    img: loopstudios,
    title: "LOOPSTUDIOS",
    description: "A VR experience app made for Loopstudios",
  },
];

export const graphicDesigns = [
  {
    img: change,
    title: "TIM BROWN",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
  },
  {
    img: water,
    title: "BOXED WATER",
    description: "A simple packaging concept made for Boxed Water",
  },
  {
    img: science,
    title: "SCIENCE!",
    description: "A poster made in collaboration with the Federal Art Project",
  },
];

export const introVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 1 },
  },
};
