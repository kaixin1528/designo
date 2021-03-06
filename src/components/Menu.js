import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = ({ onDropMenu }) => {
  return (
    <motion.aside
      initial={{ y: 100 }}
      animate={{
        y: 0,
        transition: { type: "spring", duration: 3, stiffness: 200 },
      }}
      exit={{ y: 100, opacity: 0, transition: { duration: 0.5 } }}
      className='absolute inset-0 top-20 bg-gray-600 bg-opacity-50'
    >
      <nav
        aria-label='main navigation'
        className='grid gap-10 px-10 py-12 bg-black text-white'
      >
        <Link to='/about-us'>
          <motion.h4
            whileHover={{ scale: 1.1 }}
            className='font-light'
            onClick={onDropMenu}
          >
            OUR COMPANY
          </motion.h4>
        </Link>
        <Link to='/locations'>
          <motion.h4
            whileHover={{ scale: 1.1 }}
            className='font-light'
            onClick={onDropMenu}
          >
            LOCATIONS
          </motion.h4>
        </Link>
        <Link to='/contact'>
          <motion.h4
            whileHover={{ scale: 1.1 }}
            className='font-light'
            onClick={onDropMenu}
          >
            CONTACT
          </motion.h4>
        </Link>
      </nav>
    </motion.aside>
  );
};

export default Menu;
