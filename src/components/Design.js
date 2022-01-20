import { Link } from "react-router-dom";
import arrow from "../assets/shared/desktop/icon-right-arrow.svg";
import { motion } from "framer-motion";

const Design = ({ link, title }) => {
  return (
    <Link
      to={`/${link}`}
      className={`grid ${title === "WEB" ? "d:row-span-2" : ""}`}
    >
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: false }}
        className={`grid px-10 py-28 ${
          title === "WEB" ? "d:py-64" : "d:py-28"
        } gap-3 t:gap-6 t:py-12 d:items-center bg-blend-multiply transition duration-300 ease-in-out transform hover:scale-105 bg-dark-grey hover:bg-peach bg-opacity-75 bg-center bg-cover bg-m-${link} t:bg-t-${link} d:bg-${link} rounded-xl`}
      >
        <h2 className='text-2xl t:text-3xl font-medium tracking-widest'>
          {title} DESIGN
        </h2>
        <section className='grid grid-flow-col auto-cols-max mx-auto items-center gap-5'>
          <h5 className='text-sm font-light tracking-widest'>VIEW PROEJCTS</h5>
          <img src={arrow} alt='arrow' />
        </section>
      </motion.section>
    </Link>
  );
};

export default Design;
