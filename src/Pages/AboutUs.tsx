import { useTranslation } from 'react-i18next';
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
import ComillasCafes from '../assets/Images/ComillasCafes.svg';
import bombillo from '../assets/Images/Bombillo.svg';
import escudo from '../assets/Images/Escudo.svg';
import users from '../assets/Images/Users.svg';
import destello from '../assets/Images/Destello.svg';
import calendario from '../assets/Images/Calendario.svg';
import medalla from '../assets/Images/Medalla.svg';

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <article>
        {/*ABOUT BUNKUA */}
        <section>
          <div className="sm:grid-cols-2 sm:gap-15 sm:py-20 gap-10 grid grid-cols-1 p-16 items-center">
            <div className="sm:col-span-1 sm:text-left sm:pl-36 text-center box-content">
              <h1 className="text-black text-6xl box-content mb-6 font-bold leading-none">
                {t('au_aboutUsTitulo')}
              </h1>
              <p className="text-grey text-balance text-xl box-content leading-relaxed">
                {t('au_aboutUsDescripcion')}
              </p>
            </div>
            <div className="sm:mt-0 sm:ml-0 mx-auto mt-5">
              <img
                className="sm:size-fit max-w-full h-auto size-72 rounded-xl"
                src={AboutUsPortada1}
                alt="Image"
              />
            </div>
          </div>
        </section>

        {/*OUR STORY */}
        <section>
          <div className="sm:grid-cols-2 sm:gap-15 sm:py-20 gap-10 grid grid-cols-1 p-16 items-center">
            <div className="sm:col-span-1 sm:text-left text-center box-content">
              <h1 className="text-black text-3xl box-content mb-6 font-bold leading-none">
                {t('au_nuestraHistoriaTitulo')}
              </h1>
              <p className="text-grey text-balance text-lg box-content leading-relaxed">
                {t('au_nuestraHistoriaDescripcion')}
              </p>
            </div>
            <div className="sm:mt-0 sm:ml-0 mx-auto mt-5">
              <img
                className="sm:size-fit max-w-full h-auto size-72 rounded-xl"
                src={AboutUsPortada2}
                alt="Image"
              />
            </div>
          </div>
        </section>

        {/*OUR MISSION */}
        <section>
          <div className="sm:p-8 sm:max-w-2xl sm:mx-auto max-w-sm mx-auto p-9 bg-white rounded-xl text-center shadow-md transform hover:scale-102 transition-transform duration-60">
            <div className="flex justify-start sm:ml-6">
              <img
                src={ComillasCafes}
                className="w-10 h-10 sm:w-16 sm:h-16"
              />
            </div>
            <div>
              <p className="text-xl sm:text-4xl sm:mb-6 italic font-bold text-gray-900 leading-normal">
                {t('au_misionTitulo')}
                <p className="text-base text-gray-700 mt-4">
                  {t('au_misionAutor')}
                </p>
              </p>
              <div className="flex justify-end sm:-mt-7 sm:mr-4">
                <img
                  src={ComillasCafes}
                  className="w-10 h-10 sm:w-16 sm:h-16"
                />
              </div>
            </div>
          </div>
        </section>

        {/*OUR CORE VALUE CARDS */}
        <section>
          <div className="mt-28 mb-20">
            <h1 className="text-black text-3xl text-center box-content mb-14 mx-11 font-bold leading-none text-balance">
              {t('au_valoresTitulo')}
            </h1>
            {/* CARDS OUR EXPERTICIE*/}
            <div className="sm:grid sm:grid-cols-3 sm:gap-6 m-11 grid grid-cols-1 gap-6">
              {/*CARD 1*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-60">
                <div className="bg-cs-card text-white font-bold rounded-full size-11 flex items-center justify-center m-5">
                  <img
                    src={bombillo}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t('au_valorInnovacionTitulo')}
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('au_valorInnovacionDescripcion')}
                </p>
              </div>
              {/*CARD 2*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-60">
                <div className="bg-cs-card text-white font-bold rounded-full size-11 flex items-center justify-center m-5">
                  <img
                    src={destello}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t('au_valorExcelenciaTitulo')}
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('au_valorExcelenciaDescripcion')}
                </p>
              </div>
              {/*CARD 3*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-60">
                <div className="bg-cs-card text-white font-bold rounded-full size-11 flex items-center justify-center m-5">
                  <img
                    src={escudo}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t('au_valorIntegridadTitulo')}
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('au_valorIntegridadDescripcion')}
                </p>
              </div>
              {/*CARD 4*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-60">
                <div className="bg-cs-card text-white font-bold rounded-full size-11 flex items-center justify-center m-5">
                  <img
                    src={users}
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t('au_valorCentricidadClienteTitulo')}
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('au_valorCentricidadClienteDescripcion')}
                </p>
              </div>
              {/*CARD 5*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-60">
                <div className="bg-cs-card text-white font-bold rounded-full size-11 flex items-center justify-center m-5">
                  <img
                    src={calendario}
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t('au_valorEficienciaTitulo')}
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('au_valorEficienciaDescripcion')}
                </p>
              </div>
              {/*CARD 6*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-between h-full text-center shadow-md transform hover:scale-102 transition-transform duration-60">
                <div className="bg-cs-card text-white font-bold rounded-full size-11 flex items-center justify-center m-5">
                  <img
                    src={medalla}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t('au_valorImpactoTitulo')}
                </h3>
                <p className="sm:max-w-80 text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('au_valorImpactoDescripcion')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MEET OUR VISIONARIES*/}
        <section>
          <div className="mt-50 mb-25">
            <h1 className="text-black text-3xl text-center box-content mb-10 mx-11 font-bold leading-none text-balance">
              {t('au_visionariosTitulo')}
            </h1>
            <div className="sm:flex-row sm:justify-center sm:items-center sm:gap-6 flex flex-col items-center">
              {/*CARD 1*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-center text-center mb-8 w-3xs shadow-md transform hover:scale-102 transition-transform duration-60">
                <img
                  src={Visionaries1}
                  alt="Visionary"
                  className="rounded-full h-auto w-40"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {t('au_visionarioElenaNombre')}
                </h3>
                <p className="sm:max-w-80 text-grey text-[14px] mb-4 leading-relaxed text-center">
                  {t('au_visionarioElenaCargo')}
                </p>
              </div>

              {/*CARD 2*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col items-center justify-center h-full text-center mb-8 w-3xs shadow-md transform hover:scale-102 transition-transform duration-60">
                <img
                  src={Visionaries2}
                  alt="Visionary"
                  className="rounded-full h-auto w-40"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {t('au_visionarioMarcusNombre')}
                </h3>
                <p className="sm:max-w-80 text-grey text-[14px] mb-4 leading-relaxed text-center">
                  {t('au_visionarioMarcusCargo')}
                </p>
              </div>
              {/*CARD 3*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col justify-center place-items-center h-full text-center mb-8 w-3xs shadow-md transform hover:scale-102 transition-transform duration-60">
                <img
                  src={Visionaries3}
                  alt="Visionary"
                  className="rounded-full h-auto w-40"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {t('au_visionarioSophiaNombre')}
                </h3>
                <p className="sm:max-w-80 text-grey text-[14px] mb-4 leading-relaxed text-center">
                  {t('au_visionarioSophiaCargo')}
                </p>
              </div>
              {/*CARD 4*/}
              <div className="border border-borderGrey rounded-xl p-6 flex flex-col justify-center items-center h-full text-center mb-8 w-3xs shadow-md transform hover:scale-102 transition-transform duration-60">
                <img
                  src={Visionaries4}
                  alt="Visionary"
                  className="rounded-full h-auto w-40"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {t('au_visionarioDavidNombre')}
                </h3>
                <p className="sm:max-w-80 text-grey text-[14px] mb-4 leading-relaxed text-center">
                  {t('au_visionarioDavidCargo')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*SECCION LINEA DE TIEMPO */}
        <section className="py-20 bg-white">
          <div className="container mx-auto ">
            <h2 className="text-3xl font-bold text-center text-black mx-15 mb-10">
              {t('au_hitosTitulo')}
            </h2>

            <div className="flex justify-center">
              <div className="sm:pl-15 sm:w-auto pl-14 mt-5 relative border-l-2 border-green w-9/12">
                {/* Hito 2020 */}
                <div className="mb-12 flex items-start">
                  <div className="absolute size-4 rounded-full border left-7 top-0.5 flex items-center justify-center">
                    <div className="absolute size-2 bg-green rounded-full"></div>
                  </div>
                  <div className="ml-0">
                    <h3 className="text-xl font-semibold text-green mb-1">
                      {t('au_hito2020Titulo')}
                    </h3>
                    <p className="text-grey text-base leading-relaxed max-w-xl">
                      {t('au_hito2020Descripcion')}
                    </p>
                  </div>
                </div>

                {/* Hito 2021 */}
                <div className="mb-12 flex items-start">
                  <div className="absolute size-4 rounded-full border left-7 top-2.5/12 flex items-center justify-center">
                    <div className="absolute size-2 bg-green rounded-full"></div>
                  </div>
                  <div className="ml-0">
                    <h3 className="text-xl font-semibold text-green mb-1">
                      {t('au_hito2021Titulo')}
                    </h3>
                    <p className="text-grey text-base leading-relaxed max-w-xl">
                      {t('au_hito2021Descripcion')}
                    </p>
                  </div>
                </div>

                {/* Hito 2022 */}
                <div className="mb-12 flex items-start">
                  <div className="absolute size-4 rounded-full border left-7 top-4.5/12 flex items-center justify-center">
                    <div className="absolute size-2 bg-green rounded-full"></div>
                  </div>
                  <div className="ml-0">
                    <h3 className="text-xl font-semibold text-green mb-1">
                      {t('au_hito2022Titulo')}
                    </h3>
                    <p className="text-grey text-base leading-relaxed max-w-xl">
                      {t('au_hito2022Descripcion')}
                    </p>
                  </div>
                </div>

                {/* Hito 2023 */}
                <div className="mb-12 flex items-start">
                  <div className="absolute size-4 rounded-full border left-7 top-7.5/12 flex items-center justify-center">
                    <div className="absolute size-2 bg-green rounded-full"></div>
                  </div>
                  <div className="ml-0">
                    <h3 className="text-xl font-semibold text-green mb-1">
                      {t('au_hito2023Titulo')}
                    </h3>
                    <p className="text-grey text-base leading-relaxed max-w-xl">
                      {t('au_hito2023Descripcion')}
                    </p>
                  </div>
                </div>

                {/* Hito 2024 */}
                <div className="mb-5 flex items-start">
                  <div className="absolute size-4 rounded-full border left-7 top-9.5/12 flex items-center justify-center">
                    <div className="absolute size-2 bg-green rounded-full"></div>
                  </div>
                  <div className="ml-0">
                    <h3 className="text-xl font-semibold text-green mb-1">
                      {t('au_hito2024Titulo')}
                    </h3>
                    <p className="text-grey text-base leading-relaxed max-w-xl">
                      {t('au_hito2024Descripcion')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*BAR */}
        <section>
          <div className="m-20">
            <h2 className="sm:mx-15 mb-10 text-3xl font-bold text-center text-black">
              {t('au_confianzaTitulo')}
            </h2>
            <div className="flex sm:gap-55 gap-9 items-center justify-center">
              <img
                src={Trusted1}
                alt="Icono"
                className="sm:w-auto sm:h-14 w-auto h-8"
              />
              <img
                src={Trusted2}
                alt="Icono"
                className="sm:w-auto sm:h-14 w-auto h-8"
              />
              <img
                src={Trusted3}
                alt="Icono"
                className="sm:w-auto sm:h-14 w-auto h-8"
              />
              <img
                src={Trusted4}
                alt="Icono"
                className="sm:w-auto sm:h-14 w-auto h-8"
              />
              <img
                src={Trusted3}
                alt="Icono"
                className="sm:w-auto sm:h-14 w-auto h-8"
              />
              <img
                src={Trusted5}
                alt="Icono"
                className="sm:w-auto sm:h-14 w-auto h-8"
              />
            </div>
          </div>
        </section>

        {/*READY FOR A NEW CHALLENGE*/}
        <section>
          <div className="sm:flex sm:mx-24 mt-40 mb-20 mx-10 p-10 text-left bg-green rounded-xl items-center justify-between overflow-hidden">
            <div className="sm:w-1/2">
              <h1 className="sm:text-5xl text-4xl text-white mb-8 font-bold leading-none">
                {t('au_nuevoRetoTitulo')}
              </h1>
              <p className="text-white leading-normal text-lg">
                {t('au_nuevoRetoDescripcion')}
              </p>
              <button className="hover:bg-black hover:text-white bg-white mt-7 mb-0.5 w-48 h-9 rounded-[6px] text-green">
                {t('au_btnVerPuestos')}
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
