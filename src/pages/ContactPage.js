import CompanyLocations from "../components/CompanyLocations";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ScrollToTop from "../components/ScrollToTop";
import ContactFooter from "../components/ContactFooter";
import { motion } from "framer-motion";

const ContactPage = ({ dropMenu, onDropMenu }) => {
  const introVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.5 },
    },
  };

  return (
    <main className='grid relative min-h-screen'>
      <Header dropMenu={dropMenu} onDropMenu={onDropMenu} />
      <motion.section
        variants={introVariants}
        initial='hidden'
        animate='visible'
        className='grid d:grid-cols-2 d:gap-20 d:items-center px-6 py-20 t:px-20 t:mx-10 d:mx-40 t:rounded-lg t:text-left mb-28 gap-10 text-center text-white bg-no-repeat bg-top d:bg-left bg-contain bg-m-contact-hero bg-peach'
      >
        <motion.article variants={introVariants} className='grid gap-10'>
          <motion.h1
            variants={introVariants}
            className='text-3xl t:text-4xl font-medium'
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={introVariants}
            className='text-sm font-light leading-7 d:leading-8'
          >
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </motion.p>
        </motion.article>
        <motion.form
          variants={introVariants}
          className='text-sm'
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type='text'
            name='Name'
            placeholder='Name'
            className='w-full pb-4 pt-8 pl-3 border-b focus:border-b-2 border-white focus:outline-none bg-transparent placeholder:font-medium placeholder:text-gray-100 placeholder:text-opacity-50'
          />
          <input
            type='text'
            name='Email Address'
            placeholder='Email Address'
            className='w-full pb-4 pt-8 pl-3 border-b focus:border-b-2 border-white focus:outline-none bg-transparent placeholder:font-medium placeholder:text-gray-100 placeholder:text-opacity-50'
          />
          <input
            type='text'
            name='Phone'
            placeholder='Phone'
            className='w-full pb-4 pt-8 pl-3 border-b focus:border-b-2 border-white focus:outline-none bg-transparent placeholder:font-medium placeholder:text-gray-100 placeholder:text-opacity-50'
          />
          <input
            type='text'
            name='Message'
            placeholder='Your Message'
            className='w-full pb-28 pt-8 pl-3 border-b focus:border-b-2 border-white focus:outline-none bg-transparent placeholder:font-medium placeholder:text-gray-100 placeholder:text-opacity-50'
          />
          <button
            type='submit'
            className='bg-white hover:bg-light-peach hover:text-white mt-10 text-sm font-medium tracking-widest text-black p-5 px-12 rounded-lg'
          >
            SUBMIT
          </button>
        </motion.form>
      </motion.section>
      <CompanyLocations />
      <ContactFooter />
      {dropMenu && <Menu onDropMenu={onDropMenu} />}
      <ScrollToTop />
    </main>
  );
};

export default ContactPage;
