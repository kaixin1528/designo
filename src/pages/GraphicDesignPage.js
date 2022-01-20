import Header from "../components/Header";
import OtherDesigns from "../components/OtherDesigns";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ScrollToTop from "../components/ScrollToTop";

import change from "../assets/graphic-design/desktop/image-change.jpg";
import water from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import science from "../assets/graphic-design/desktop/image-science.jpg";
import AllDesign from "../components/AllDesign";

import { motion } from "framer-motion";

const GraphicDesignPage = ({ dropMenu, onDropMenu }) => {
  const designs = [
    {
      img: change,
      title: "TIM BROWN",
      description:
        "A book cover designed for Tim Brown’s new release, ‘Change’",
    },
    {
      img: water,
      title: "BOXED WATER",
      description: "A simple packaging concept made for Boxed Water",
    },
    {
      img: science,
      title: "SCIENCE!",
      description:
        "A poster made in collaboration with the Federal Art Project",
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
      <motion.article
        variants={introVariants}
        initial='hidden'
        animate='visible'
        className='grid bg-peach bg-no-repeat bg-left bg-fill bg-graphic-design px-6 py-20 t:mx-10 d:px-20 d:mx-40 gap-10 d:gap-0 text-center text-white t:rounded-xl'
      >
        <motion.section variants={introVariants} className='grid gap-5'>
          <motion.h1
            variants={introVariants}
            className='text-3xl font-medium t:text-4xl t:w-4/5 t:mx-auto'
          >
            Graphic Design
          </motion.h1>
          <motion.p
            variants={introVariants}
            className='leading-7 font-light t:text-lg t:leading-8 t:w-4/6 t:mx-auto d:w-1/2'
          >
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </motion.p>
        </motion.section>
      </motion.article>

      {/* Graphic Designs */}
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

      <OtherDesigns design1='app' design2='web' />

      <Footer />

      {dropMenu && <Menu onDropMenu={onDropMenu} />}

      <ScrollToTop />
    </main>
  );
};

export default GraphicDesignPage;
