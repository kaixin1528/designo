import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ScrollToToh5 from "../components/ScrollToTop";
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
                <h5 className='font-bold'>Designo Central Office</h5>
                <h5 className='font-light'>3886 Wellington Street</h5>
                <h5 className='font-light'>Toronto, Ontario M9C 3J5</h5>
              </div>
              <div className='grid w-4/5 mx-auto t:ml-0  gap-1'>
                <h5 className='font-bold'>Contact</h5>
                <h5 className='font-light'>P : +1 253-863-8967</h5>
                <h5 className='font-light'>M : contact@designo.co</h5>
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
            <h5 className='text-3xl t:text-4xl font-medium text-peach t:text-left'>
              Australia
            </h5>
            <section className='grid t:grid-cols-2 t:text-left text-sm gap-6'>
              <div className='grid w-4/5 mx-auto t:ml-0 gap-1'>
                <h5 className='font-bold'>Designo AU Office</h5>
                <h5 className='font-light'>19 Balonne Street</h5>
                <h5 className='font-light'>New South Wales 2443</h5>
              </div>
              <div className='grid w-4/5 mx-auto t:ml-0 gap-1'>
                <h5 className='font-bold'>Contact</h5>
                <h5 className='font-light'>P : (02) 6720 9092</h5>
                <h5 className='font-light'>M : contact@designo.au</h5>
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
            <h5 className='text-3xl t:text-4xl font-medium text-peach t:text-left'>
              United Kingdom
            </h5>
            <section className='grid t:grid-cols-2 t:text-left text-sm gap-6'>
              <div className='grid w-4/5 mx-auto t:ml-0 gap-1'>
                <h5 className='font-bold'>Designo UK Office</h5>
                <h5 className='font-light'>13 Colorado Way</h5>
                <h5 className='font-light'>Rhyd-y-fro SA8 9GA</h5>
              </div>
              <div className='grid w-4/5 mx-auto t:ml-0 gap-1'>
                <h5 className='font-bold'>Contact</h5>
                <h5 className='font-light'>P : 078 3115 1400</h5>
                <h5 className='font-light'>M : contact@designo.uk</h5>
              </div>
            </section>
          </article>
        </motion.article>
      </section>
      <Footer />
      {dropMenu && <Menu onDropMenu={onDropMenu} />}
      <ScrollToToh5 />
    </main>
  );
};

export default LocationPage;
