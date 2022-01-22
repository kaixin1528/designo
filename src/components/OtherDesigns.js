import { Link } from "react-router-dom";
import arrow from "../assets/shared/desktop/icon-right-arrow.svg";
import { motion } from "framer-motion";

const OtherDesigns = ({ design1, design2 }) => {
  return (
    <section className='grid d:grid-cols-2 pb-80 px-6 t:px-10 d:px-40 gap-6 text-white text-center'>
      <Link to={`/${design1}-design`} className='grid'>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          className={`grid d:row-span-2 px-10 py-28 gap-3 t:gap-6 t:py-12 d:py-24 d:items-center bg-blend-multiply transition duration-300 ease-in-out transform hover:scale-105 bg-dark-grey hover:bg-peach bg-opacity-75 bg-no-repeat bg-center bg-cover bg-m-${design1}-design t:bg-t-${design1}-design d:bg-d-$${design1}-design rounded-xl`}
        >
          <h2 className='text-2xl t:text-3xl uppercase font-medium tracking-widest'>
            {design1} DESIGN
          </h2>
          <section className='grid grid-flow-col auto-cols-max mx-auto items-center gap-2'>
            <p className='text-sm font-light tracking-widest'>VIEW PROEJCTS</p>
            <img src={arrow} alt='arrow' />
          </section>
        </motion.button>
      </Link>
      <Link to={`/${design2}-design`} className='grid'>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          className={`grid d:row-span-2 px-10 py-28 gap-3 t:gap-6 t:py-12 d:py-24 d:items-center bg-blend-multiply transition duration-300 ease-in-out transform hover:scale-105 bg-dark-grey hover:bg-peach bg-opacity-75 bg-no-repeat bg-center bg-cover bg-m-${design2}-design t:bg-t-${design2}-design d:bg-d-$${design2}-design rounded-xl`}
        >
          <h2 className='text-2xl t:text-3xl uppercase font-medium tracking-widest'>
            {design2} DESIGN{" "}
          </h2>
          <section className='grid grid-flow-col auto-cols-max mx-auto items-center gap-2'>
            <p className='text-sm font-light tracking-widest'>VIEW PROEJCTS</p>
            <img src={arrow} alt='arrow' />
          </section>
        </motion.button>
      </Link>
    </section>
  );
};

export default OtherDesigns;
