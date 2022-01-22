import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";

const LocationPage = ({ dropMenu, onDropMenu }) => {
  return (
    <main className='grid relative min-h-screen'>
      <Header dropMenu={dropMenu} onDropMenu={onDropMenu} />
      <section className='grid gap-10 t:gap-32 d:gap-10'>
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className='grid d:grid-cols-3 t:gap-8 t:mx-10 d:mx-40'
        >
          <div className='t:rounded-lg d:order-last bg-no-repeat bg-center bg-cover bg-t-canada d:bg-d-canada h-96 w-full'></div>
          <article className='grid t:rounded-lg d:col-span-2 p-20 d:py-28 gap-6 text-center bg-very-light-peach bg-no-repeat d:bg-[center_top_2rem] bg-cover bg-locations'>
            <h1 className='text-3xl t:text-4xl font-medium text-peach t:text-left'>
              Canada
            </h1>
            <section className='grid t:grid-cols-2 t:text-left text-sm gap-6'>
              <div className='grid w-4/5 mx-auto t:ml-0 gap-1'>
                <p className='font-bold'>Designo Central Office</p>
                <p className='font-light'>3886 Wellington Street</p>
                <p className='font-light'>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className='grid w-4/5 mx-auto t:ml-0  gap-1'>
                <p className='font-bold'>Contact</p>
                <p className='font-light'>P : +1 253-863-8967</p>
                <p className='font-light'>M : contact@designo.co</p>
              </div>
            </section>
          </article>
        </motion.article>
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className='grid d:grid-cols-3 t:gap-8 t:mx-10 d:mx-40'
        >
          <div className='t:rounded-lg bg-no-repeat bg-center bg-cover bg-t-australia d:bg-d-australia h-96 w-full'></div>
          <article className='grid p-20 d:py-28 t:rounded-lg d:col-span-2 gap-6 text-center bg-very-light-peach bg-no-repeat d:bg-[center_top_2rem] bg-cover bg-locations'>
            <h1 className='text-3xl t:text-4xl font-medium text-peach t:text-left'>
              Australia
            </h1>
            <section className='grid t:grid-cols-2 t:text-left text-sm gap-6'>
              <div className='grid w-4/5 mx-auto t:ml-0 gap-1'>
                <p className='font-bold'>Designo AU Office</p>
                <p className='font-light'>19 Balonne Street</p>
                <p className='font-light'>New South Wales 2443</p>
              </div>
              <div className='grid w-4/5 mx-auto t:ml-0 gap-1'>
                <p className='font-bold'>Contact</p>
                <p className='font-light'>P : (02) 6720 9092</p>
                <p className='font-light'>M : contact@designo.au</p>
              </div>
            </section>
          </article>
        </motion.article>
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className='grid d:grid-cols-3 t:gap-8 t:mx-10 d:mx-40 pb-80'
        >
          <div className='t:rounded-lg d:order-last bg-no-repeat bg-center bg-cover bg-t-uk d:bg-d-uk h-96 w-full'></div>
          <article className='grid t:rounded-lg d:col-span-2 p-20 d:py-28 gap-6 text-center bg-very-light-peach bg-no-repeat d:bg-[center_top_2rem] bg-cover bg-locations'>
            <h1 className='text-3xl t:text-4xl font-medium text-peach t:text-left'>
              United Kingdom
            </h1>
            <section className='grid t:grid-cols-2 t:text-left text-sm gap-6'>
              <div className='grid w-4/5 mx-auto t:ml-0 gap-1'>
                <p className='font-bold'>Designo UK Office</p>
                <p className='font-light'>13 Colorado Way</p>
                <p className='font-light'>Rhyd-y-fro SA8 9GA</p>
              </div>
              <div className='grid w-4/5 mx-auto t:ml-0 gap-1'>
                <p className='font-bold'>Contact</p>
                <p className='font-light'>P : 078 3115 1400</p>
                <p className='font-light'>M : contact@designo.uk</p>
              </div>
            </section>
          </article>
        </motion.article>
      </section>
      <Footer />
      {dropMenu && <Menu onDropMenu={onDropMenu} />}
      <ScrollToTop />
    </main>
  );
};

export default LocationPage;
