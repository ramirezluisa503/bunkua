import { useTranslation } from 'react-i18next';
import { Layout } from '../components/Layout/Layout';
import mapa from '../assets/Images/BxMap.svg';
import carta from '../assets/Images/Carta.svg';
import phone from '../assets/Images/Phone.svg';
import bombillo from '../assets/Images/Bombillo.svg';
import radar from '../assets/Images/Radar.svg';
import portafolio from '../assets/Images/Portafolio.svg';
import world from '../assets/Images/World.svg';
import ImgFormulario from '../assets/Images/ImagenFormulario.webp';

export const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <article>
        {/*PORTADA */}
        <section className="relative bg-cover bg-grayLight bg-center min-h-[464px] flex items-center justify-center px-4">
          <div className="flex flex-col justify-center items-center mx-11 relative z-10">
            <h1 className="text-black sm:text-6xl text-5xl max-w-6xl mx-auto mb-5 mt-20 font-bold leading-none text-center">
              {t('cu_portadaTitulo')}
            </h1>
            <p className="text-grey text-xl max-w-4xl box-content leading-normal text-center">
              {t('cu_portadaDescripcion')}
            </p>
            <div className="sm:flex sm:flex-row sm:gap-10 mb-10 mt-15 text-green">
              <div className="flex flex-row gap-2 mb-4">
                <img
                  src={mapa}
                  className="w-6 h-6"
                />
                {t('cu_ubicacion')}
              </div>
              <div className="flex flex-row gap-2 mb-4">
                <img
                  src={carta}
                  className="w-6 h-6"
                />
                {t('cu_email')}
              </div>
              <div className="flex flex-row gap-2 mb-4">
                <img
                  src={phone}
                  className="w-6 h-6"
                />
                {t('cu_telefono')}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="sm:flex sm:flex-row flex flex-col bg-white border border-borderGrey rounded-b-2xl p-8   max-w-5xl w-auto">
            {/* Sección del Formulario (Mitad Izquierda) */}
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Envíanos un Mensaje
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-grey mb-1"
                  >
                    Tu nombre completo
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Tu nombre completo"
                    className="mt-1 block w-full px-3 py-2 text-grey border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-grey mb-1"
                  >
                    Tu dirección de correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ejemplo@dominio.com"
                    className="mt-1 block w-full px-3 py-2 text-grey border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-grey mb-1"
                  >
                    Tu mensaje o consulta
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Escribe tu mensaje aquí..."
                    className="mt-1 block w-full px-3 py-2 text-grey border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Enviar consulta
                </button>
              </form>
            </div>

            {/* Sección de la Imagen (Mitad Derecha) */}
            <div className="w-full md:w-1/2 p-4 flex items-center justify-center mt-8 md:mt-0">
              <img
                src={ImgFormulario}
                alt="Edificio de oficinas moderno"
                className="rounded-lg object-cover w-full h-full max-h-[400px] md:max-h-full"
              />
            </div>
          </div>
        </section>

        {/*CARDS Why Connect with BUNKUA? */}
        <section>
          <div className="mt-28 mb-20">
            <h1 className="text-black text-3xl text-center box-content mb-14 mx-11 font-bold leading-none text-balance">
              {t('cu_whyConnectTitulo')}
            </h1>
            {/* CARDS*/}
            <div className="sm:grid sm:grid-cols-3 sm:gap-6 m-11 grid grid-cols-1 gap-6">
              {/*CARD 1*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-60">
                <div className="bg-cs-card text-white font-bold rounded-full size-11 flex items-center justify-center m-5">
                  <img
                    src={bombillo}
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t('cu_card1Titulo')}
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('cu_card1Descripcion')}
                </p>
              </div>
              {/*CARD 2*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-60">
                <div className="bg-cs-card text-white font-bold rounded-full size-11 flex items-center justify-center m-5">
                  <img
                    src={radar}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t('cu_card2Titulo')}
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('cu_card2Descripcion')}
                </p>
              </div>
              {/*CARD 3*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-60">
                <div className="bg-cs-card text-white font-bold rounded-full size-11 flex items-center justify-center m-5">
                  <img
                    src={portafolio}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t('cu_card3Titulo')}
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('cu_card3Descripcion')}
                </p>
              </div>
              {/*CARD 4*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-60">
                <div className="bg-cs-card text-white font-bold rounded-full size-11 flex items-center justify-center m-5">
                  <img
                    src={world}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t('cu_card4Titulo')}
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('cu_card4Descripcion')}
                </p>
              </div>
              {/*CARD 5*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-60">
                <div className="bg-cs-card text-white font-bold rounded-full size-11 flex items-center justify-center m-5">
                  <img
                    src={bombillo}
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t('cu_card5Titulo')}
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('cu_card5Descripcion')}
                </p>
              </div>
              {/*CARD 6*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-60">
                <div className="bg-cs-card text-white font-bold rounded-full size-11 flex items-center justify-center m-5">
                  <img
                    src={bombillo}
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t('cu_card6Titulo')}
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('cu_card6Descripcion')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};
