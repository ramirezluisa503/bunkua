import { useTranslation } from 'react-i18next';
import { Layout } from '../components/Layout/Layout';
import HomePageImage2 from '../assets/Images/HomePageImage2.webp';
import HPClients1 from '../assets/Images/HPClients1.webp';
import HPClients2 from '../assets/Images/HPClients2.webp';
import HPClients3 from '../assets/Images/HPClients3.webp';
import PortadaHomaPage from '../assets/Images/PortadaHomePage.webp';
import icono1 from '../assets/Images/HP1.webp';
import icono2 from '../assets/Images/HP2.webp';
import icono3 from '../assets/Images/HP3.webp';
import icono4 from '../assets/Images/HP4.webp';
import icono5 from '../assets/Images/HP5.webp';
import icono6 from '../assets/Images/HP6.webp';
import icono7 from '../assets/Images/HP7.webp';
import portapepeles from '../assets/Images/Portapapeles.svg';
import flechas from '../assets/Images/Flechas.svg';
import FlechaDerecha from '../assets/Images/FlechaDerecha.svg';
import brain from '../assets/Images/Brain.svg';
import barras from '../assets/Images/Barras.svg';
import escudo from '../assets/Images/Escudo.svg';
import cohete from '../assets/Images/Cohete.svg';
import comillas from '../assets/Images/Comillas.svg';

