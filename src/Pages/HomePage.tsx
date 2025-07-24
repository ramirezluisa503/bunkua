import { Layout } from '../components/Layout/Layout';
import HomePageImage2 from '../assets/Images/HomePageImage2.webp';
import HPClients1 from '../assets/Images/HPClients1.webp';
import HPClients2 from '../assets/Images/HPClients2.webp';
import HPClients3 from '../assets/Images/HPClients3.webp';
import HPClients4 from '../assets/Images/HPClients4.webp';
import HPClients5 from '../assets/Images/HPClients5.webp';
import HPClients6 from '../assets/Images/HPClients6.webp';
import PortadaHomaPage from '../assets/Images/PortadaHomePage.webp';
import icono1 from '../assets/Images/HP1.webp';
import icono2 from '../assets/Images/HP2.webp';
import icono3 from '../assets/Images/HP3.webp';
import icono4 from '../assets/Images/HP4.webp';
import icono5 from '../assets/Images/HP5.webp';
import icono6 from '../assets/Images/HP6.webp';
import icono7 from '../assets/Images/HP7.webp';

function HomePage() {
  return (
    <Layout>
      <article>
        {/*PORTADA */}
        <section
          className="relative  bg-cover bg-center  min-h-screen flex items-center justify-center px-4"
          style={{ backgroundImage: `url(${PortadaHomaPage})` }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                'linear-gradient(to top, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 120%)',
              // De abajo (0%) hacia arriba (to top):
              // - rgba(255,255,255,0.7) al 0% (abajo del todo, 70% opacidad blanca)
              // - rgba(255,255,255,0) al 10% (al 10% de la altura, completamente transparente)
            }}
          ></div>

          <div className="flex flex-col justify-center items-center mx-11 relative z-10">
            <h1 className="text-black text-7xl max-w-3xl mx-auto  font-bold leading-none text-center">
              Knowledge that brings order to chaos.
            </h1>
            <p className="text-brown text-xl box-content leading-normal text-center m-5">
              Empowering your business with intelligent data analysis and AI
              solutions.
            </p>
            <p className="text-grey text-xl max-w-4xl box-content leading-normal text-center">
              At BUNKUA, we transform complex data into clear, actionable
              insights, driving prosperity and productivity for entrepreneurs
              through cutting-edge technology.
            </p>
            <button className="bg-green text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px]">
              Request a Free Consultation
            </button>
          </div>
        </section>

        {/*OUR APPROACH */}
        <section>
          <div className="sm:gap-10 sm:grid-cols-2 grid grid-cols-1 p-4 m-9  box-content  ">
            <div className="sm:col-span-1 text-left box-content">
              <h1 className="text-black text-5xl box-content mb-6 font-bold leading-none text-left text-balance">
                Our Approach:
                <br />
                Transforming Data into Actionable Intelligence
              </h1>
              <p className="text-grey box-content leading-normal text-left">
                BUNKUA specializes in turning raw, unstructured data into a
                powerful asset. We apply rigorous methodologies in data
                analysis, machine learning, and artificial intelligence to
                uncover hidden patterns and predict future trends. Our solutions
                are designed not just to analyze, but to inform, empowering
                businesses to make smarter, faster decisions.
                <br />
                <br /> We believe that true digital transformation occurs when
                technology seamlessly integrates with business strategy,
                creating systems that are intuitive, efficient, and deeply
                insightful. Our team works closely with clients to build bespoke
                AI models and implement robust data infrastructures that drive
                sustainable growth.
              </p>
            </div>
            <div className="mt-5 max-w-full h-auto mx-auto my-auto size-72 text-3xl box-content sm:size-fit sm:col-span-1 sm:px-3 sm:mt-0">
              <img
                className="rounded-xl "
                src={HomePageImage2}
                alt="Image"
              />
            </div>
          </div>
        </section>

        {/*OUR EXPERTISE CARDS */}
        <section>
          <div className="mt-28 mb-20">
            <div className="text-center mx-11">
              <h1 className="text-black text-5xl box-content mb-6 font-bold leading-none text-balance">
                Our Expertise: Driving Your Digital Future
              </h1>
              <p className="text-grey box-content leading-normal ">
                We empower businesses with strategic insights and cutting-edge
                technology to navigate the complexities of the modern world.
              </p>
            </div>

            {/* CARDS OUR EXPERTICIE*/}
            <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-3  sm:gap-6 m-11   ">
              {/*CARD 1*/}
              <div className="border border-b-gray-500 shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full text-center text-balance">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Institutional Diagnosis
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  Comprehensive analysis of your organization's processes to
                  identify key areas for digital transformation and efficiency
                  gains.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 hover:underline mt-auto"
                >
                  Learn More
                </a>
              </div>
              {/*CARD 2*/}
              <div className="border border-b-gray-500 shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full text-center text-balance">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Technology Solutions Development
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  Building custom software and technological frameworks tailored
                  to your unique business needs, ensuring scalable and robust
                  solutions.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 hover:underline mt-auto"
                >
                  Learn More
                </a>
              </div>
              {/*CARD 3*/}
              <div className="border border-b-gray-500 shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full text-center text-balance">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  AI Implementation & Integration
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  Integrating advanced AI and machine learning models into your
                  existing systems to automate tasks, predict trends, and
                  optimize operations.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 hover:underline mt-auto"
                >
                  Learn More
                </a>
              </div>
              {/*CARD 4*/}
              <div className="border border-b-gray-500 shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full text-center text-balance">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Advanced Data Analytics
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  Leveraging big data and statistical modeling to provide deep
                  insights, enabling data-driven decision-making and strategic
                  planning.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 hover:underline mt-auto"
                >
                  Learn More
                </a>
              </div>
              {/*CARD 5*/}
              <div className="border border-b-gray-500 shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full text-center text-balance">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Cybersecurity Consulting
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  Protecting your digital assets with robust cybersecurity
                  strategies, ensuring data integrity and business continuity.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 hover:underline mt-auto"
                >
                  Learn More
                </a>
              </div>
              {/*CARD 6*/}
              <div className="border border-b-gray-500 shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full text-center text-balance">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Innovation & R&D
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  Driving future growth by exploring emerging technologies and
                  developing innovative solutions for competitive advantage.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 hover:underline mt-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*CLIENTS CARDS */}
        <section>
          <div className="mt-28 mb-20 bg-grayLight py-14">
            <div className="text-center mx-11">
              <h1 className="text-black text-5xl box-content mb-6 font-bold leading-none text-balance">
                What Our Clients Say
              </h1>
              <p className="text-greyText box-content leading-normal ">
                Hear directly from the businesses we\'ve empowered.
              </p>
            </div>

            {/* CARDS What our clients Say*/}
            <div className="sm:grid sm:grid-cols-3 sm:gap-6 grid grid-cols-1 gap-6 m-11 ">
              {/*CARD 1*/}
              <div className="cards">
                <p className="text-lg italic p-5  leading-relaxed text-center">
                  BUNKUA transformed our chaotic data into clear, actionable
                  strategies. Their AI implementation boosted our efficiency by
                  30%.
                </p>
                <img
                  className="rounded-full w-auto h-22 "
                  src={HPClients1}
                  alt="Alice Chen"
                />
                <p className="font-semibold text-gray-900 text-lg mt-auto">
                  Alice Chen
                </p>
                <p className="text-grey text-sm">CEO, InnovateTech</p>
              </div>
              {/*CARD 2*/}
              <div className="cards">
                <p className="text-lg italic p-5 leading-relaxed text-center">
                  The team at BUNKUA provided invaluable insights that led to
                  significant cost savings and improved decision-making across
                  our departments.
                </p>
                <img
                  className="rounded-full w-auto h-20"
                  src={HPClients2}
                  alt="Robert Garcia"
                />
                <p className="font-semibold text-gray-900 text-lg mt-auto">
                  Robert Garcia
                </p>
                <p className="text-grey text-sm">
                  Director of Operations, Global Logistics
                </p>
              </div>
              {/*CARD 3*/}
              <div className="cards">
                <p className="text-lg italic p-5 leading-relaxed text-center">
                  Their institutional diagnosis was thorough and precise. We now
                  have a clear roadmap for digital transformation.
                </p>
                <img
                  className="rounded-full w-auto h-20 "
                  src={HPClients3}
                  alt="Sarah Kim"
                />
                <p className="font-semibold text-gray-900 text-lg mt-auto">
                  Sarah Kim
                </p>
                <p className="text-grey text-sm">Founder, EcoSolutions</p>
              </div>
              {/*CARD 4*/}
              <div className="cards">
                <p className="text-lg italic p-5 leading-relaxed text-center">
                  BUNKUA’s technology solutions seamlessly integrated with our
                  existing infrastructure, proving their expertise and
                  adaptability.
                </p>
                <img
                  className="rounded-full w-auto h-20 "
                  src={HPClients4}
                  alt="David Lee"
                />
                <p className="font-semibold text-gray-900 text-lg mt-auto">
                  David Lee
                </p>
                <p className="text-grey text-sm">CTO, NexGen Robotics</p>
              </div>
              {/*CARD 5*/}
              <div className="cards">
                <p className="-lg italic p-5 leading-relaxed text-center">
                  Exceptional service and deep understanding of AI. BUNKUA is
                  truly a leader in bringing order to complex data environments.
                </p>
                <img
                  className="rounded-full w-auto h-20 "
                  src={HPClients5}
                  alt="Maria Rodriguez"
                />
                <p className="font-semibold text-gray-900 text-lg mt-auto">
                  Maria Rodriguez
                </p>
                <p className="text-grey text-sm">
                  Head of Data Science, Quantum Analytics
                </p>
              </div>
              {/*CARD 6*/}
              <div className="cards">
                <p className="text-lg italic p-5 leading-relaxed text-center">
                  Our growth accelerated dramatically after implementing
                  BUNKUA's strategic recommendations. A true partner in
                  innovation.
                </p>
                <img
                  className="rounded-full w-auto h-20 "
                  src={HPClients6}
                  alt="John Smith"
                />
                <p className="font-semibold text-gray-900 text-lg mt-auto">
                  John Smith
                </p>
                <p className="text-gray-500 text-sm">President, Synergy Corp</p>
              </div>
            </div>
          </div>
        </section>

        {/*BAR */}
        <section>
          <div className="text-center mx-11">
            <h1 className="text-black text-5xl box-content mb-6 font-bold leading-none text-balance">
              Trusted By Leading Businesses
            </h1>
            <div className="flex sm:gap-25 gap-4 items-center justify-center m-20">
              <img
                src={icono1}
                alt="Icono"
                className="sm:w-auto sm:h-8 w-auto h-4"
              />
              <img
                src={icono2}
                alt="Icono"
                className="sm:w-auto sm:h-8 w-auto h-4"
              />
              <img
                src={icono3}
                alt="Icono"
                className="sm:w-auto sm:h-8 w-auto h-4"
              />
              <img
                src={icono4}
                alt="Icono"
                className="sm:w-auto sm:h-8 w-auto h-4"
              />
              <img
                src={icono5}
                alt="Icono"
                className="sm:w-auto sm:h-8 w-auto h-4"
              />
              <img
                src={icono4}
                alt="Icono"
                className="sm:w-auto sm:h-8 w-auto h-4"
              />
              <img
                src={icono6}
                alt="Icono"
                className="sm:w-auto sm:h-8 w-auto h-4"
              />
              <img
                src={icono7}
                alt="Icono"
                className="sm:w-auto sm:h-8 w-auto h-4"
              />
            </div>
          </div>
        </section>

        {/*READY TO TRANSFORM */}
        <section>
          <div className="sm:mx-24 mt-40 mb-20 mx-10 px-8 pt-8 pb-4  text-center bg-green h-auto w-auto rounded-t-xl">
            <h1 className="text-white text-5xl box-content mb-6 font-bold leading-none text-balance">
              Ready to Transform Your Business?
            </h1>
            <p className="text-white box-content leading-normal ">
              Connect with BUNKUA today to discover how our data analysis and AI
              services can unlock new potentials for your company.
            </p>
            <button className="bg-white mt-7 mb-0.5 w-48 h-9 rounded-[6px] text-green">
              Get Started Now
            </button>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export default HomePage;
