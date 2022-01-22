import canada from "../assets/shared/desktop/illustration-canada.svg";
import australia from "../assets/shared/desktop/illustration-australia.svg";
import uk from "../assets/shared/desktop/illustration-united-kingdom.svg";
import { motion } from "framer-motion";

const CompanyLocations = () => {
  return (
    <section className='grid d:grid-cols-3 d:mx-40 pb-28 gap-16'>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
        className='grid gap-8 text-center'
      >
        <div className='bg-no-repeat bg-center bg-contain bg-hero-home'>
          <img src={canada} alt='canada' className='mx-auto' />
        </div>
        <h3 className='text-xl tracking-widest'>CANADA</h3>
        <a
          href='/locations'
          className='bg-peach hover:bg-light-peach text-white p-3 px-5 mx-auto rounded-lg'
        >
          SEE LOCATION
        </a>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
        className='grid gap-8 text-center'
      >
        <div className='bg-no-repeat bg-center bg-contain bg-hero-home'>
          <img src={australia} alt='australia' className='mx-auto' />
        </div>
        <h3 className='text-xl tracking-widest'>AUSTRALIA</h3>
        <a
          href='/locations'
          className='bg-peach hover:bg-light-peach text-white p-3 px-5 mx-auto rounded-lg'
        >
          SEE LOCATION
        </a>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
        className='grid gap-8 text-center'
      >
        <div className='bg-no-repeat bg-center bg-contain bg-hero-home'>
          <img src={uk} alt='uk' className='mx-auto' />
        </div>
        <h3 className='text-xl tracking-widest'>UNITED KINGDOM</h3>
        <a
          href='/locations'
          className='bg-peach hover:bg-light-peach text-white p-3 px-5 mx-auto rounded-lg'
        >
          SEE LOCATION
        </a>
      </motion.section>
    </section>
  );
};

export default CompanyLocations;