function HomePage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <article>
        {/*PORTADA */}
        <section
          className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4"
          style={{ backgroundImage: `url(${PortadaHomaPage})` }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                'linear-gradient(to top, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 120%)',
            }}
          ></div>

          <div className="flex flex-col justify-center items-center mx-11 relative z-10">
            <h1 className="sm:text-7xl text-black text-6xl max-w-3xl mx-auto font-bold leading-none text-center">
              {t('hp_hero_title')}
            </h1>
            <p className="text-brown text-xl box-content leading-normal text-center m-5">
              {t('hp_hero_subtitle_1')}
            </p>
            <p className="text-grey text-xl max-w-4xl box-content leading-normal text-center">
              {t('hp_hero_subtitle_2')}
            </p>
            <button className="bg-green hover:bg-black text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px]">
              {t('hp_hero_button')}
            </button>
          </div>
        </section>

        {/*OUR APPROACH */}
        <section>
          <div className="sm:gap-10 sm:grid-cols-2 grid grid-cols-1 p-4 m-9 box-content">
            <div className="sm:col-span-1 text-left box-content">
              <h1 className="text-black text-5xl box-content mb-6 font-bold leading-none text-left text-balance">
                {t('hp_approach_title')}
              </h1>
              <p className="text-grey box-content leading-normal text-left">
                {t('hp_approach_description_1')}
                <br />
                <br /> {t('hp_approach_description_2')}
              </p>
            </div>
            <div className="mt-15 max-w-full h-auto mx-auto my-auto size-72 text-3xl box-content sm:size-fit sm:col-span-1 sm:px-3 sm:mt-0">
              <img
                className="rounded-xl "
                src={HomePageImage2}
                alt={t('hp_alt_image1')}
              />
            </div>
          </div>
        </section>

        {/*OUR EXPERTISE CARDS */}
        <section>
          <div className="mt-28 mb-20">
            <div className="text-center mx-11">
              <h1 className="text-black text-5xl box-content mb-6 font-bold leading-none text-balance">
                {t('hp_expertise_section_title')}
              </h1>
              <p className="text-grey box-content leading-normal ">
                {t('hp_expertise_section_description')}
              </p>
            </div>

            {/* CARDS OUR EXPERTICIE*/}
            <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-3 sm:gap-6 m-11">
              {/*CARD 1*/}
              <div className="border border-borderGrey shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full text-center transform hover:scale-102 transition-transform duration-60">
                <div className="m-5">
                  <img
                    src={portapepeles}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-5 text-gray-800">
                  {t('hp_card1_title')}
                </h3>
                <p className="text-grey text-sm mb-10 max-w-90 leading-relaxed text-center ">
                  {t('hp_card1_description')}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green hover:underline mt-auto gap-3 "
                >
                  {t('hp_card_learn_more')}
                  <img
                    src={FlechaDerecha}
                    className="w-4 h-4"
                  />
                </a>
              </div>
              {/*CARD 2*/}
              <div className="border border-borderGrey shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full text-center transform hover:scale-102 transition-transform duration-60">
                <div className="m-5">
                  <img
                    src={flechas}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-5 text-gray-800">
                  {t('hp_card2_title')}
                </h3>
                <p className="text-grey text-sm mb-10 max-w-90 leading-relaxed text-center ">
                  {t('hp_card2_description')}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green hover:underline mt-auto gap-3"
                >
                  {t('hp_card_learn_more')}
                  <img
                    src={FlechaDerecha}
                    className="w-4 h-4"
                  />
                </a>
              </div>
              {/*CARD 3*/}
              <div className="border border-borderGrey shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full text-center transform hover:scale-102 transition-transform duration-60">
                <div className="m-5">
                  <img
                    src={brain}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-5 text-gray-800">
                  {t('hp_card3_title')}
                </h3>
                <p className="text-grey text-sm mb-10 max-w-90 leading-relaxed text-center ">
                  {t('hp_card3_description')}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green hover:underline mt-auto gap-3"
                >
                  {t('hp_card_learn_more')}
                  <img
                    src={FlechaDerecha}
                    className="w-4 h-4"
                  />
                </a>
              </div>
              {/*CARD 4*/}
              <div className="border border-borderGrey shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full text-center transform hover:scale-102 transition-transform duration-60">
                <div className="m-5">
                  <img
                    src={barras}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-5 text-gray-800">
                  {t('hp_card4_title')}
                </h3>
                <p className="text-grey text-sm mb-10 max-w-90 leading-relaxed text-center ">
                  {t('hp_card4_description')}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green hover:underline mt-auto gap-3"
                >
                  {t('hp_card_learn_more')}
                  <img
                    src={FlechaDerecha}
                    className="w-4 h-4"
                  />
                </a>
              </div>
              {/*CARD 5*/}
              <div className="border border-borderGrey shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full text-center transform hover:scale-102 transition-transform duration-60 ">
                <div className="m-5">
                  <img
                    src={escudo}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-5 text-gray-800">
                  {t('hp_card5_title')}
                </h3>
                <p className="text-grey text-sm mb-10 max-w-90 leading-relaxed text-center ">
                  {t('hp_card5_description')}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green hover:underline mt-auto gap-3"
                >
                  {t('hp_card_learn_more')}
                  <img
                    src={FlechaDerecha}
                    className="w-4 h-4"
                  />
                </a>
              </div>
              {/*CARD 6*/}
              <div className="border border-borderGrey shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full text-center transform hover:scale-102 transition-transform duration-60">
                <div className="m-5">
                  <img
                    src={cohete}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-5 text-gray-800">
                  {t('hp_card6_title')}
                </h3>
                <p className="text-grey text-sm mb-10 max-w-90 leading-relaxed text-center ">
                  {t('hp_card6_description')}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green hover:underline mt-auto gap-3"
                >
                  {t('hp_card_learn_more')}
                  <img
                    src={FlechaDerecha}
                    className="w-4 h-4"
                  />
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
                {t('hp_clients_section_title')}
              </h1>
              <p className="text-grey box-content leading-normal ">
                {t('hp_clients_section_description')}
              </p>
            </div>

            {/* CARDS What our clients Say*/}
            <div className="sm:grid sm:grid-cols-3 sm:gap-6 grid grid-cols-1 gap-6 m-11 ">
              {/*CARD 1*/}
              <div className="cards transform hover:scale-102 transition-transform duration-60">
                <img
                  src={comillas}
                  className="w-8 h-8"
                />
                <p className="text-lg italic p-5 text-hp-clients leading-relaxed text-center">
                  {t('hp_client_quote_1')}
                </p>
                <img
                  className="rounded-full mt-auto w-auto h-22 "
                  src={HPClients1}
                  alt="Alice Chen"
                />
                <p className="font-semibold text-gray-900 text-lg mt-auto">
                  {t('hp_client_name_1')}
                </p>
                <p className="text-grey text-sm">{t('hp_client_title_1')}</p>
              </div>
              {/*CARD 2*/}
              <div className="cards transform hover:scale-102 transition-transform duration-60">
                <img
                  src={comillas}
                  className="w-8 h-8"
                />
                <p className="text-lg italic p-5 text-hp-clients leading-relaxed text-center">
                  {t('hp_client_quote_2')}
                </p>
                <img
                  className="rounded-full w-auto mt-auto h-20"
                  src={HPClients2}
                  alt="Robert Garcia"
                />
                <p className="font-semibold text-gray-900 text-lg mt-auto">
                  {t('hp_client_name_2')}
                </p>
                <p className="text-grey text-sm">{t('hp_client_title_2')}</p>
              </div>
              {/*CARD 3*/}
              <div className="cards transform hover:scale-102 transition-transform duration-60">
                <img
                  src={comillas}
                  className="w-8 h-8"
                />
                <p className="text-lg italic p-5 text-hp-clients leading-relaxed text-center">
                  {t('hp_client_quote_3')}
                </p>
                <img
                  className="rounded-full w-auto h-20 mt-auto "
                  src={HPClients3}
                  alt="Sarah Kim"
                />
                <p className="font-semibold text-gray-900 text-lg mt-auto">
                  {t('hp_client_name_3')}
                </p>
                <p className="text-grey text-sm">{t('hp_client_title_3')}</p>
              </div>
            </div>
          </div>
        </section>

        {/*BAR */}
        <section>
          <div className="text-center mx-11 mt-30">
            <h1 className="text-black text-5xl box-content mb-6 font-bold leading-none text-balance">
              {t('hp_trusted_by_title')}
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
          <div className="sm:mx-24 mt-40 mb-20 mx-10 px-8 pt-8 pb-4 text-center bg-green h-auto w-auto rounded-t-xl">
            <h1 className="text-white text-5xl box-content mb-6 font-bold leading-none text-balance">
              {t('hp_transform_section_title')}
            </h1>
            <p className="text-white box-content leading-normal ">
              {t('hp_transform_section_description')}
            </p>
            <button className="bg-white hover:bg-black hover:text-white mt-7 mb-0.5 w-48 h-9 rounded-[6px] text-green">
              {t('hp_transform_button')}
            </button>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export default HomePage;
