import Header from "../components/Header";
import OtherDesigns from "../components/OtherDesigns";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ScrollToTop from "../components/ScrollToTop";
import AllDesign from "../components/AllDesign";
import { designs, introVariants } from "../lib/constant";

import { motion } from "framer-motion";

const WebDesignPage = ({ dropMenu, onDropMenu }) => {
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
