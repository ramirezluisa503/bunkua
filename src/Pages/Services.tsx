import { Layout } from '../components/Layout/Layout';

export const Services = () => {
  return (
    <Layout>
      <article>
        <section className="relative bg-cover bg-center min-h-screen flex items-center justify-center py-16 px-4">
          <div className="text-center mx-11">
            <h1 className="text-black text-5xl box-content mb-6 font-bold leading-none text-balance">
              Empowering Your Business Through Digital Innovation
            </h1>
            <p className="text-brown box-content leading-normal ">
              Transforming Challenges into Opportunities with Data & AI
            </p>
            <p className="text-grey box-content leading-normal ">
              At BUNKUA, we partner with visionary entrepreneurs to navigate the
              complexities of the digital age, providing precise data analysis
              and intelligent AI solutions that bring order to chaos and unlock
              unparalleled productivity.
            </p>
            <button className="bg-green text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px]">
              Get a Free Consultation
            </button>
          </div>
        </section>

        <section>
          <div className="mt-28 mb-20">
            <div className="text-center mx-11">
              <h1 className="text-green text-5xl box-content mb-6 font-bold leading-none text-balance">
                Our Core Services
              </h1>
              <p className="text-grey box-content leading-normal ">
                BUNKUA's specialized services are designed to address your most
                <br /> critical business needs, from identifying deep-rooted
                issues to
                <br /> implementing state-of-the-art AI.
              </p>
            </div>

            {/* CARDS OUR CORE SERVICES*/}
            <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-3  sm:gap-6 m-11   ">
              {/*CARD 1*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col  justify-between h-full text-center text-balance">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                  Institutional Diagnosis
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  Uncover organizational challenges and opportunities through
                  comprehensive data-driven assessments.
                </p>
                <ul className="text-grey text-left m-auto">
                  <li>Holistic analysis</li>
                  <li>Performance optimization</li>
                  <li>Strategic roadmap</li>
                  <li>Risk mitigation</li>
                </ul>
                <button className="bg-white text-black border border-borderGrey mt-7 mb-0.5 w-auto h-9 rounded-[6px]">
                  Discover Diagnosis
                </button>
              </div>
              {/*CARD 2*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col justify-between h-full text-center text-balance">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center ">
                  Technology Solutions Development
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  Craft bespoke technology solutions tailored to your unique
                  business needs and future growth.
                </p>
                <ul className="text-grey text-left m-auto">
                  <li>Custom software</li>
                  <li>Scalable infrastructure</li>
                  <li>Integration services</li>
                  <li>Digital transformation</li>
                </ul>
                <button className="bg-white text-black border border-borderGrey mt-7 mb-0.5 w-auto h-9 rounded-[6px]">
                  Explore Solutions
                </button>
              </div>
              {/*CARD 3*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col  justify-between h-full text-center text-balance">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                  AI Implementation & Integration
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center items-center">
                  Integrate cutting-edge Artificial Intelligence tools to
                  automate, predict, and innovate your operations.
                </p>
                <ul className="text-grey text-left m-auto ">
                  <li>Predictive analytics</li>
                  <li>Process automation</li>
                  <li>Machine learning</li>
                  <li>Intelligent decision-making</li>
                </ul>
                <button className="bg-white text-black border border-borderGrey mt-7 mb-0.5 w-auto h-9 rounded-[6px]">
                  Implement AI
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-28 mb-20">
            <div className="text-center mx-11">
              <h1 className="text-green text-5xl box-content mb-6 font-bold leading-none text-balance">
                Our Transformative Process
              </h1>
              <p className="text-grey box-content leading-normal ">
                We follow a rigorous, client-centric methodology to ensure every
                <br /> solution is effective, sustainable, and perfectly aligned
                with your
                <br /> strategic goals.
              </p>
            </div>

            {/*Our Transformative Process*/}
            <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-4  sm:gap-6 m-11   ">
              {/*CARD 1*/}
              <div className="p-6 flex flex-col  justify-between h-full text-center text-balance">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                  Discovery & Analysis
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  In-depth understanding of your current state, challenges, and
                  objectives.
                </p>
              </div>
              {/*CARD 2*/}
              <div className=" p-6 flex flex-col justify-between h-full text-center text-balance">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center ">
                  Strategy & Planning
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  Developing a tailored roadmap for digital transformation and
                  AI integration.
                </p>
              </div>
              {/*CARD 3*/}
              <div className=" p-6 flex flex-col  justify-between h-full text-center text-balance">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                  Development & Implementation
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center items-center">
                  Building and deploying robust solutions with continuous
                  collaboration.
                </p>
              </div>
              {/*CARD 4*/}
              <div className="p-6 flex flex-col  justify-between h-full text-center text-balance">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                  Optimization & Support
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center items-center">
                  Ensuring long-term success with ongoing performance tuning and
                  dedicated support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-28 mb-20">
            <div className="text-center mx-11">
              <h1 className="text-green text-5xl box-content mb-6 font-bold leading-none text-balance">
                Why Choose BUNKUA?
              </h1>
              <p className="text-grey box-content leading-normal ">
                Partner with us to gain a competitive edge. Our commitment to
                excellence, deep expertise, and client-first approach sets us
                apart.
              </p>
            </div>

            {/* CARDS WHY CHOOSE BUNKUA*/}
            <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-4  sm:gap-6 m-11   ">
              {/*CARD 1*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col  justify-between h-full text-center text-balance">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                  Proven Impact
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  Track record of delivering tangible business outcomes and
                  significant ROI for our clients.
                </p>
              </div>
              {/*CARD 2*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col justify-between h-full text-center text-balance">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center ">
                  Expert Team
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  Highly skilled professionals with deep expertise in data
                  science, AI, and software engineering.
                </p>
              </div>
              {/*CARD 3*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col  justify-between h-full text-center text-balance">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                  Secure & Scalable
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center items-center">
                  Solutions built with enterprise-grade security and designed
                  for future growth.
                </p>
              </div>
              {/*CARD 4*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col  justify-between h-full text-center text-balance">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                  Tailored Solutions
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center items-center">
                  Customized approaches that fit your unique challenges, not
                  one-size-fits-all templates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="sm:mx-10 mt-40 mb-20 mx-10 px-8 pt-8 pb-4  text-center bg-white border border-borderGrey h-auto w-auto rounded-xl">
            <h1 className="text-brown text-5xl box-content mb-6 font-bold leading-none text-balance">
              Ready to Transform Your Business?
            </h1>
            <p className="text-grey box-content leading-normal ">
              Let's discuss how BUNKUA's expertise in data analysis and AI can
              drive your next wave of growth and efficiency.
            </p>
            <button className="bg-green text-white mt-7 mb-0.5 w-48 h-9 rounded-[6px]">
              Schedule a Discovery Call
            </button>
          </div>
        </section>
      </article>
    </Layout>
  );
};
