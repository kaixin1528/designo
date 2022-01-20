import { motion } from "framer-motion";

const AllDesign = ({ img, title, description }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
      viewport={{ once: false }}
      className='grid t:grid-cols-2 d:grid-cols-1 t:items-center group bg-very-light-peach hover:bg-peach transition duration-200 ease-in-out transform hover:scale-105 rounded-xl'
    >
      <img
        src={img}
        alt='design'
        className='rounded-t-lg t:rounded-tr-none t:rounded-l-lg d:rounded-t-lg d:rounded-bl-none'
      />
      <article className='grid py-10 px-8 gap-5 text-center'>
        <h3 className='text-xl text-peach font-medium group-hover:text-white tracking-widest'>
          {title}
        </h3>
        <p className='group-hover:text-white text-xs leading-7 font-light tracking-widest'>
          {description}
        </p>
      </article>
    </motion.button>
  );
};

export default AllDesign;
