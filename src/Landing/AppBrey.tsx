import { Layout } from '../components/Layout/Layout';
import AutoCarousel from '../components/Carousel/Carousel';
import { CheckList } from '../components/CheckList/CheckList';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Brey1 from '../assets/images/Brey1.webp';
import Brey2 from '../assets/images/Brey2.webp';
import Brey3 from '../assets/images/Brey3.webp';
import Brey4 from '../assets/images/Brey4.webp';
import Brey5 from '../assets/images/Brey5.webp';
import Brey6 from '../assets/images/Brey6.webp';
import Brey7 from '../assets/images/Brey7.webp';
import Brey8 from '../assets/images/Brey8.webp';
import Brey9 from '../assets/images/Brey9.webp';
import Brey10 from '../assets/images/Brey10.webp';
import Brey11 from '../assets/images/Brey11.webp';
import Brey12 from '../assets/images/Brey12.webp';
import Brey13 from '../assets/images/Brey13.webp';
import Padlock from '../assets/images/Padlock.svg';
import Nube from '../assets/images/Nube.svg';
import Microphone from '../assets/images/Microphone.svg';
import Users from '../assets/images/Users.svg';

export const AppBrey = () => {
  const { t } = useTranslation();

  const imagesData = [
    { src: Brey1, alt: 'Bray 1' },
    { src: Brey2, alt: 'Bray 2' },
    { src: Brey3, alt: 'Bray 3' },
    { src: Brey4, alt: 'Bray 4' },
    { src: Brey5, alt: 'Bray 5' },
    { src: Brey6, alt: 'Bray 6' },
    { src: Brey7, alt: 'Bray 7' },
    { src: Brey8, alt: 'Bray 8' },
    { src: Brey9, alt: 'Bray 9' },
    { src: Brey10, alt: 'Bray 10' },
    { src: Brey11, alt: 'Bray 11' },
    { src: Brey12, alt: 'Bray 12' },
    { src: Brey13, alt: 'Bray 13' },
  ];

  return (
    <Layout>
      <section className=" sm:grid sm:grid-cols-2 sm:gap-10 flex flex-col p-2 bg-gray-50 ">
        
        {/* Portada */}
        <article className="gap-10 grid grid-cols-1 bg-white p-16 items-center place-items-center">
          <div className="sm:text-left text-center box-content">
            <h2 className="sm:text-4xl text-3xl text-black box-content mb-6 font-bold leading-tight">
              {t("LpAppBrey-title")}
            </h2>
            <p className="text-grey text-balance text-xl box-content leading-relaxed">
              {t("LpAppBrey-subtitle")}
            </p>
            <NavLink to={'/contactUs'}>
              <button className="hover:bg-black bg-green text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
                {t("LpAppBrey-cta-button-demostracion")}
              </button>
            </NavLink>
          </div>
        </article>
        
        <article className='flex justify-center items-center'>
          <AutoCarousel slides={imagesData} interval={8000} />
        </article>

      </section>
      
      {/* Cards */}
      <section className='bg-lpAppBray-bg'>
          <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-4 sm:gap-6 p-20">
            {/*CARD 1*/}
            <div className="bg-white border border-grayLight shadow-md rounded-xl p-6 flex flex-col justify-between h-full text-center text-balance transform hover:scale-102 transition-transform duration-300">
              <div className="m-5">
                <img
                  src={Padlock}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                {t("LpAppBrey-card-title-1")}
              </h3>
              <p className="text-grey text-sm mb-4 px-8 leading-relaxed text-center">
                {t("LpAppBrey-card-text-1")}
              </p>
            </div>
            {/*CARD 2*/}
            <div className="bg-white border border-grayLight shadow-md rounded-xl p-6 flex flex-col justify-between h-full text-center text-balance transform hover:scale-102 transition-transform duration-300">
              <div className="m-5">
                <img
                  src={Nube}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center ">
                {t("LpAppBrey-card-title-2")}
              </h3>
              <p className="text-grey text-sm mb-4 px-8 leading-relaxed text-center">
                {t("LpAppBrey-card-text-2")}
              </p>
            </div>
            {/*CARD 3*/}
            <div className="bg-white border border-grayLight shadow-md rounded-xl p-6 flex flex-col justify-between h-full text-center text-balance transform hover:scale-102 transition-transform duration-300">
              <div className="m-5">
                <img
                  src={Microphone}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                {t("LpAppBrey-card-title-3")}
              </h3>
              <p className="text-grey text-sm mb-4 px-8 leading-relaxed text-center items-center">
                {t("LpAppBrey-card-text-3")}
              </p>
            </div>
            {/*CARD 4*/}
            <div className="bg-white border border-grayLight shadow-md rounded-xl p-6 flex flex-col justify-between h-full text-center text-balance transform hover:scale-102 transition-transform duration-300">
              <div className="m-5">
                <img
                  src={Users}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 items-center">
                {t("LpAppBrey-card-title-4")}
              </h3>
              <p className="text-grey text-sm mb-4 px-8 leading-relaxed text-center items-center">
                {t("LpAppBrey-card-text-4")}
              </p>
            </div>
          </div>
      </section>
      {/* Roles y Permisos */}
      <section className='m-20'>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-15 text-center">
          {t("LpAppBrey-roles-title")}
        </h2>
        <article className='sm:grid sm:grid-cols-2 flex flex-col justify-center items-center gap-10'>
          <div className="sm:grid-cols-1 border border-borderGrey rounded-xl p-8 space-y-8 ">
            <h3 className="text-3xl font-bold text-gray-800">
              {t("LpAppBrey-admin-title")}
            </h3>

            <div className="space-y-4">
              <CheckList text={t("LpAppBrey-admin-list-item-1")} />
              <CheckList text={t("LpAppBrey-admin-list-item-2")} />
              <CheckList text={t("LpAppBrey-admin-list-item-3")} />
              <CheckList text={t("LpAppBrey-admin-list-item-4")} />
              <CheckList text={t("LpAppBrey-admin-list-item-5")} />
              <CheckList text={t("LpAppBrey-admin-list-item-6")} />
            </div>
          </div>
          <div className="sm:grid-cols-1 border border-borderGrey rounded-xl p-8 space-y-8">
            <h3 className="text-3xl font-bold text-gray-800">
              {t("LpAppBrey-user-title")}
            </h3>

            <div className="space-y-4">
              <CheckList text={t("LpAppBrey-user-list-item-1")} />
              <CheckList text={t("LpAppBrey-user-list-item-2")} />
              <CheckList text={t("LpAppBrey-user-list-item-3")} />
              <CheckList text={t("LpAppBrey-user-list-item-4")} />
              <CheckList text={t("LpAppBrey-user-list-item-5")} />
              <CheckList text={t("LpAppBrey-user-list-item-6")} />
            </div>
          </div>
        </article>
        
      </section>
      <footer>
        <div className="flex flex-col items-center justify-center h-120 bg-[#faf4e1] p-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
            {t("LpAppBrey-footer-title")}
          </h2>
          
          <NavLink to={'/contactUs'}>
            <button className="hover:bg-black bg-green text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
              {t("LpAppBrey-cta-button-contacto")}
            </button>
          </NavLink>
        </div>
      </footer>

    </Layout>
    
  );
};