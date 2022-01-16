import Header from "../components/Header";
import CompanyLocations from "../components/CompanyLocations";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ScrollToTop from "../components/ScrollToTop";

const AboutPage = ({ dropMenu, onDropMenu }) => {
  return (
    <main className='grid relative min-h-screen'>
      <Header dropMenu={dropMenu} onDropMenu={onDropMenu} />
      {/* About Us */}
      <section className='grid d:grid-cols-2 t:mx-10 d:mx-40 t:rounded-xl t:mb-20'>
        <section className='grid t:rounded-t-lg d:rounded-r-lg d:rounded-tl-none d:order-last bg-no-repeat bg-left bg-cover bg-m-about-hero t:bg-t-about-hero d:bg-d-about-hero h-96 d:h-full w-full'></section>
        <article className='grid t:rounded-b-lg t:px-20 d:rounded-l-lg d:rounded-br-none d:text-left px-6 py-20 gap-8 text-center text-white bg-no-repeat d:bg-bottom bg-fill bg-hero-home bg-peach'>
          <h1 className='text-3xl t:text-4xl font-medium'>About Us</h1>
          <p className='text-sm font-light leading-7 '>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We&apos;ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We&apos;re always looking forward to creating brands,
            products, and digital experiences that connect with our clients'
            audiences.
          </p>
        </article>
      </section>

      {/* World-class talent */}
      <section className='grid d:grid-cols-2 pb-28 t:mx-10 d:mx-40 t:rounded-xl'>
        <section className='grid t:rounded-t-lg d:rounded-l-lg d:rounded-tr-none bg-no-repeat bg-center bg-cover bg-m-world-class t:bg-t-world-class d:bg-d-world-class h-96 d:h-full w-full'></section>
        <article className='grid t:rounded-b-lg t:px-20 d:rounded-r-lg d:rounded-bl-none d:text-left px-6 py-20 gap-8 text-center text-white bg-very-light-peach bg-no-repeat bg-center bg-contain bg-about'>
          <h1 className='text-3xl t:text-4xl font-medium text-peach'>
            World-class talent
          </h1>
          <p className='text-sm font-light leading-7 text-black'>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className='text-sm font-light leading-7 text-black'>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </article>
      </section>

      <CompanyLocations />

      {/* Real Deal */}
      <section className='grid d:grid-cols-2 pb-80 t:mx-10 d:mx-40 t:rounded-xl'>
        <section className='grid t:rounded-t-lg d:rounded-r-lg d:rounded-tl-none d:order-last bg-no-repeat bg-center bg-cover bg-m-real-deal t:bg-t-real-deal d:bg-d-real-deal h-96 d:h-full w-full'></section>
        <article className='grid t:rounded-b-lg t:px-20 d:rounded-l-lg d:rounded-br-none d:px-20 d:text-left px-6 py-20 gap-8 text-center text-white bg-very-light-peach bg-no-repeat bg-center bg-contain bg-about'>
          <h1 className='text-3xl t:text-4xl font-medium text-peach'>
            The real deal
          </h1>
          <p className='text-sm font-light leading-7 text-black'>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className='text-sm font-light leading-7 text-black'>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </article>
      </section>

      <Footer />

      {dropMenu && <Menu onDropMenu={onDropMenu} />}

      <ScrollToTop />
    </main>
  );
};

export default AboutPage;
