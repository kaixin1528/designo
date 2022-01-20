import Header from "../components/Header";
import OtherDesigns from "../components/OtherDesigns";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ScrollToTop from "../components/ScrollToTop";

import express from "../assets/web-design/desktop/image-express.jpg";
import transfer from "../assets/web-design/desktop/image-transfer.jpg";
import photon from "../assets/web-design/desktop/image-photon.jpg";
import builder from "../assets/web-design/desktop/image-builder.jpg";
import blogr from "../assets/web-design/desktop/image-blogr.jpg";
import camp from "../assets/web-design/desktop/image-camp.jpg";
import AllDesign from "../components/AllDesign";

import { motion } from "framer-motion";

const WebDesignPage = ({ dropMenu, onDropMenu }) => {
  const designs = [
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

  const introVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 1 },
    },
  };

  return (
    <main className='grid relative min-h-screen'>
      <Header dropMenu={dropMenu} onDropMenu={onDropMenu} />

      {/* Intro */}
      <motion.section
        variants={introVariants}
        initial='hidden'
        animate='visible'
        className='grid bg-peach bg-no-repeat bg-center bg-cover bg-web-design px-6 py-20 t:mx-10 d:px-20 d:mx-40 gap-10 d:gap-0 text-center text-white t:rounded-xl'
      >
        <motion.article variants={introVariants} className='grid gap-5'>
          <motion.h1
            variants={introVariants}
            className='text-3xl font-medium tracking-wider t:text-4xl t:w-4/5 t:mx-auto'
          >
            Web Design
          </motion.h1>
          <motion.p
            variants={introVariants}
            className='leading-7 font-light text-sm t:leading-8 t:w-3/5 t:mx-auto d:w-2/5'
          >
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </motion.p>
        </motion.article>
      </motion.section>

      {/* Web Designs */}
      <ul className='grid d:grid-cols-3 mx-6 my-24 t:mx-10 d:mx-40 gap-10 '>
        {designs.map((design, index) => {
          return (
            <AllDesign
              key={index}
              img={design.img}
              title={design.title}
              description={design.description}
            />
          );
        })}
      </ul>

      <OtherDesigns design1='app' design2='graphic' />

      <Footer />

      {dropMenu && <Menu onDropMenu={onDropMenu} />}

      <ScrollToTop />
    </main>
  );
};

export default WebDesignPage;
