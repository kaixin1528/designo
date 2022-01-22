import facebook from "..//assets/shared/desktop/icon-facebook.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import logoLight from "../assets/shared/desktop/logo-light.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className='bg-black px-6 t:px-10 d:px-40 text-center'>
      <section className='grid d:grid-cols-2 d:items-center d:text-left -mt-48 px-6 py-20 d:px-10 gap-8 text-white bg-peach bg-no-repeat bg-right bg-fill bg-m-footer t:bg-t-footer d:bg-d-footer rounded-xl'>
        <article className='grid gap-8'>
          <h2 className='text-3xl w-4/5 mx-auto t:w-3/5 d:w-2/3 d:ml-10'>
            Let’s talk about your project
          </h2>
          <p className='text-sm font-light leading-7 t:w-3/5 t:mx-auto d:w-4/5 d:ml-10'>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </article>
        <Link to='/contact' className='mx-auto'>
          <motion.button
            whileHover={{
              backgroundColor: "#FFAD9B",
              color: "white",
              scale: 1.1,
            }}
            className='text-sm bg-white text-black font-medium py-4 px-6 rounded-lg'
          >
            GET IN TOUCH
          </motion.button>
        </Link>
      </section>
      <section className='grid px-10 t:px-0 gap-10 py-16 text-white text-opacity-75 text-sm'>
        <nav
          aria-label='secondary navigation'
          className='grid t:grid-cols-5 gap-10 t:items-start t:border-b border-gray-100 border-opacity-20'
        >
          <Link
            to='/'
            className='t:col-span-2 d:col-span-3 t:justify-self-start'
          >
            <button className='pb-10 border-b t:border-none border-gray-100 border-opacity-20'>
              <img
                src={logoLight}
                alt='logo'
                className='w-3/5 mx-auto t:w-2/5 t:ml-0'
              />
            </button>
          </Link>
          <section className='grid t:col-span-3 d:col-span-2 t:grid-cols-3 t:justify-items-end gap-6 t:gap-0'>
            <Link to='/about-us'>
              <button className='hover:underline'>OUR COMPANY</button>
            </Link>
            <Link to='/locations'>
              <button className='hover:underline'>LOCATIONS</button>
            </Link>
            <Link to='/contact'>
              <button className='hover:underline'>CONTACT</button>
            </Link>
          </section>
        </nav>
        <section className='grid gap-10 t:grid-cols-3 t:text-left'>
          <section className='grid w-4/5 mx-auto t:w-full t:ml-0 gap-2'>
            <p className='font-bold text-white text-opacity-80'>
              Designo Central Office
            </p>
            <p className='text-white text-opacity-60'>3886 Wellington Street</p>
            <p className='text-white text-opacity-60'>
              Toronto, Ontario M9C 3J5
            </p>
          </section>
          <section className='grid w-4/5 mx-auto t:w-full t:ml-0 gap-2'>
            <p className='font-bold text-white text-opacity-80'>
              Contact Us (Central Office)
            </p>
            <p className='text-white text-opacity-60'>P : +1 253-863-8967</p>
            <p className='text-white text-opacity-60'>M : contact@designo.co</p>
          </section>
          <nav
            aria-label='side navigation'
            className='grid grid-flow-col auto-cols-max gap-4 mx-auto t:mr-0 items-center'
          >
            <button>
              <img src={facebook} alt='facebook' />
            </button>
            <button>
              <img src={youtube} alt='youtube' />
            </button>
            <button>
              <img src={twitter} alt='twitter' />
            </button>
            <button>
              <img src={pinterest} alt='pinterest' />
            </button>
            <button>
              <img src={instagram} alt='instagram' />
            </button>
          </nav>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
