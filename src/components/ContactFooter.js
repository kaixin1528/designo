import facebook from "..//assets/shared/desktop/icon-facebook.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import logoLight from "../assets/shared/desktop/logo-light.png";
import { Link } from "react-router-dom";

const ContactFooter = () => {
  return (
    <footer className='grid gap-10 py-16 text-white text-opacity-75 text-sm bg-black px-6 t:px-10 d:px-40 text-center'>
      <section className='grid t:grid-cols-5 gap-10 t:items-start t:border-b border-gray-100 border-opacity-20'>
        <Link to='/' className='t:col-span-2 d:col-span-3 t:justify-self-start'>
          <button className='pb-10 border-b t:border-none border-gray-100 border-opacity-20'>
            <img
              src={logoLight}
              alt='logo'
              className='w-3/5 mx-auto t:w-2/5 t:ml-0'
            />
          </button>
        </Link>
        <nav
          aria-label='secondary navigation'
          className='grid t:col-span-3 d:col-span-2 t:grid-cols-3 t:justify-items-end gap-6 t:gap-0'
        >
          <Link to='/about-us'>
            <button className='hover:underline'>OUR COMPANY</button>
          </Link>
          <Link to='/locations'>
            <button className='hover:underline'>LOCATIONS</button>
          </Link>
          <Link to='/contact'>
            <button className='hover:underline'>CONTACT</button>
          </Link>
        </nav>
      </section>
      <section className='grid gap-10 t:grid-cols-3 t:text-left'>
        <section className='grid w-4/5 mx-auto t:w-full t:ml-0 gap-2'>
          <h5 className='font-bold text-white text-opacity-50'>
            Designo Central Office
          </h5>
          <h5 className='text-white text-opacity-40'>3886 Wellington Street</h5>
          <h5 className='text-white text-opacity-40'>
            Toronto, Ontario M9C 3J5
          </h5>
        </section>
        <section className='grid w-4/5 mx-auto t:w-full t:ml-0 gap-2'>
          <h5 className='font-bold text-white text-opacity-50'>
            Contact Us (Central Office)
          </h5>
          <h5 className='text-white text-opacity-40'>P : +1 253-863-8967</h5>
          <h5 className='text-white text-opacity-40'>M : contact@designo.co</h5>
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
    </footer>
  );
};

export default ContactFooter;
