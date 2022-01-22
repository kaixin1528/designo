import logoDark from "../assets/shared/desktop/logo-dark.png";
import menu from "../assets/shared/mobile/icon-hamburger.svg";
import close from "../assets/shared/mobile/icon-close.svg";
import { motion } from "framer-motion";

const Header = ({ dropMenu, onDropMenu }) => {
  const headerVariants = {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: "spring", duration: 3, stiffness: 200 },
    },
  };
  return (
    <motion.header
      variants={headerVariants}
      initial='hidden'
      animate='visible'
      className='grid grid-cols-3 t:grid-cols-5 d:grid-cols-6 px-6 py-7 t:px-10 t:py-10 d:px-40 d:py-12 items-center'
    >
      <a href='/' className='col-span-2 d:col-span-4 w-32'>
        <img src={logoDark} alt='logo' className='pt-1' />
      </a>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className='justify-self-end t:hidden'
        onClick={onDropMenu}
      >
        <img src={dropMenu ? close : menu} alt='menu' className='w-4/5' />
      </motion.button>
      <nav
        aria-label='top navigation'
        className='t:grid col-span-3 d:col-span-2 grid-cols-3 text-sm justify-items-end hidden'
      >
        <a
          href='/about-us'
          className='font-light tracking-widest hover:underline'
        >
          OUR COMPANY
        </a>
        <a
          href='/locations'
          className='font-light tracking-widest hover:underline'
        >
          LOCATIONS
        </a>
        <a
          href='/contact'
          className='font-light tracking-widest hover:underline'
        >
          CONTACT
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
