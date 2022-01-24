import Header from "../components/Header";
import OtherDesigns from "../components/OtherDesigns";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ScrollToTop from "../components/ScrollToTop";

import airfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../assets/app-design/desktop/image-faceit.jpg";
import todo from "../assets/app-design/desktop/image-todo.jpg";
import loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";
import AllDesign from "../components/AllDesign";

import { motion } from "framer-motion";

const AppDesignPage = ({ dropMenu, onDropMenu }) => {
  const designs = [
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
      description:
        "A todo app that features cloud sync with light and dark mode",
    },
    {
      img: loopstudios,
      title: "LOOPSTUDIOS",
      description: "A VR experience app made for Loopstudios",
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
        className='grid bg-peach bg-no-repeat bg-left bg-fill bg-app-design px-6 py-20 t:mx-10 d:px-20 d:mx-40 gap-10 d:gap-0 text-center text-white t:rounded-xl'
      >
        <motion.article variants={introVariants} className='grid gap-5'>
          <motion.h1
            variants={introVariants}
            className='text-3xl font-medium tracking-wider t:text-4xl t:w-4/5 t:mx-auto'
          >
            App Design
          </motion.h1>
          <motion.p
            variants={introVariants}
            className='leading-7 text-sm font-light t:text-lg t:leading-8 t:w-4/5 t:mx-auto d:w-1/2'
          >
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </motion.p>
        </motion.article>
      </motion.section>

      {/* App Designs */}
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

      <OtherDesigns design1='web' design2='graphic' />

      <Footer />

      {dropMenu && <Menu onDropMenu={onDropMenu} />}

      <ScrollToTop />
    </main>
  );
};

export default AppDesignPage;
