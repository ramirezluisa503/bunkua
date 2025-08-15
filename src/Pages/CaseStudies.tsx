import { useTranslation } from 'react-i18next';
import { Layout } from '../components/Layout/Layout';
import portadaCasos from '../assets/Images/PortadaServicios.webp';
import CaseStudies1 from '../assets/Images/CaseStudies1.webp';
import CaseStudies2 from '../assets/Images/CaseStudies2.webp';
import CaseStudies3 from '../assets/Images/CaseStudies3.webp';
import CaseStudies4 from '../assets/Images/CaseStudies4.webp';
import CaseStudies5 from '../assets/Images/CaseStudies5.webp';
import CaseStudies6 from '../assets/Images/CaseStudies6.webp';
import CaseStudies7 from '../assets/Images/CaseStudies7.webp';
import CaseStudies8 from '../assets/Images/CaseStudies8.webp';
import CaseStudies9 from '../assets/Images/CaseStudies9.webp';
import FlechaDiagonal from '../assets/Images/FlechaDiagonal.svg';
import FlechaDerecha from '../assets/Images/FlechaLargaDerecha.svg';
import { Link, NavLink } from 'react-router-dom';

export const CaseStudies = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <article>
        {/*PORTADA */}
        <section
          className="relative  bg-cover bg-center  min-h-screen flex items-center justify-center px-4"
          style={{ backgroundImage: `url(${portadaCasos})` }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                'linear-gradient(to top, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 45%)',
            }}
          ></div>
          <div className="flex flex-col justify-center items-center text-center mx-11">
            <h1 className="text-black sm:text-7xl text-5xl max-w-5xl box-content mb-6 font-bold leading-none ">
              {t('cs_portadaTitulo')}
            </h1>
            <p className="text-black text-xl max-w-3xl box-content leading-normal ">
              {t('cs_portadaDescripcion')}
            </p>
            <Link to={'/contactUs'}>
              <button className="hover:bg-black bg-green text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
                {t('cs_btnConsultation')}
              </button>
            </Link>
          </div>
        </section>

        {/*CARDS */}
        <section>
          <div className="sm:grid sm:grid-cols-3 sm:gap-10 sm:m-20 grip grid-cols-1 m-15 ">
            {/* CARD 1 */}
            <div className="border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-300">
              <div>
                <img
                  className="rounded-t-[8px] w-full h-48 object-cover"
                  src={CaseStudies1}
                  alt="Grafica"
                />
              </div>
              <div className="my-10 mx-6 flex flex-col flex-grow">
                <div className="size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {t('cs_card1Categoria')}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {t('cs_card1Titulo')}
                </h2>
                <p className="text-grey text-base mb-6">
                  {t('cs_card1Descripcion')}
                </p>

                <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3">
                  <img
                    src={FlechaDiagonal}
                    className="w-6 h-6"
                  />
                  {t('cs_card1Metrica')}
                </div>

                <a
                  href="#"
                  className="flex items-center text-green font-medium hover:underline gap-2"
                >
                  {t('cs_card1BtnLeerMas')}
                  <img
                    src={FlechaDerecha}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-300">
              <div>
                <img
                  className="rounded-t-[8px] w-full h-48 object-cover"
                  src={CaseStudies2}
                  alt="Grafica"
                />
              </div>
              <div className="my-10 mx-6 flex flex-col flex-grow">
                <div className="size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {t('cs_card2Categoria')}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {t('cs_card2Titulo')}
                </h2>
                <p className="text-grey text-base mb-6">
                  {t('cs_card2Descripcion')}
                </p>

                <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3">
                  <img
                    src={FlechaDiagonal}
                    className="w-6 h-6"
                  />
                  {t('cs_card2Metrica')}
                </div>

                <a
                  href="#"
                  className="flex items-center text-green font-medium hover:underline gap-2"
                >
                  {t('cs_card2BtnLeerMas')}
                  <img
                    src={FlechaDerecha}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-300">
              <div>
                <img
                  className="rounded-t-[8px] w-full h-48 object-cover"
                  src={CaseStudies3}
                  alt="Grafica"
                />
              </div>
              <div className="my-10 mx-6 flex flex-col flex-grow">
                <div className="size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {t('cs_card3Categoria')}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {t('cs_card3Titulo')}
                </h2>
                <p className="text-grey text-base mb-6">
                  {t('cs_card3Descripcion')}
                </p>

                <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3">
                  <img
                    src={FlechaDiagonal}
                    className="w-6 h-6"
                  />
                  {t('cs_card3Metrica')}
                </div>

                <a
                  href="#"
                  className="flex items-center text-green font-medium hover:underline gap-2"
                >
                  {t('cs_card3BtnLeerMas')}
                  <img
                    src={FlechaDerecha}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-300">
              <div>
                <img
                  className="rounded-t-[8px] w-full h-48 object-cover"
                  src={CaseStudies4}
                  alt="Grafica"
                />
              </div>
              <div className="my-10 mx-6 flex flex-col flex-grow">
                <div className="size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {t('cs_card4Categoria')}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {t('cs_card4Titulo')}
                </h2>
                <p className="text-grey text-base mb-6">
                  {t('cs_card4Descripcion')}
                </p>

                <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3">
                  <img
                    src={FlechaDiagonal}
                    className="w-6 h-6"
                  />
                  {t('cs_card4Metrica')}
                </div>

                <a
                  href="#"
                  className="flex items-center text-green font-medium hover:underline gap-2"
                >
                  {t('cs_card4BtnLeerMas')}
                  <img
                    src={FlechaDerecha}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-300">
              <div>
                <img
                  className="rounded-t-[8px] w-full h-48 object-cover"
                  src={CaseStudies5}
                  alt="Grafica"
                />
              </div>
              <div className="my-10 mx-6 flex flex-col flex-grow">
                <div className="size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {t('cs_card5Categoria')}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {t('cs_card5Titulo')}
                </h2>
                <p className="text-grey text-base mb-6">
                  {t('cs_card5Descripcion')}
                </p>

                <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3">
                  <img
                    src={FlechaDiagonal}
                    className="w-6 h-6"
                  />
                  {t('cs_card5Metrica')}
                </div>

                <a
                  href="#"
                  className="flex items-center text-green font-medium hover:underline gap-2"
                >
                  {t('cs_card5BtnLeerMas')}
                  <img
                    src={FlechaDerecha}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-300">
              <div>
                <img
                  className="rounded-t-[8px] w-full h-48 object-cover"
                  src={CaseStudies6}
                  alt="Grafica"
                />
              </div>
              <div className="my-10 mx-6 flex flex-col flex-grow">
                <div className="size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {t('cs_card6Categoria')}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {t('cs_card6Titulo')}
                </h2>
                <p className="text-grey text-base mb-6">
                  {t('cs_card6Descripcion')}
                </p>

                <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3">
                  <img
                    src={FlechaDiagonal}
                    className="w-6 h-6"
                  />
                  {t('cs_card6Metrica')}
                </div>

                <a
                  href="#"
                  className="flex items-center text-green font-medium hover:underline gap-2"
                >
                  {t('cs_card6BtnLeerMas')}
                  <img
                    src={FlechaDerecha}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            {/* CARD 7 */}
            <div className="border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-300">
              <div>
                <img
                  className="rounded-t-[8px] w-full h-48 object-cover"
                  src={CaseStudies7}
                  alt="Grafica"
                />
              </div>
              <div className="my-10 mx-6 flex flex-col flex-grow">
                <div className="size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {t('cs_card7Categoria')}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {t('cs_card7Titulo')}
                </h2>
                <p className="text-grey text-base mb-6">
                  {t('cs_card7Descripcion')}
                </p>

                <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3">
                  <img
                    src={FlechaDiagonal}
                    className="w-6 h-6"
                  />
                  {t('cs_card7Metrica')}
                </div>

                <a
                  href="#"
                  className="flex items-center text-green font-medium hover:underline gap-2"
                >
                  {t('cs_card7BtnLeerMas')}
                  <img
                    src={FlechaDerecha}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            {/* CARD 8 */}
            <div className="border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-300">
              <div>
                <img
                  className="rounded-t-[8px] w-full h-48 object-cover"
                  src={CaseStudies8}
                  alt="Grafica"
                />
              </div>
              <div className="my-10 mx-6 flex flex-col flex-grow">
                <div className="size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {t('cs_card8Categoria')}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {t('cs_card8Titulo')}
                </h2>
                <p className="text-grey text-base mb-6">
                  {t('cs_card8Descripcion')}
                </p>

                <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3">
                  <img
                    src={FlechaDiagonal}
                    className="w-6 h-6"
                  />
                  {t('cs_card8Metrica')}
                </div>

                <a
                  href="#"
                  className="flex items-center text-green font-medium hover:underline gap-2"
                >
                  {t('cs_card8BtnLeerMas')}
                  <img
                    src={FlechaDerecha}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            {/* CARD 9 */}
            <div className="border border-borderGrey rounded-[8px] mb-10 flex flex-col shadow-md transform hover:scale-102 transition-transform duration-300">
              <div>
                <img
                  className="rounded-t-[8px] w-full h-48 object-cover"
                  src={CaseStudies9}
                  alt="Grafica"
                />
              </div>
              <div className="my-10 mx-6 flex flex-col flex-grow">
                <div className="size-fit inline-flex bg-cs-beige text-green text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {t('cs_card9Categoria')}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {t('cs_card9Titulo')}
                </h2>
                <p className="text-grey text-base mb-6">
                  {t('cs_card9Descripcion')}
                </p>

                <div className="flex items-center text-green font-semibold text-lg mb-4 mt-auto gap-3">
                  <img
                    src={FlechaDiagonal}
                    className="w-6 h-6"
                  />
                  {t('cs_card9Metrica')}
                </div>

                <a
                  href="#"
                  className="flex items-center text-green font-medium hover:underline gap-2"
                >
                  {t('cs_card9BtnLeerMas')}
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
              {t('cs_readyTransformTitulo')}
            </h1>
            <p className="text-grey text-xl text-center box-content leading-normal max-w-3xl">
              {t('cs_readyTransformDescripcion')}
            </p>
            <NavLink to={'/contactUs'}>
              <button className="hover:bg-black bg-green text-white mt-7 mb-0.5 w-fit p-2 rounded-[6px] cursor-pointer">
                {t('cs_btnFreeConsultation')}
              </button>
            </NavLink>
          </div>
        </section>
      </article>
    </Layout>
  );
};
