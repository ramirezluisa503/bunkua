import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
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
  const { t } = useTranslation(); // Inicializa useTranslation

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const serviceId = 'service_axr6y4a';
    const templateId = 'template_877bd3u';
    const apiKey = 'XeVRlChkvrhnFIQlr';

    if (form.current) {
      // <--- Aquí verificamos que form.current no es null
      emailjs
        .sendForm(serviceId, templateId, form.current, apiKey)
        .then((result) => {
          console.log(result.text);
          alert(t('alert'));
          form.current?.reset(); // Usa optional chaining aquí también por seguridad
        })
        .catch((error) => {
          console.error(error);
          alert(t('error'));
        });
    } else {
      // Este 'else' es opcional, pero bueno para depuración
      console.error(
        'Error: La referencia del formulario es null. Asegúrate de que el formulario se haya renderizado.'
      );
      alert(t('error')); // Podrías mostrar un mensaje de error diferente si quieres
    }
  };

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

        {/*FORMULARIO */}
        <section className="flex flex-row justify-center items-center m-15">
          <div className="sm:flex sm:flex-row flex flex-col bg-white border border-borderGrey rounded-2xl p-8 max-w-5xl w-auto">
            {/* Form Section (Left Half) */}
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {t('cu_title')}
              </h2>
              <form
                className="space-y-4"
                onSubmit={handleSubmit}
                ref={form}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-grey mb-1"
                  >
                    {t('cu_fullNameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t('cu_fullNamePlaceholder')}
                    className="mt-1 block w-full px-3 py-2 text-grey border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-grey mb-1"
                  >
                    {t('cu_emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t('cu_emailPlaceholder')}
                    className="mt-1 block w-full px-3 py-2 text-grey border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-grey mb-1"
                  >
                    {t('cu_messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t('cu_messagePlaceholder')}
                    className="mt-1 block w-full px-3 py-2 text-grey border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  {t('cu_submitButton')}
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="sm:mt-0 sm:w-1/2 sm:ml-10 p-4 flex items-center justify-center mt-8 w-full border-[#fbfbfa] border-15 rounded-xl  ">
              <img
                src={ImgFormulario}
                alt={t('cu_imageAlt')}
                className="md:max-h-full object-cover w-full h-full max-h-[400px] rounded-xl "
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
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-300">
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
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-300">
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
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-300">
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
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-300">
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
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-300">
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
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-300">
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
