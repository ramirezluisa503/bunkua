import { Layout } from '../components/Layout/Layout';


export const ContactUs = () => {
  return (
    <Layout>
      <article>

        <section>

          {/*PORTADA */}
        <section className="relative  bg-cover bg-grayLight bg-center  min-h-[464px] flex items-center justify-center px-4">       
          <div className="flex flex-col justify-center items-center mx-11 relative z-10">

          <div className="absolute size-48 bg-gray-300/40 rounded-full -top-60 -left-90 opacity-70"></div>
          <div className="absolute w-30 h-30 bg-gray-300/40 rounded-l-full rounded-t-full top-63 -right-64 opacity-70 hidden md:block"></div>
          

            <h1 className="text-black text-6xl max-w-6xl mx-auto  font-bold leading-none text-center">
              Let's Connect and Transform Together
            </h1>
            <p className="text-grey text-xl max-w-4xl box-content leading-normal text-center">
              Reach out to BUNKUA to explore how intelligent technology can bring order to your operations and unlock new possibilities.
            </p>
            <div className='flex flex-row gap-10 mt-15 text-green'>
              <div>Silicon Valley, California</div>
              <div>contact@bunkua.com</div>
              <div>+1 (650) 555-0199</div>
            </div>
            
          </div>
        </section>


          {/*CARDS Why Connect with BUNKUA? */}
          <div className="mt-28 mb-20">
              <h1 className="text-black text-3xl text-center box-content mb-14 mx-11 font-bold leading-none text-balance">
              Why Connect with BUNKUA?
              </h1>
              {/* CARDS*/}
              <div className="sm:grid sm:grid-cols-3  sm:gap-6 m-11 grid grid-cols-1 gap-6   ">
              {/*CARD 1*/}
              <div className=" border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center ">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Unlock New Potential
                  </h3>
                  <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  Discover how data insights and AI can reveal opportunities for innovation and growth within your organization.
                  </p>
              </div>
              {/*CARD 2*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center ">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Achieve Strategic Clarity
                  </h3>
                  <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  Gain a clear roadmap and actionable strategies derived from precise data analysis to steer your business forward.
                  </p>
              </div>
              {/*CARD 3*/}
              <div className="border border-borderGrey  rounded-xl p-6 flex flex-col items-center justify-between h-full text-center">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Enhance Operational Efficiency
                  </h3>
                  <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  Streamline processes, reduce waste, and boost productivity with tailored technology solutions and intelligent automation.
                  </p>
              </div>
              {/*CARD 4*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center ">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Future-Proof Your Business
                  </h3>
                  <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  Stay ahead of the curve by integrating cutting-edge AI and digital transformation strategies that adapt to evolving markets.
                  </p>
              </div>
              {/*CARD 5*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center ">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Expert Partnership
                  </h3>
                  <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  Collaborate with a team of seasoned data scientists and AI specialists committed to your success.
                  </p>
              </div>
              {/*CARD 6*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center ">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Tailored Solutions
                  </h3>
                  <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  Receive custom-designed strategies and implementations that perfectly align with your unique business needs and goals.
                  </p>
              </div>
              </div>
          </div>
        </section>

      </article>
      
    </Layout>
  );
};