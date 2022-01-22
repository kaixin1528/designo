import Header from "../components/Header";
import heroPhone from "../assets/home/desktop/image-hero-phone.png";
import passionate from "../assets/home/desktop/illustration-passionate.svg";
import resourceful from "../assets/home/desktop/illustration-resourceful.svg";
import friendly from "../assets/home/desktop/illustration-friendly.svg";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ScrollToTop from "../components/ScrollToTop";
import Illustration from "../components/Illustration";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import arrow from "../assets/shared/desktop/icon-right-arrow.svg";

const Homepage = ({ dropMenu, onDropMenu }) => {
  const illustrations = [
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

  const introVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 1 },
    },
  };

  return (
    <main className='grid relative min-h-screen font-jost'>
      <Header dropMenu={dropMenu} onDropMenu={onDropMenu} />

      {/* Intro */}
      <motion.section
        variants={introVariants}
        initial='hidden'
        animate='visible'
        className='grid d:grid-cols-3 d:items-center bg-peach overflow-hidden bg-no-repeat bg-left-top t:bg-right-top bg-cover t:bg-fill bg-hero-home px-6 py-20 d:px-20 t:mx-10 d:mx-40 gap-10 d:gap-0 text-center text-white t:rounded-lg d:text-left'
      >
        <motion.article
          variants={introVariants}
          className='grid d:col-span-2 gap-5'
        >
          <motion.h1
            variants={introVariants}
            className='text-3xl font-medium t:text-4xl w-5/6 mx-auto t:w-4/5 d:ml-0'
          >
            Award-winning custom designs and digital branding solutions
          </motion.h1>
          <motion.p
            variants={introVariants}
            className='text-sm w-4/5 mx-auto leading-7 font-light d:ml-0 t:w-4/6'
          >
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </motion.p>
          <Link to='/web-design'>
            <motion.button
              variants={introVariants}
              whileHover={{
                backgroundColor: "#FFAD9B",
                color: "white",
                scale: 1.1,
              }}
              className='mx-auto d:ml-0 bg-white text-black text-sm font-medium py-4 px-6 rounded-lg'
            >
              LEARN MORE
            </motion.button>
          </Link>
        </motion.article>
        <motion.div
          variants={introVariants}
          className='h-72 t:h-96 t:mb-20 d:mb-0'
        >
          <img
            src={heroPhone}
            alt='hero-phone'
            className='mx-auto t:scale-110 d:scale-150 d:mt-10'
          />
        </motion.div>
      </motion.section>

      {/* Designs */}
      <ul className='grid d:grid-cols-2 px-6 py-32 t:px-10 d:px-40 gap-6 text-white text-center'>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          key={0}
          className={`grid px-10 py-28 d:py-64
            gap-3 t:gap-6 t:py-12 d:items-center bg-blend-multiply transition duration-300 ease-in-out transform hover:scale-105 bg-dark-grey hover:bg-peach bg-opacity-75 bg-center bg-cover bg-m-web-design t:bg-t-web-design d:bg-d-web-design rounded-xl`}
        >
          <Link to={`/web-design`} className='grid d:row-span-2'>
            <h2 className='text-2xl t:text-3xl font-medium tracking-widest'>
              WEB DESIGN
            </h2>
            <section className='grid grid-flow-col auto-cols-max mx-auto items-center gap-5'>
              <p className='text-sm font-light tracking-widest'>
                VIEW PROEJCTS
              </p>
              <img src={arrow} alt='arrow' />
            </section>
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          key={1}
          className={`grid px-10 py-28 d:py-28 gap-3 t:gap-6 t:py-12 d:items-center bg-blend-multiply transition duration-300 ease-in-out transform hover:scale-105 bg-dark-grey hover:bg-peach bg-opacity-75 bg-center bg-cover bg-m-app-design t:bg-t-app-design d:bg-d-app-design rounded-xl`}
        >
          <Link to={`/app-design`} className='grid'>
            <h2 className='text-2xl t:text-3xl font-medium tracking-widest'>
              APP DESIGN
            </h2>
            <section className='grid grid-flow-col auto-cols-max mx-auto items-center gap-5'>
              <p className='text-sm font-light tracking-widest'>
                VIEW PROEJCTS
              </p>
              <img src={arrow} alt='arrow' />
            </section>
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          key={2}
          className={`grid px-10 py-28 d:py-28 gap-3 t:gap-6 t:py-12 d:items-center bg-blend-multiply transition duration-300 ease-in-out transform hover:scale-105 bg-dark-grey hover:bg-peach bg-opacity-75 bg-center bg-cover bg-m-graphic-design t:bg-t-graphic-design d:bg-d-graphic-design rounded-xl`}
        >
          <Link to={`/graphic-design`} className='grid'>
            <h2 className='text-2xl t:text-3xl font-medium tracking-widest'>
              GRAPHIC DESIGN
            </h2>
            <section className='grid grid-flow-col auto-cols-max mx-auto items-center gap-5'>
              <p className='text-sm font-light tracking-widest'>
                VIEW PROEJCTS
              </p>
              <img src={arrow} alt='arrow' />
            </section>
          </Link>
        </motion.li>
      </ul>

      {/* Illustrations */}
      <ul className='grid d:grid-cols-3 px-6 pb-80 t:px-10 d:px-40 gap-24'>
        {illustrations.map((illustration, index) => {
          return (
            <Illustration
              key={index}
              img={illustration.img}
              title={illustration.title}
              description={illustration.description}
            />
          );
        })}
      </ul>

      <Footer />

      <AnimatePresence>
        {dropMenu && <Menu onDropMenu={onDropMenu} />}
      </AnimatePresence>
      <ScrollToTop />
    </main>
  );
};

export default Homepage;
