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
      <article className='grid t:grid-cols-5 gap-10 t:items-start t:border-b border-gray-100 border-opacity-20'>
        <Link to='/' className='t:col-span-2 d:col-span-3 t:justify-self-start'>
          <div className='pb-10 border-b t:border-none border-gray-100 border-opacity-20'>
            <img
              src={logoLight}
              alt='logo'
              className='w-3/5 mx-auto t:w-2/5 t:ml-0'
            />
          </div>
        </Link>
        <nav
          aria-label='secondary navigation'
          className='grid t:col-span-3 d:col-span-2 t:grid-cols-3 t:justify-items-end gap-6 t:gap-0'
        >
          <Link to='/about-us'>
            <h4 className='hover:underline'>OUR COMPANY</h4>
          </Link>
          <Link to='/locations'>
            <h4 className='hover:underline'>LOCATIONS</h4>
          </Link>
          <Link to='/contact'>
            <h4 className='hover:underline'>CONTACT</h4>
          </Link>
        </nav>
      </article>
      <article className='grid gap-10 t:grid-cols-3 t:text-left'>
        <article className='grid w-4/5 mx-auto t:w-full t:ml-0 gap-2'>
          <h5 className='font-bold text-white text-opacity-50'>
            Designo Central Office
          </h5>
          <h5 className='text-white text-opacity-40'>3886 Wellington Street</h5>
          <h5 className='text-white text-opacity-40'>
            Toronto, Ontario M9C 3J5
          </h5>
        </article>
        <article className='grid w-4/5 mx-auto t:w-full t:ml-0 gap-2'>
          <h5 className='font-bold text-white text-opacity-50'>
            Contact Us (Central Office)
          </h5>
          <h5 className='text-white text-opacity-40'>P : +1 253-863-8967</h5>
          <h5 className='text-white text-opacity-40'>M : contact@designo.co</h5>
        </article>
        <nav
          aria-label='side navigation'
          className='grid grid-flow-col auto-cols-max gap-4 mx-auto t:mr-0 items-center'
        >
          <div className='cursor-pointer'>
            <img src={facebook} alt='facebook' />
          </div>
          <div className='cursor-pointer'>
            <img src={youtube} alt='youtube' />
          </div>
          <div className='cursor-pointer'>
            <img src={twitter} alt='twitter' />
          </div>
          <div className='cursor-pointer'>
            <img src={pinterest} alt='pinterest' />
          </div>
          <div className='cursor-pointer'>
            <img src={instagram} alt='instagram' />
          </div>
        </nav>
      </article>
    </footer>
  );
};

export default ContactFooter;
