import { Layout } from '../components/Layout/Layout';
import AboutUsPortada1 from '../assets/Images/AboutUsPortada1.webp';
import AboutUsPortada2 from '../assets/Images/AboutUsPortada2.webp';
import AboutUsFoot from '../assets/Images/AboutUsFoot.webp';
import Trusted1 from '../assets/Images/Trusted1.webp';
import Trusted2 from '../assets/Images/Trusted2.webp';
import Trusted3 from '../assets/Images/Trusted3.webp';
import Trusted4 from '../assets/Images/Trusted4.webp';
import Trusted5 from '../assets/Images/Trusted5.webp';
import Visionaries1 from '../assets/Images/Visionaries1.webp';
import Visionaries2 from '../assets/Images/Visionaries2.webp';
import Visionaries3 from '../assets/Images/Visionaries3.webp';
import Visionaries4 from '../assets/Images/Visionaries4.webp';

export const AboutUs = () => {
  return (
    <Layout>
      <article>
        <section>
          <div className="sm:grid-cols-2 sm:gap-7 sm:py-20 gap-10 grid grid-cols-1 p-16 items-center  ">
            <div className="sm:col-span-1 sm:text-left sm:pl-36 text-center  box-content ">
              <h1 className="text-black text-6xl box-content mb-6 font-bold leading-none ">
                About BUNKUA
              </h1>
              <p className="text-grey text-balance text-lg box-content leading-relaxed   ">
                Driving massive transformation through intelligent technology
                and unwavering commitment to client success.
              </p>
            </div>
            <div className="sm:mt-0 sm:ml-0 mx-auto mt-5  ">
              <img
                className="sm:size-fit max-w-full h-auto size-72 rounded-xl "
                src={AboutUsPortada1}
                alt="Image"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="sm:grid-cols-2 sm:gap-15 sm:py-20 gap-10 grid grid-cols-1 p-16 items-center  ">
            <div className="sm:col-span-1 sm:text-left text-center  box-content">
              <h1 className="text-black text-3xl box-content mb-6 font-bold leading-none ">
                Our Story: From Vision to Impact
              </h1>
              <p className="text-grey text-balance text-lg box-content leading-relaxed   ">
                Founded on the principle that knowledge brings order to chaos,
                BUNKUA began with a vision to empower entrepreneurs through data
                and AI. Our journey started with a small team and a big idea: to
                transform businesses by making complex data simple and
                actionable. Over the years, we've grown, learned, and refined
                our approach, always staying true to our commitment to
                innovation and client success. We believe in creating tangible
                value that leads to prosperity and lasting impact for our
                partners.
              </p>
            </div>
            <div className="sm:mt-0 sm:ml-0 mx-auto mt-5  ">
              <img
                className="sm:size-fit max-w-full h-auto size-72 rounded-xl "
                src={AboutUsPortada2}
                alt="Image"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="sm:p-8 sm:max-w-2xl sm:mx-auto sm:mt-10 sm:mb-36 mx-20 p-8 bg-white rounded-xl shadow-sm  text-center">
            <p className="sm:text-4xl sm:mb-6 italic font-bold text-gray-900 leading-normal ">
              Our mission is to facilitate unprecedented prosperity, abundance,
              tranquility, and productivity for entrepreneurs by enabling
              intelligent technology adoption.
            </p>
            <p className="text-base text-grey">— BUNKUA Leadership</p>
          </div>
        </section>

        <section>
          <div className="mt-28 mb-20">
            <h1 className="text-black text-3xl text-center box-content mb-14 mx-11 font-bold leading-none text-balance">
              Our Core Values
            </h1>
            {/* CARDS OUR EXPERTICIE*/}
            <div className="sm:grid sm:grid-cols-3  sm:gap-6 m-11 grid grid-cols-1 gap-6   ">
              {/*CARD 1*/}
              <div className=" border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center ">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Innovation
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  Continuously seeking cutting-edge solutions to deliver
                  unparalleled value.
                </p>
              </div>
              {/*CARD 2*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center ">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Excellence
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  Committed to delivering the highest quality in every aspect of
                  our work.
                </p>
              </div>
              {/*CARD 3*/}
              <div className="border border-borderGrey  rounded-xl p-6 flex flex-col items-center justify-between h-full text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Integrity
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  Operating with transparency, honesty, and a strong ethical
                  compass.
                </p>
              </div>
              {/*CARD 4*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center ">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Client-Centricity
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  Prioritizing our clients needs to forge lasting partnerships
                  and mutual success.
                </p>
              </div>
              {/*CARD 5*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center ">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Efficiency
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  Streamlining processes and optimizing workflows for maximum
                  productivity.
                </p>
              </div>
              {/*CARD 6*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center ">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Impact
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  Dedicated to creating measurable and positive transformation
                  for businesses.
                </p>
              </div>
            </div>
          </div>
        </section>



        <section>
          <div className="mt-50 mb-25">
            <h1 className="text-black text-3xl text-center box-content mb-14 mx-11 font-bold leading-none text-balance">
              Meet Our Visionaries
            </h1>
            {/* MEET OUR VISIONARIES*/}
            <div className="sm:flex sm:justify-center sm:items-center  sm:gap-6 m-8    ">
              {/*CARD 1*/}
              <div className=" border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between   text-center mb-8 w-3xs ">
                <img src={Visionaries1} alt="Visionary" className='rounded-full h-auto w-40'/>
                <h3 className="text-xl font-semibold text-gray-800">
                  Elena Rodriguez
                </h3>
                <p className="sm:max-w-80 text-grey text-[14px] mb-4 leading-relaxed text-center">
                  CEO & Founder
                </p>
              </div>
              
              {/*CARD 2*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center mb-8 w-3xs ">
                <img src={Visionaries2} alt="Visionary" className='rounded-full h-auto w-40' />
                <h3 className="text-xl font-semibold  text-gray-800">
                  Marcus Chen
                </h3>
                <p className="sm:max-w-80 text-grey text-[14px] mb-4 leading-relaxed text-center">
                  Chief Data Scientist
                </p>
              </div>
              {/*CARD 3*/}
              <div className="border border-borderGrey  rounded-xl p-6 flex flex-col items-center justify-between h-full text- mb-8 w-3xs">
                <img src={Visionaries3} alt="Visionary" className='rounded-full h-auto w-40' />
                <h3 className="text-xl font-semibold  text-gray-800">
                  Sophia Kim
                </h3>
                <p className="sm:max-w-80 text-grey text-[14px] mb-4 leading-relaxed text-center">
                  Head of AI Solutions
                </p>
              </div>
              {/*CARD 4*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center mb-8 w-3xs">
                <img src={Visionaries4} alt="Visionary" className='rounded-full h-auto w-40' />
                <h3 className="text-xl font-semibold  text-gray-800">
                  David Miller
                </h3>
                <p className="sm:max-w-80 text-grey text-[14px] mb-4 leading-relaxed text-center">
                  VP of Business Development
                </p>
              </div>
              
            </div>
          </div>
        </section>        





        {/*SECCION LINEA DE TIEMPO */}
        <section className="py-20 bg-white">
          <div className="container mx-auto ">
            <h2 className="text-3xl font-bold text-center text-black mx-15 mb-10">
              Our Journey & Milestones
            </h2>

            <div className="flex justify-center">
              <div className="sm:pl-15 sm:w-auto pl-14 mt-5  relative border-l-2 border-green w-9/12  ">
                {/* Hito 2020 */}
                <div className="mb-12 flex items-start">
                  {/* Círculo en la línea */}

                  <div className="absolute size-4 rounded-full border   left-7 top-0.5 flex items-center justify-center ">
                    <div className="absolute size-2 bg-green rounded-full "></div>
                  </div>

                  <div className="ml-0">
                    <h3 className="text-xl font-semibold text-green mb-1">
                      2020
                    </h3>
                    <p className="text-grey text-base leading-relaxed max-w-xl">
                      BUNKUA founded with a mission to bring order to chaos
                      through data analytics.
                    </p>
                  </div>
                </div>

                {/* Hito 2021 */}
                <div className="mb-12 flex items-start">
                  {/* Círculo en la línea */}
                  <div className="absolute size-4 rounded-full border   left-7 top-2.5/12 flex items-center justify-center ">
                    <div className="absolute size-2 bg-green rounded-full "></div>
                  </div>

                  <div className="ml-0">
                    <h3 className="text-xl font-semibold text-green mb-1">
                      2021
                    </h3>
                    <p className="text-grey text-base leading-relaxed max-w-xl ">
                      Launched first institutional diagnosis framework, aiding
                      businesses in strategic planning.
                    </p>
                  </div>
                </div>

                {/* Hito 2022 */}
                <div className="mb-12 flex items-start">
                  {/* Círculo en la línea */}
                  <div className="absolute size-4 rounded-full border   left-7 top-4.5/12 flex items-center justify-center ">
                    <div className="absolute size-2 bg-green rounded-full "></div>
                  </div>

                  <div className="ml-0">
                    <h3 className="text-xl font-semibold text-green mb-1">
                      2022
                    </h3>
                    <p className="text-grey text-base leading-relaxed max-w-xl">
                      Expanded service offerings to include custom AI tool
                      development and integration.
                    </p>
                  </div>
                </div>

                {/* Hito 2023 */}
                <div className="mb-12 flex items-start">
                  {/* Círculo en la línea */}
                  <div className="absolute size-4 rounded-full border   left-7 top-7.5/12 flex items-center justify-center ">
                    <div className="absolute size-2 bg-green rounded-full "></div>
                  </div>

                  <div className="ml-0">
                    <h3 className="text-xl font-semibold text-green mb-1">
                      2023
                    </h3>
                    <p className="text-grey text-base leading-relaxed max-w-xl ">
                      Achieved significant client growth, serving over 50
                      enterprise customers globally.
                    </p>
                  </div>
                </div>

                {/* Hito 2024 */}
                <div className="mb-5 flex items-start">
                  {/* Círculo en la línea */}
                  <div className="absolute size-4 rounded-full border   left-7 top-9.5/12 flex items-center justify-center ">
                    <div className="absolute size-2 bg-green rounded-full "></div>
                  </div>

                  <div className="ml-0">
                    <h3 className="text-xl font-semibold text-green mb-1">
                      2024
                    </h3>
                    <p className="text-grey text-base leading-relaxed max-w-xl">
                      Introduced proprietary AI-driven predictive analytics
                      platform, enhancing client foresight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='m-20'>
            <h2 className="sm:mx-15 mb-10 text-3xl font-bold text-center text-black ">
              Trusted By Leading Innovators
            </h2>           
            <div className='flex sm:gap-55 gap-9 items-center justify-center'>
              <img src={Trusted1} alt="Icono" className='sm:w-auto sm:h-14 w-auto h-8' />
              <img src={Trusted2} alt="Icono" className='sm:w-auto sm:h-14 w-auto h-8' />
              <img src={Trusted3} alt="Icono" className='sm:w-auto sm:h-14 w-auto h-8'/>
              <img src={Trusted4} alt="Icono" className='sm:w-auto sm:h-14 w-auto h-8'/>
              <img src={Trusted3} alt="Icono" className='sm:w-auto sm:h-14 w-auto h-8'/>
              <img src={Trusted5} alt="Icono" className='sm:w-auto sm:h-14 w-auto h-8'/>
            </div>
          </div>
        </section>




        <section>
          <div className="sm:flex sm:mx-24  mt-40 mb-20 mx-10 p-10  text-left bg-green rounded-xl items-center justify-between overflow-hidden">
            <div className="sm:w-1/2">
              <h1 className="sm:text-5xl text-4xl text-white  mb-8 font-bold leading-none">
                Ready for a new challenge?
              </h1>
              <p className="text-white leading-normal text-lg">
                Discover opportunities to shape the future of digital
                transformation with BUNKUA. We're always looking for talented
                individuals to join our growing team and contribute to
                meaningful impact.
              </p>
              <button className="bg-white mt-7 mb-0.5 w-48 h-9 rounded-[6px] text-green">
                View Open Positions
              </button>
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-10 flex justify-end">
              <img
                className="sm:max-w-96 rounded-[8px] w-full object-cover"
                src={AboutUsFoot}
                alt="Team of professionals discussing"
              />
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};
