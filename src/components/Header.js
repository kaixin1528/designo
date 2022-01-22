import logoDark from "../assets/shared/desktop/logo-dark.png";
import menu from "../assets/shared/mobile/icon-hamburger.svg";
import close from "../assets/shared/mobile/icon-close.svg";
import { Link } from "react-router-dom";
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
      <Link to='/' className='col-span-2 d:col-span-4'>
        <button className=''>
          <img src={logoDark} alt='Designo logo' className='w-32 pt-1' />
        </button>
      </Link>
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
        <Link to='/about-us'>
          <button className='font-light tracking-widest hover:underline'>
            OUR COMPANY
          </button>
        </Link>
        <Link to='/locations'>
          <button className='font-light tracking-widest hover:underline'>
            LOCATIONS
          </button>
        </Link>
        <Link to='/contact'>
          <button className='font-light tracking-widest hover:underline'>
            CONTACT
          </button>
        </Link>
      </nav>
    </motion.header>
  );
};

export default Header;
