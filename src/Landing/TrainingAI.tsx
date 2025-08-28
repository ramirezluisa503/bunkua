import { useTranslation } from 'react-i18next';
import IMGportada from '../assets/Images/PortadaCapacitacionIA.webp';
import NuestroPrograma from '../assets/Images/NuestroPrograma.webp';
import RecursosNecesarios from '../assets/Images/RecursosNecesarios.webp';
import ResultadosEsperados from '../assets/Images/ResultadosEsperados.webp';
import Users from '../assets/Images/Users.svg';
import Bombillo from '../assets/Images/Bombillo.svg';
import Time from '../assets/Images/Time.svg';
import { Layout } from '../components/Layout/Layout';
import AccordionItem from '../components/AccordionItem/AccordionItem';
import PuntoNegro from '../assets/Images/PuntoNegro.svg';

export const TrainingAI = () => {
  // Inicializa el hook de traducción
  const { t } = useTranslation();

  return (
    <article>
      <Layout>
        {/* Portada */}
        <section className="sm:grid-cols-2 sm:gap-15 sm:py-35 gap-10 grid grid-cols-1 bg-nv-bg p-16 items-center place-items-center">
          <div className="sm:col-span-1 sm:text-left text-center box-content">
            <h2 className="text-black text-5xl box-content mb-6 font-bold leading-tight">
              {t('Lp-cap-title-portada')}
            </h2>
            <p className="text-grey text-balance text-xl box-content leading-relaxed">
              {t('Lp-cap-description-portada')}
            </p>
            <button className="bg-green hover:bg-black cursor-pointer text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px]">
              {t('Lp-cap-button-portada')}
            </button>
          </div>
          <div className="sm:mt-0 sm:ml-0">
            <img
              className="sm:size-fit  h-auto size-72 rounded-xl"
              src={IMGportada}
              alt="Image"
            />
          </div>
        </section>

        {/* Nuestro Programa de Capacitación */}
        <section className="flex flex-col justify-center items-center ">
          <h2 className="text-4xl font-bold pt-20 text-center  ">
            {t('Lp-cap-title-programa')}
          </h2>
          <section className="sm:grid-cols-2 sm:gap-15 sm:py-15 gap-10 grid grid-cols-1 bg-white p-16 items-center place-items-center">
            <div className="sm:mt-0 sm:ml-0">
              <img
                className="sm:size-fit  h-auto size-72 rounded-xl"
                src={NuestroPrograma}
                alt="Image"
              />
            </div>

            <div className="sm:col-span-1  box-content">
              <h2 className="sm:text-left text-center text-black text-3xl box-content mb-6 font-bold leading-none">
                {t('Lp-cap-title-justificacion')}
              </h2>
              <p className="text-grey sm:text-left text-justify text-balance text-xl box-content leading-relaxed">
                {t('Lp-cap-description-justificacion')}
              </p>
            </div>
          </section>
        </section>

        {/* Detalles del programa */}
        <section className="bg-lpc-bg py-12 sm:py-10 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mx-11">
              <h2 className="text-black text-4xl box-content mb-6 font-bold leading-none text-balance">
                {t('Lp-cap-title-detalles')}
              </h2>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-3 sm:gap-6 m-10">
              {/* CARD 1 */}
              <div className="border border-borderGrey bg-white shadow-md rounded-xl p-6 flex flex-col items-center  text-center transform hover:scale-102 transition-transform duration-300">
                <div className="m-5">
                  <img
                    src={Users}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-5 text-gray-800">
                  {t('Lp-cap-card-1-title')}
                </h3>
                <p className="text-grey text-sm mb-5 max-w-90 leading-relaxed text-center ">
                  {t('Lp-cap-card-1-description')}
                </p>
              </div>
              {/* CARD 2 */}
              <div className="border border-borderGrey bg-white shadow-md rounded-xl p-6 flex flex-col items-center   text-center transform hover:scale-102 transition-transform duration-300">
                <div className="m-5">
                  <img
                    src={Bombillo}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-5 text-gray-800">
                  {t('Lp-cap-card-2-title')}
                </h3>
                <p className="text-grey text-sm mb-5 max-w-90 leading-relaxed text-center ">
                  {t('Lp-cap-card-2-description')}
                </p>
              </div>
              {/* CARD 3 */}
              <div className="border border-borderGrey bg-white shadow-md rounded-xl p-6 flex flex-col items-center  text-center transform hover:scale-102 transition-transform duration-300">
                <div className="m-5">
                  <img
                    src={Time}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-5 text-gray-800">
                  {t('Lp-cap-card-3-title')}
                </h3>
                <p className="text-grey text-sm mb-5 max-w-90 leading-relaxed text-center ">
                  {t('Lp-cap-card-3-description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Módulos de la Capacitación   */}
        <section className="flex flex-col justify-center items-center py-15 px-5">
          <h2 className="text-4xl font-bold mb-8 text-center">
            {t('Lp-cap-title-contenido')}
          </h2>
          <div className="w-full max-w-4xl space-y-4">
            {/* Modulo 1 */}
            <AccordionItem
              title={t('Lp-cap-module-1-title')}
            >
              <ul>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-1-item-1')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-1-item-2')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-1-item-3')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-1-item-4')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-1-item-5')}</li>
              </ul>
            </AccordionItem>

            {/* Modulo 2 */}
            <AccordionItem
              title={t('Lp-cap-module-2-title')}
            >
              <ul>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-2-item-1')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-2-item-2')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-2-item-3')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-2-item-4')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-2-item-5')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-2-item-6')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-2-item-7')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-2-item-8')}</li>
              </ul>
            </AccordionItem>

            {/* Modulo 3 */}
            <AccordionItem
              title={t('Lp-cap-module-3-title')}
            >
              <ul>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-3-item-1')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-3-item-2')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-3-item-3')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-3-item-4')}</li>
              </ul>
            </AccordionItem>

            {/* Modulo 4 */}
            <AccordionItem
              title={t('Lp-cap-module-4-title')}
            >
              <ul>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-4-item-1')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-4-item-2')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-4-item-3')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-4-item-4')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-4-item-5')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-4-item-6')}</li>
              </ul>
            </AccordionItem>

            {/* Modulo 5 */}
            <AccordionItem
              title={t('Lp-cap-module-5-title')}
            >
              <ul>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-5-item-1')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-5-item-2')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-5-item-3')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-5-item-4')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-5-item-5')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-5-item-6')}</li>
              </ul>
            </AccordionItem>

            {/* Modulo 6 */}
            <AccordionItem
              title={t('Lp-cap-module-6-title')}
            >
              <ul>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-6-item-1')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-6-item-2')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-6-item-3')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-6-item-4')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-6-item-5')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-6-item-6')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-6-item-7')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-6-item-8')}</li>
                <li className='flex flex-row'><img src={PuntoNegro} alt="PuntoNegro" className='size-5 justify-center ' />{t('Lp-cap-module-6-item-9')}</li>
              </ul>
            </AccordionItem>
          </div>
        </section>

        {/* Recursos Necesarios */}
        <section className=" bg-lpc-bg p-10 items-center place-items-center">
          <h2 className="text-4xl font-bold  text-center">
            {t('Lp-cap-title-recursos')}
          </h2>
          <div className="sm:grid-cols-2 sm:gap-15 sm:py-20  grid grid-cols-1">
            <div className="sm:col-span-1 sm:text-left text-center box-content">
              <h2 className="text-black text-4xl box-content mb-6 font-bold leading-tight">
                {t('Lp-cap-title-recursos-necesitas')}
              </h2>
              <br />
              <ul className="sm:max-w-300 text-left list-disc pl-5 space-y-2  mb-10  text-grey  text-xl">
                <li>
                  <span className="font-semibold">
                    {t('Lp-cap-recursos-item-1-title')}
                  </span>
                  {t('Lp-cap-recursos-item-1-description')}
                </li>
                <li>
                  <span className="font-semibold">
                    {t('Lp-cap-recursos-item-2-title')}
                  </span>
                  {t('Lp-cap-recursos-item-2-description')}
                </li>
                <li>
                  <span className="font-semibold">
                    {t('Lp-cap-recursos-item-3-title')}
                  </span>
                  {t('Lp-cap-recursos-item-3-description')}
                </li>
                <li>
                  <span className="font-semibold">
                    {t('Lp-cap-recursos-item-4-title')}
                  </span>
                  {t('Lp-cap-recursos-item-4-description')}
                </li>
                <li>
                  <span className="font-semibold">
                    {t('Lp-cap-recursos-item-5-title')}
                  </span>
                  {t('Lp-cap-recursos-item-5-description')}
                </li>
              </ul>
            </div>
            <div className="sm:mt-0 sm:ml-0 flex justify-center">
              <img
                className="sm:size-100  h-auto size-72 rounded-xl"
                src={RecursosNecesarios}
                alt="Image"
              />
            </div>
          </div>
        </section>

        {/* Resultados esperados */}
        <section className=" bg-white p-10 items-center place-items-center">
          <h2 className="text-4xl font-bold text-center mb-10">
            {t('Lp-cap-title-resultados')}
          </h2>
          <div className="sm:grid-cols-2 sm:gap-15 sm:py-20  grid grid-cols-1">
            <div className="sm:mt-0 sm:ml-0 flex justify-center">
              <img
                className="sm:size-100  h-auto size-72 rounded-xl mb-10"
                src={ResultadosEsperados}
                alt="Image"
              />
            </div>
            <div className="sm:col-span-1 sm:text-left text-center box-content">
              <h2 className="text-black text-4xl box-content mb-6 font-bold leading-tight">
                {t('Lp-cap-title-transforma-carrera')}
              </h2>
              <p className="text-grey text-xl mb-5 leading-relaxed text-left ">
                {t('Lp-cap-resultados-description')}
              </p>

              <ul className="text-left list-disc pl-5 space-y-2 sm:max-w-300  text-grey  text-xl">
                <li>
                  <span className="font-semibold">
                    {t('Lp-cap-resultados-item-1-title')}
                  </span>
                  {t('Lp-cap-resultados-item-1-description')}
                </li>
                <li>
                  <span className="font-semibold">
                    {t('Lp-cap-resultados-item-2-title')}
                  </span>
                  {t('Lp-cap-resultados-item-2-description')}
                </li>
                <li>
                  <span className="font-semibold">
                    {t('Lp-cap-resultados-item-3-title')}
                  </span>
                  {t('Lp-cap-resultados-item-3-description')}
                </li>
                <li>
                  <span className="font-semibold">
                    {t('Lp-cap-resultados-item-4-title')}
                  </span>
                  {t('Lp-cap-resultados-item-4-description')}
                </li>

              </ul>
            </div>

          </div>
        </section>

        {/* Footer */}
        <section className="flex flex-col justify-center text-center bg-nv-bg p-16 items-center">

          <h2 className="sm:text-5xl text-3xl text-black box-content mb-6 font-bold leading-tight">
            {t('Lp-cap-footer-title')}
          </h2>
          <p className="text-grey text-balance text-xl box-content leading-relaxed">
            {t('Lp-cap-footer-description')}
          </p>
          <button className="bg-green hover:bg-black cursor-pointer text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px]">
            {t('Lp-cap-footer-button')}
          </button>

        </section>
      </Layout>
    </article>
  );
};