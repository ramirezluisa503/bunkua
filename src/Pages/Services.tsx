import { useTranslation } from 'react-i18next';
import { Layout } from '../components/Layout/Layout';
import PortadaServicios from '../assets/Images/PortadaServicios.webp';
import BombilloCafe from '../assets/Images/BombilloCafe.svg';
import grid from '../assets/Images/Grid.svg';
import BrainCafe from '../assets/Images/BrainCafe.svg';
import FlechaCrecimiento from '../assets/Images/FlechaCrecimiento.svg';
import escudo from '../assets/Images/Escudo.svg';
import users from '../assets/Images/Users.svg';
import rompecabezas from '../assets/Images/Rompezacebas.svg';
import { Link, NavLink } from 'react-router-dom';

export const Services = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <article>
        {/*PORTADA */}
        <section
          className="relative  bg-cover bg-center  min-h-screen flex items-center justify-center px-4"
          style={{ backgroundImage: `url(${PortadaServicios})` }}
        >
          {/* <div
            className="absolute inset-0 z-0"
            style={{
              background:
                'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7))',
            }}
          ></div> */}
          <div className="flex flex-col justify-center items-center mx-11 relative z-10 bg-bg-services sm:p-6 p-16">
            <h1 className="text-black sm:text-7xl text-6xl max-w-4xl mx-auto  font-bold leading-none text-center">
              {t('sv_portadaTitulo')}
            </h1>
            <p className="text-black text-xl box-content leading-normal text-center m-5">
              {t('sv_portadaSubtitulo')}
            </p>
            <p className="text-black text-xl max-w-2xl box-content leading-normal text-center">
              {t('sv_portadaDescripcion')}
            </p>
            <Link to={'/contactUs'}>
              <button className="hover:bg-black bg-green text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
                {t('sv_btnConsultaGratis')}
              </button>
            </Link>
          </div>
        </section>

        {/*OUR CORE CARDS */}
        <section>
          <div className="mt-28 mb-20">
            <div className="text-center mx-11">
              <h1 className="text-green text-5xl box-content mb-6 font-bold leading-none text-balance">
                {t('sv_serviciosTitulo')}
              </h1>
              <p className="text-grey text-xl box-content leading-normal ">
                {t('sv_serviciosDescripcion')}
              </p>
            </div>

            {/* CARDS OUR CORE SERVICES*/}
            <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-3  sm:gap-6 m-11   ">
              {/*CARD 1*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col  justify-between h-full text-center text-balance transform hover:scale-102 transition-transform duration-300">
                <div className="flex flex-col items-center m-5">
                  <img
                    src={BombilloCafe}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 items-center">
                  {t('sv_diagInstTitulo')}
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('sv_diagInstDescripcion')}
                </p>
                <ul className="text-grey text-left m-auto">
                  <li>{t('sv_diagInstLista1')}</li>
                  <li>{t('sv_diagInstLista2')}</li>
                  <li>{t('sv_diagInstLista3')}</li>
                  <li>{t('sv_diagInstLista4')}</li>
                </ul>
                <button className="bg-white text-black border border-borderGrey mt-15 mb-4 mx-6 w-auto h-9 rounded-[6px]">
                  {t('sv_btnDescubrirDiag')}
                </button>
              </div>
              {/*CARD 2*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col justify-between h-full text-center text-balance transform hover:scale-102 transition-transform duration-300">
                <div className="flex flex-col items-center m-5 ">
                  <img
                    src={grid}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 items-center ">
                  {t('sv_solTecTitulo')}
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('sv_solTecDescripcion')}
                </p>
                <ul className="text-grey text-left m-auto">
                  <li>{t('sv_solTecLista1')}</li>
                  <li>{t('sv_solTecLista2')}</li>
                  <li>{t('sv_solTecLista3')}</li>
                  <li>{t('sv_solTecLista4')}</li>
                </ul>
                <button className="bg-white text-black border border-borderGrey mt-15 mb-4 mx-6 w-auto h-9 rounded-[6px]">
                  {t('sv_btnExplorarSol')}
                </button>
              </div>
              {/*CARD 3*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col  justify-between h-full text-center text-balance transform hover:scale-102 transition-transform duration-300">
                <div className="flex flex-col items-center m-5 ">
                  <img
                    src={BrainCafe}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 items-center">
                  {t('sv_iaImplTitulo')}
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center items-center">
                  {t('sv_iaImplDescripcion')}
                </p>
                <ul className="text-grey text-left m-auto ">
                  <li>{t('sv_iaImplLista1')}</li>
                  <li>{t('sv_iaImplLista2')}</li>
                  <li>{t('sv_iaImplLista3')}</li>
                  <li>{t('sv_iaImplLista4')}</li>
                </ul>
                <button className="bg-white text-black border border-borderGrey mt-15 mb-4 mx-6 w-auto h-9 rounded-[6px]">
                  {t('sv_btnImplementarIA')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/*OUR TRANSFORMATIVE CARDS */}
        <section>
          <div className="mt-28 mb-20">
            <div className="text-center mx-11">
              <h1 className="text-green text-5xl box-content mb-6 font-bold leading-none text-balance">
                {t('sv_procesoTitulo')}
              </h1>
              <p className="text-grey text-xl box-content leading-normal ">
                {t('sv_procesoDescripcion')}
              </p>
            </div>

            {/*Our Transformative CARDS*/}
            <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-4  sm:gap-6 m-11   ">
              {/*CARD 1*/}
              <div className="p-6 flex flex-col  justify-between items-center h-full text-center  ">
                <div className="bg-green text-white font-bold rounded-full size-11 flex items-center         justify-center m-5">
                  1
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-800 items-center">
                  {t('sv_procesoPaso1Titulo')}
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('sv_procesoPaso1Descripcion')}
                </p>
              </div>
              {/*CARD 2*/}
              <div className=" p-6 flex flex-col justify-between items-center h-full text-center">
                <div className="bg-green text-white font-bold rounded-full size-11 flex items-center         justify-center m-5">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 items-center ">
                  {t('sv_procesoPaso2Titulo')}
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center">
                  {t('sv_procesoPaso2Descripcion')}
                </p>
              </div>
              {/*CARD 3*/}
              <div className=" p-6 flex flex-col  justify-between items-center h-full text-center ">
                <div className="bg-green text-white font-bold rounded-full size-11 flex items-center         justify-center m-5">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 items-center">
                  {t('sv_procesoPaso3Titulo')}
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center items-center">
                  {t('sv_procesoPaso3Descripcion')}
                </p>
              </div>
              {/*CARD 4*/}
              <div className="p-6 flex flex-col  justify-between items-center h-full text-center ">
                <div className="bg-green text-white font-bold rounded-full size-11 flex items-center         justify-center m-5">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 items-center">
                  {t('sv_procesoPaso4Titulo')}
                </h3>
                <p className="text-grey text-sm mb-4 leading-relaxed text-center items-center">
                  {t('sv_procesoPaso4Descripcion')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*WHY BUNKUA CARDS */}
        <section>
          <div className="mt-28 mb-20">
            <div className="flex flex-col justify-center items-center text-center mx-11">
              <h1 className="text-green text-5xl box-content mb-6 font-bold leading-none text-balance">
                {t('sv_porQueTitulo')}
              </h1>
              <p className="text-grey text-xl  box-content leading-normal max-w-xl text-balance">
                {t('sv_porQueDescripcion')}
              </p>
            </div>

            {/* CARDS WHY CHOOSE BUNKUA*/}
            <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-4  sm:gap-6 m-11   ">
              {/*CARD 1*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col  justify-between h-full text-center text-balance transform hover:scale-102 transition-transform duration-300">
                <div className="m-5">
                  <img
                    src={FlechaCrecimiento}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                  {t('sv_impactoProbadoTitulo')}
                </h3>
                <p className="text-grey text-sm mb-4 px-8 leading-relaxed text-center">
                  {t('sv_impactoProbadoDescripcion')}
                </p>
              </div>
              {/*CARD 2*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col justify-between h-full text-center text-balance transform hover:scale-102 transition-transform duration-300">
                <div className="m-5">
                  <img
                    src={users}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center ">
                  {t('sv_equipoExpertoTitulo')}
                </h3>
                <p className="text-grey text-sm mb-4 px-8 leading-relaxed text-center">
                  {t('sv_equipoExpertoDescripcion')}
                </p>
              </div>
              {/*CARD 3*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col  justify-between h-full text-center text-balance transform hover:scale-102 transition-transform duration-300">
                <div className="m-5">
                  <img
                    src={escudo}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                  {t('sv_seguroEscalableTitulo')}
                </h3>
                <p className="text-grey text-sm mb-4 px-8 leading-relaxed text-center items-center">
                  {t('sv_seguroEscalableDescripcion')}
                </p>
              </div>
              {/*CARD 4*/}
              <div className="border border-grayLight shadow-md rounded-xl p-6 flex flex-col  justify-between h-full text-center text-balance transform hover:scale-102 transition-transform duration-300">
                <div className="m-5">
                  <img
                    src={rompecabezas}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                  {t('sv_solucionesMedidaTitulo')}
                </h3>
                <p className="text-grey text-sm mb-4 px-8 leading-relaxed text-center items-center">
                  {t('sv_solucionesMedidaDescripcion')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*READY TO TRANSFORM */}
        <section>
          <div className="sm:mx-10 flex flex-col justify-center items-center text-center mt-40 mb-20 mx-10 px-8 py-10  bg-white border border-borderGrey h-auto w-auto rounded-xl">
            <h1 className="text-brown text-4xl box-content mb-6 font-bold leading-none text-balance">
              {t('sv_listoTransformarTitulo')}
            </h1>
            <p className="text-grey text-xl text-center box-content leading-normal max-w-2xl">
              {t('sv_listoTransformarDescripcion')}
            </p>
            <NavLink to={'/contactUs'}>
              <button className="hover:bg-black cursor-pointer bg-green text-white mt-7 mb-0.5 w-fit  p-2 rounded-[6px]">
                {t('sv_btnAgendarLlamada')}
              </button>
            </NavLink>
          </div>
        </section>
      </article>
    </Layout>
  );
};
