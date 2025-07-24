import { Layout } from '../components/Layout/Layout';
import CaseStudies1 from '../assets/Images/CaseStudies1.webp'
import CaseStudies2 from '../assets/Images/CaseStudies2.webp'
import CaseStudies3 from '../assets/Images/CaseStudies3.webp'
import CaseStudies4 from '../assets/Images/CaseStudies4.webp'
import CaseStudies5 from '../assets/Images/CaseStudies5.webp'
import CaseStudies6 from '../assets/Images/CaseStudies6.webp'
import CaseStudies7 from '../assets/Images/CaseStudies7.webp'
import CaseStudies8 from '../assets/Images/CaseStudies8.webp'
import CaseStudies9 from '../assets/Images/CaseStudies9.webp'
import FlechaDiagonal from '../assets/Images/FlechaDiagonal.svg'
import FlechaDerecha from '../assets/Images/FlechaLargaDerecha.svg'



export const CaseStudies = () => {
  return (
    <Layout>
      <article>
        {/*PORTADA */}
        <section className="relative bg-cs-beige bg-cover bg-center min-h-screen flex items-center justify-center py-16 px-4">
          <div className="flex flex-col justify-center items-center text-center mx-11">
            <h1 className="text-black sm:text-7xl text-6xl max-w-5xl box-content mb-6 font-bold leading-none ">
            Transforming Vision into Tangible Results
            </h1>
            <p className="text-grey text-xl max-w-3xl  box-content leading-normal ">
            Explore how BUNKUA drives innovation and success for businesses worldwide through data-driven strategies and AI.
            </p>
            <button className="hover:bg-black bg-green text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px]">
            Schedule a Consultation
            </button>
          </div>
        </section>


        {/*CARDS */}
        <section>
          <div className='sm:grid sm:grid-cols-3 sm:gap-10 sm:m-20 grip grid-cols-1 m-15 '>
            {/* CARD 1 */}
            <div className='border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-60'> 
                <div>
                    <img className='rounded-t-[8px] w-full h-48 object-cover' src={CaseStudies1} alt="Grafica" /> {/* APLICADO: object-cover */}
                </div>
                <div className='my-10 mx-6 flex flex-col flex-grow'>
                    <div className='size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4'>
                        AI Implementation
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 mb-2 leading-tight'>Optimizing Supply Chains with Predictive AI</h2>
                    <p className='text-grey text-base mb-6'>Developed and deployed an AI-driven predictive model that optimized inventory management, leading to a 25% reduction in carrying costs for a large retail client.</p>

                    <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3"> 
                      <img
                        src={FlechaDiagonal}
                        className="w-6 h-6"
                      />
                        25% Cost Reduction
                    </div>

                    <a href="#" className="flex items-center text-green font-medium hover:underline gap-2">
                        Learn More
                      <img
                        src={FlechaDerecha}
                        className="w-5 h-5"
                      />
                    </a>
                </div>
            </div>

            {/* CARD 2 */}
            <div className='border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-60'> 
                <div>
                    <img className='rounded-t-[8px] w-full h-48 object-cover'
                    src={CaseStudies2} alt="Grafica" /> 
                </div>
                <div className='my-10 mx-6 flex flex-col flex-grow'>
                    <div className='size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4'>
                        Digital Transformation
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 mb-2 leading-tight'>
                        Streamlining Operations for Manufacturing
                    </h2>
                    <p className='text-grey text-base mb-6'>
                        Implemented a comprehensive digital transformation strategy, integrating IoT and cloud solutions, which improved operational efficiency by 18% across multiple factory lines.
                    </p>

                    <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3"> 
                        <img
                          src={FlechaDiagonal}
                          className="w-6 h-6"
                        />
                        18% Efficiency Gain
                    </div>

                    <a href="#" className="flex items-center text-green font-medium hover:underline gap-2">
                        Learn More
                        <img
                          src={FlechaDerecha}
                          className="w-5 h-5"
                        />
                    </a>
                </div>
            </div>

            {/* CARD 3 */}
            <div className='border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-60'> 
                <div>
                    <img className='rounded-t-[8px] w-full h-48 object-cover'
                    src={CaseStudies3} alt="Grafica" /> 
                </div>
                <div className='my-10 mx-6 flex flex-col flex-grow'>
                    <div className='size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4'>
                        Data Strategy
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 mb-2 leading-tight'>
                        Unlocking Customer Insights with Big Data
                    </h2>
                    <p className='text-grey text-base mb-6'>
                        Designed and executed a robust big data analytics platform, enabling a financial institution to segment customers more effectively and increase cross-selling by 15%.
                    </p>

                    <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3"> 
                        <img
                          src={FlechaDiagonal}
                          className="w-6 h-6"
                        />
                        15% Sales Increase
                    </div>

                    <a href="#" className="flex items-center text-green font-medium hover:underline gap-2">
                        Learn More
                        <img
                          src={FlechaDerecha}
                          className="w-5 h-5"
                        />
                    </a>
                </div>
            </div>

            {/* CARD 4 */}
            <div className='border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-60'> 
                <div>
                    <img className='rounded-t-[8px] w-full h-48 object-cover'
                    src={CaseStudies4} alt="Grafica" /> 
                </div>
                <div className='my-10 mx-6 flex flex-col flex-grow'>
                    <div className='size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4'>
                        Cloud Solutions
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 mb-2 leading-tight'>
                        Securing Data with Cloud Migration
                    </h2>
                    <p className='text-grey text-base mb-6'>
                        Successfully migrated critical enterprise data to a secure cloud environment, enhancing data security protocols and reducing infrastructure costs by 20% annually.
                    </p>

                    <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3">
                        <img
                          src={FlechaDiagonal}
                          className="w-6 h-6"
                        />
                        20% Cost Savings
                    </div>

                    <a href="#" className="flex items-center text-green font-medium hover:underline gap-2">
                        Learn More
                        <img
                          src={FlechaDerecha}
                          className="w-5 h-5"
                        />
                    </a>
                </div>
            </div>

            {/* CARD 5 */}
            <div className='border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-60'> 
                <div>
                    <img className='rounded-t-[8px] w-full h-48 object-cover'
                    src={CaseStudies5} alt="Grafica" /> 
                </div>
                <div className='my-10 mx-6 flex flex-col flex-grow'>
                    <div className='size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4'>
                        AI Implementation
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 mb-2 leading-tight'>
                        Enhancing Customer Service with AI Chatbots
                    </h2>
                    <p className='text-grey text-base mb-6'>
                        Deployed an intelligent AI-powered chatbot system for a telecom provider, handling 40% of routine inquiries and significantly improving customer satisfaction scores.
                    </p>

                    <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3"> 
                        <img
                          src={FlechaDiagonal}
                          className="w-6 h-6"
                        />
                        40% Inquiry Automation
                    </div>

                    <a href="#" className="flex items-center text-green font-medium hover:underline gap-2">
                        Learn More
                        <img
                          src={FlechaDerecha}
                          className="w-5 h-5"
                        />
                    </a>
                </div>
            </div>

            {/* CARD 6 */}
            <div className='border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-60'>
                <div>
                    <img className='rounded-t-[8px] w-full h-48 object-cover'
                    src={CaseStudies6} alt="Grafica" /> 
                </div>
                <div className='my-10 mx-6 flex flex-col flex-grow'>
                    <div className='size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4'>
                        Operational Efficiency
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 mb-2 leading-tight'>
                        Boosting Field Team Productivity
                    </h2>
                    <p className='text-grey text-base mb-6'>
                        Introduced a mobile-first data collection and reporting system for a field service company, increasing daily task completion rates by 35% and reducing administrative overhead.
                    </p>

                    <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3">
                        <img
                          src={FlechaDiagonal}
                          className="w-6 h-6"
                         />
                        35% Productivity Boost
                    </div>

                    <a href="#" className="flex items-center text-green font-medium hover:underline gap-2">
                        Learn More
                        <img
                          src={FlechaDerecha}
                          className="w-5 h-5"
                        />
                    </a>
                </div>
            </div>

            {/* CARD 7 */}
            <div className='border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-60'> 
                <div>
                    <img className='rounded-t-[8px] w-full h-48 object-cover'
                    src={CaseStudies7} alt="Grafica" /> 
                </div>
                <div className='my-10 mx-6 flex flex-col flex-grow'>
                    <div className='size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4'>
                        Customer Experience
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 mb-2 leading-tight'>
                        Personalizing Retail Experiences with AI
                    </h2>
                    <p className='text-grey text-base mb-6'>
                        Implemented an AI-driven recommendation engine for an e-commerce platform, leading to a 10% increase in average order value and improved customer retention.
                    </p>

                    <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3"> 
                        <img
                          src={FlechaDiagonal}
                          className="w-6 h-6"
                         />
                        10% AOV Increase
                    </div>

                    <a href="#" className="flex items-center text-green font-medium hover:underline gap-2">
                        Learn More
                        <img
                          src={FlechaDerecha}
                          className="w-5 h-5"
                        />
                    </a>
                </div>
            </div>

            {/* CARD 8 */}
            <div className='border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-60'>
                <div>
                    <img className='rounded-t-[8px] w-full h-48 object-cover'
                    src={CaseStudies8} alt="Grafica" /> 
                </div>
                <div className='my-10 mx-6 flex flex-col flex-grow'>
                    <div className='size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4'>
                        Data Strategy
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 mb-2 leading-tight'>
                        Strategic Data Governance for Compliance
                    </h2>
                    <p className='text-grey text-base mb-6'>
                        Developed a robust data governance framework for a healthcare client, ensuring full regulatory compliance and providing a single source of truth for critical patient data.
                    </p>

                    <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3"> 
                        <img
                          src={FlechaDiagonal}
                          className="w-6 h-6"
                        />
                        Full Compliance Achieved
                    </div>

                    <a href="#" className="flex items-center text-green font-medium hover:underline gap-2">
                        Learn More
                        <img
                          src={FlechaDerecha}
                          className="w-5 h-5"
                        />
                    </a>
                </div>
            </div>

            {/* CARD 9 */}
            <div className='border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-60'> 
                <div>
                    <img className='rounded-t-[8px] w-full h-48 object-cover'
                    src={CaseStudies9} alt="Grafica" /> 
                </div>
                <div className='my-10 mx-6 flex flex-col flex-grow'>
                    <div className='size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4'>
                        Cloud Solutions
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 mb-2 leading-tight'>
                        Scalable Infrastructure for FinTech Growth
                    </h2>
                    <p className='text-grey text-base mb-6'>
                        Designed and deployed a scalable cloud infrastructure for a rapidly growing FinTech startup, enabling them to handle 5x user traffic while maintaining peak performance.
                    </p>

                    <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3">
                        <img
                          src={FlechaDiagonal}
                          className="w-6 h-6"
                        />
                        5x Scalability
                    </div>

                    <a href="#" className="flex items-center text-green font-medium hover:underline gap-2">
                        Learn More
                        <img
                          src={FlechaDerecha}
                          className="w-5 h-5"
                        />
                    </a>
                </div>
            </div>

          </div>
        </section>

        {/*READY TO TRANSFORM */}
        <section>
          <div className="sm:mx-10 flex flex-col justify-center items-center mt-30 m-10 px-8 pt-8 pb-4 bg-white h-auto w-auto rounded-xl">
              <h1 className="text-5xl text-center box-content mb-6 font-bold leading-none text-balance max-w-3xl">
              Ready to Transform Your<br/> Business?
              </h1>
              <p className="text-grey text-xl text-center box-content leading-normal max-w-3xl">
              Contact BUNKUA today to discuss your unique challenges and discover how <br/>our data analysis and AI services can drive your success.
              </p>
              <button className="hover:bg-black bg-green text-white mt-7 mb-0.5 w-fit  p-2 rounded-[6px]">
              Get a Free Consultation
              </button>
          </div>
        </section>
       

      </article>
    </Layout>
  );
};
