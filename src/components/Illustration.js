import { motion } from "framer-motion";
const Illustration = ({ img, title, description }) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className='grid t:grid-cols-3 d:grid-cols-1 d:text-center t:justify-items-start t:text-left t:items-center gap-8 text-center'
    >
      <div className='bg-no-repeat bg-center bg-contain bg-hero-home d:mx-auto'>
        <img src={img} alt='passionate' className='mx-auto' />
      </div>
      <article className='grid t:col-span-2 gap-5'>
        <h3 className='text-xl tracking-widest'>{title}</h3>
        <p className='leading-8 text-sm font-light w-4/5 mx-auto t:w-full t:mx-0'>
          {description}
        </p>
      </article>
    </motion.li>
  );
};

export default Illustration;
