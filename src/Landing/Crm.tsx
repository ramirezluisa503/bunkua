import { Layout } from '../components/Layout/Layout';
import { IconsCrm } from '../components/IconsCrm/IconsCrm';
import { ListCrm } from '../components/ListCrm/ListCrm';
import { ImgCrm } from '../components/ImgCrm/ImgCrm';
import { FasesCrm } from '../components/FasesCrm/FasesCrm';
import { CardCrm } from '../components/CardCrm/CardCrm';
import { images } from '../assets/images/index';
import { CheckList } from '../components/CheckList/CheckList';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Crm = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <header className="min-h-[200px] bg-[#faf4e1]">
        <div className="container mx-auto py-4 md:py-8 px-4">
          <div className="flex flex-col lg:flex-row justify-around items-start mb-6 md:mb-10 mt-6 md:mt-12 gap-8">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 mt-4">
                {t('Lp-crm-title')}
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed max-w-lg">
                {t('Lp-crm-subtitle')}
              </p>

              <NavLink to={'/contactUs'}>
                <button className="hover:bg-black bg-green text-white mt-4 md:mt-7 mb-2 md:mb-0.5 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
                  {t('Lp-crm-cta-button')}
                </button>
              </NavLink>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-xl md:text-2xl font-bold text-gray-800 justify-items-center flex flex-col md:flex-row items-center gap-2">
                    <img
                      src={images.hascunde}
                      alt="hascunde"
                      width={85}
                      className={'content-center'}
                    />
                    <span>Hascunde Bunkua</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Exponential organizations CRM ERP
                </div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl ml-auto">
                <IconsCrm
                  image={images.ventas}
                  text={t('Lp-crm-icons-sales')}
                />

                <IconsCrm
                  image={images.crm}
                  text={t('Lp-crm-icons-crm')}
                />

                <IconsCrm
                  image={images.facturacion}
                  text={t('Lp-crm-icons-invoicing')}
                />

                <IconsCrm
                  image={images.contacto}
                  text={t('Lp-crm-icons-contacts')}
                />

                <IconsCrm
                  image={images.inventario}
                  text={t('Lp-crm-icons-inventory')}
                  style="col-start-2 md:col-start-2"
                />

                <IconsCrm
                  image={images.mrp}
                  text={t('Lp-crm-icons-mrp')}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <article className="pt-8 mb-10 md:pt-15 bg-[#fafafb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              {t('Lp-crm-section-1-title')}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              {t('Lp-crm-section-1-text')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-end">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-8">
                {t('Lp-crm-benefits-title')}
              </h2>

              <div className="space-y-4">
                <ListCrm text={t('Lp-crm-benefits-list-1')} />
                <ListCrm text={t('Lp-crm-benefits-list-2')} />
                <ListCrm text={t('Lp-crm-benefits-list-3')} />
                <ListCrm text={t('Lp-crm-benefits-list-4')} />
                <ListCrm text={t('Lp-crm-benefits-list-5')} />
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <img
                src={images.IaCrm}
                alt="IaCrm"
                className="w-full h-auto rounded shadow-2xl"
              />
            </div>
          </div>
        </div>
      </article>

      <article className="min-h-[400px] md:min-h-[600px] bg-white pt-8 md:pt-15">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              {t('Lp-crm-section-2-title')}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              {t('Lp-crm-section-2-subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 mb-12 md:mb-16">
            <ImgCrm
              text={t('Lp-crm-section-2-module-1')}
              image={images.ventas}
            />

            <ImgCrm
              text={t('Lp-crm-section-2-module-2')}
              image={images.crm}
            />

            <ImgCrm
              text={t('Lp-crm-section-2-module-3')}
              image={images.facturacion}
            />

            <ImgCrm
              text={t('Lp-crm-section-2-module-4')}
              image={images.contacto}
            />

            <ImgCrm
              text={t('Lp-crm-section-2-module-5')}
              image={images.inventario}
            />

            <ImgCrm
              text={t('Lp-crm-section-2-module-6')}
              image={images.mrp}
            />
          </div>

          <div className="bg-gray-100 rounded-2xl p-4 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {t('Lp-crm-section-2-lead-title')}
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {t('Lp-crm-section-2-lead-text')}
            </p>
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-8 md:pt-15">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {t('Lp-crm-section-3-title')}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-8 mb-12 md:mb-22">
            <FasesCrm
              text1={t('Lp-crm-section-3-stage-1-title')}
              text2={t('Lp-crm-section-3-stage-1-text')}
              image={images.user}
            />

            <div className="hidden md:flex items-center justify-center">
              <img
                src={images.flecha}
                alt="flecha"
                className="w-15 h-15"
              />
            </div>

            <FasesCrm
              text1={t('Lp-crm-section-3-stage-2-title')}
              text2={t('Lp-crm-section-3-stage-2-text')}
              image={images.paper}
            />

            <div className="hidden md:flex items-center justify-center">
              <img
                src={images.flecha}
                alt="flecha"
                className="w-15 h-15"
              />
            </div>

            <FasesCrm
              text1={t('Lp-crm-section-3-stage-3-title')}
              text2={t('Lp-crm-section-3-stage-3-text')}
              image={images.hands}
            />

            <div className="hidden md:flex items-center justify-center">
              <img
                src={images.flecha}
                alt="flecha"
                className="w-15 h-15"
              />
            </div>

            <FasesCrm
              text1={t('Lp-crm-section-3-stage-4-title')}
              text2={t('Lp-crm-section-3-stage-4-text')}
              image={images.check}
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8">
            <img
              src={images.capturaCrm}
              alt="Interfaz CRM mostrando las fases del embudo de ventas"
              className="w-full max-w-4xl lg:w-200 h-auto rounded-lg"
            />

            <div className="flex justify-center items-center gap-4">
              <img
                src={images.hascunde}
                alt="Hascunde"
                className="h-20 md:h-40 w-auto"
              />
              <img
                src={images.bunkua}
                alt="Logo Bunkua"
                className="h-20 md:h-40 w-auto"
              />
            </div>
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-8 md:pt-15 bg-[#fafafb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              {t('Lp-crm-section-4-title')}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              {t('Lp-crm-section-4-subtitle')}
            </p>
          </div>

          <div className="p-4 md:p-8 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
              <CardCrm
                text1={t('Lp-crm-section-4-card-1-title')}
                text2={t('Lp-crm-section-4-card-1-text')}
                icon={'📝'}
              />

              <CardCrm
                text1={t('Lp-crm-section-4-card-2-title')}
                text2={t('Lp-crm-section-4-card-2-text')}
                icon={'🛒'}
              />

              <CardCrm
                text1={t('Lp-crm-section-4-card-3-title')}
                text2={t('Lp-crm-section-4-card-3-text')}
                icon={'✍️'}
              />

              <CardCrm
                text1={t('Lp-crm-section-4-card-4-title')}
                text2={t('Lp-crm-section-4-card-4-text')}
                icon={'📧'}
              />

              <CardCrm
                text1={t('Lp-crm-section-4-card-5-title')}
                text2={t('Lp-crm-section-4-card-5-text')}
                icon={'💻'}
              />

              <CardCrm
                text1={t('Lp-crm-section-4-card-6-title')}
                text2={t('Lp-crm-section-4-card-6-text')}
                icon={'📈'}
              />
            </div>
          </div>
          <div className="flex justify-center px-4">
            <img
              src={images.capturaVentas}
              alt="capturaVentas"
              className="w-full max-w-6xl md:w-290 rounded-lg"
            />
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-8 md:pt-15 mt-6 md:mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              {t('Lp-crm-section-5-title')}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              {t('Lp-crm-section-5-subtitle')}
            </p>
          </div>

          <div className="p-4 md:p-8 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
              <CardCrm
                text1={t('Lp-crm-section-5-card-1-title')}
                text2={t('Lp-crm-section-5-card-1-text')}
                image={images.img}
              />

              <CardCrm
                text1={t('Lp-crm-section-5-card-2-title')}
                text2={t('Lp-crm-section-5-card-2-text')}
                image={images.coins}
              />

              <CardCrm
                text1={t('Lp-crm-section-5-card-3-title')}
                text2={t('Lp-crm-section-5-card-3-text')}
                image={images.dolar}
              />
            </div>
          </div>
          <div className="flex justify-center px-4">
            <img
              src={images.capturaFacturacion}
              alt="capturaFacturacion"
              className="w-full max-w-6xl md:w-290 rounded-lg"
            />
          </div>

          <div className="flex justify-center mt-8 md:mt-15 px-4">
            <img
              src={images.capturaFacturacion2}
              alt="capturaFacturacion"
              className="w-full max-w-6xl md:w-290 rounded-lg"
            />
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-8 md:pt-15">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              {t('Lp-crm-section-6-title')}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              {t('Lp-crm-section-6-subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mt-8 md:mt-12">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 text-sm md:text-base">
                <p>{t('Lp-crm-section-6-text-1')}</p>
                <p>
                  <strong>{t('Lp-crm-section-6-text-2-title')}</strong>{' '}
                  {t('Lp-crm-section-6-text-2-text')}
                </p>
                <p>
                  <strong>{t('Lp-crm-section-6-text-3-title')}</strong>{' '}
                  {t('Lp-crm-section-6-text-3-text')}
                </p>
                <p>
                  <strong>{t('Lp-crm-section-6-text-4-title')}</strong>{' '}
                  {t('Lp-crm-section-6-text-4-text')}
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <img
                src={images.moduloContacto}
                alt="IaCrm"
                className="w-full h-auto rounded shadow-2xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mt-12 md:mt-22">
            <div className="relative order-2 lg:order-1">
              <img
                src={images.capturaContacto}
                alt="capturaContacto"
                className="w-full rounded shadow-2xl"
              />
            </div>

            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {t('Lp-crm-section-6-benefits-title')}
              </h2>

              <div className="space-y-4">
                <CheckList text={t('Lp-crm-section-6-benefits-list-1')} />
                <CheckList text={t('Lp-crm-section-6-benefits-list-2')} />
                <CheckList text={t('Lp-crm-section-6-benefits-list-3')} />
                <CheckList text={t('Lp-crm-section-6-benefits-list-4')} />
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-8 md:pt-15 mt-6 md:mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              {t('Lp-crm-section-7-title')}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              {t('Lp-crm-section-7-subtitle')}
            </p>
          </div>

          <div className="p-4 md:p-8 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-7xl mx-auto">
              <CardCrm
                text1={t('Lp-crm-section-7-card-1-title')}
                text2={t('Lp-crm-section-7-card-1-text')}
                image={images.box}
              />

              <CardCrm
                text1={t('Lp-crm-section-7-card-2-title')}
                text2={t('Lp-crm-section-7-card-2-text')}
                image={images.block}
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-center px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl w-full">
              <img
                src={images.capturaInventario1}
                alt="capturaContacto"
                className="rounded-xl shadow-lg h-32 md:h-40 w-full object-cover"
              />

              <img
                src={images.capturaInventario2}
                alt="capturaContacto"
                className="rounded-xl shadow-lg h-32 md:h-40 w-full object-cover"
              />

              <img
                src={images.capturaInventario3}
                alt="capturaContacto"
                className="rounded-xl shadow-lg h-32 md:h-40 w-full object-cover"
              />

              <img
                src={images.capturaInventario4}
                alt="capturaContacto"
                className="rounded-xl shadow-lg h-32 md:h-40 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </article>

      <footer>
        <div className="flex flex-col items-center justify-center h-auto md:h-120 bg-[#faf4e1] p-4 md:p-8 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            {t('Lp-crm-footer-title')}
          </h2>
          <p className="max-w-xl text-base md:text-lg text-[#555555] mb-6 md:mb-8 px-4">
            {t('Lp-crm-footer-subtitle')}
          </p>
          <NavLink to={'/contactUs'}>
            <button className="hover:bg-black bg-green text-white mt-4 md:mt-7 mb-2 md:mb-0.5 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
              {t('Lp-crm-footer-cta-button')}
            </button>
          </NavLink>
        </div>
      </footer>
    </Layout>
  );
};
