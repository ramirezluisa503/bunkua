import { NavLink } from 'react-router-dom';
import { images } from '../assets/images';
import { CardServicesO } from '../components/CardServicesO/CardServicesO';
import { Layout } from '../components/Layout/Layout';
import { useTranslation } from 'react-i18next';

export const ServicesO = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido de texto */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('Lp-ServiciosOver-transformamos_vision')}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {t('Lp-ServiciosOver-somos_socio_estrategico')}
              </p>

              <button className="hover:bg-black bg-green text-white mt-4 md:mt-7 mb-2 md:mb-0.5 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
                {t('Lp-ServiciosOver-agenda_consulta')}
              </button>
            </div>

            {/* Imagen */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={images.portadaConsultoria}
                  alt="Equipo de consultores en una reunión de negocios"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardServicesO
        bg={true}
        icon={images.lupa}
        fase={'1'}
        title={t('Lp-ServiciosOver-fase1_diagnostico_estrategia')}
        imagePortada={images.consultoriaServicios1}
        Sub1Text1={t('Lp-ServiciosOver-objetivos_fase1_1')}
        Sub1Text2={t('Lp-ServiciosOver-objetivos_fase1_2')}
        Sub1Text3={t('Lp-ServiciosOver-objetivos_fase1_3')}
        Sub1Text4={t('Lp-ServiciosOver-objetivos_fase1_4')}
        Sub2Text1={t('Lp-ServiciosOver-metodologia_fase1_1')}
        Sub2Text2={t('Lp-ServiciosOver-metodologia_fase1_2')}
        Sub2Text3={t('Lp-ServiciosOver-metodologia_fase1_3')}
        Sub2Text4={t('Lp-ServiciosOver-metodologia_fase1_4')}
        Sub3Text1={t('Lp-ServiciosOver-entregables_fase1_1')}
        Sub3Text2={t('Lp-ServiciosOver-entregables_fase1_2')}
        Sub3Text3={t('Lp-ServiciosOver-entregables_fase1_3')}
        Sub3Text4={t('Lp-ServiciosOver-entregables_fase1_4')}
        Sub4Text1={t('Lp-ServiciosOver-beneficios_fase1_1')}
        Sub4Text2={t('Lp-ServiciosOver-beneficios_fase1_2')}
        Sub4Text3={t('Lp-ServiciosOver-beneficios_fase1_3')}
        Sub4Text4={t('Lp-ServiciosOver-beneficios_fase1_4')}
      />

      <CardServicesO
        bg={false}
        icon={images.cohete}
        fase={'2'}
        title={t('Lp-ServiciosOver-fase2_implementacion_capacitacion')}
        imagePortada={images.consultoriaServicios2}
        Sub1Text1={t('Lp-ServiciosOver-objetivos_fase2_1')}
        Sub1Text2={t('Lp-ServiciosOver-objetivos_fase2_2')}
        Sub1Text3={t('Lp-ServiciosOver-objetivos_fase2_3')}
        Sub1Text4={t('Lp-ServiciosOver-objetivos_fase2_4')}
        Sub2Text1={t('Lp-ServiciosOver-metodologia_fase2_1')}
        Sub2Text2={t('Lp-ServiciosOver-metodologia_fase2_2')}
        Sub2Text3={t('Lp-ServiciosOver-metodologia_fase2_3')}
        Sub2Text4={t('Lp-ServiciosOver-metodologia_fase2_4')}
        Sub3Text1={t('Lp-ServiciosOver-entregables_fase2_1')}
        Sub3Text2={t('Lp-ServiciosOver-entregables_fase2_2')}
        Sub3Text3={t('Lp-ServiciosOver-entregables_fase2_3')}
        Sub3Text4={t('Lp-ServiciosOver-entregables_fase2_4')}
        Sub4Text1={t('Lp-ServiciosOver-beneficios_fase2_1')}
        Sub4Text2={t('Lp-ServiciosOver-beneficios_fase2_2')}
        Sub4Text3={t('Lp-ServiciosOver-beneficios_fase2_3')}
        Sub4Text4={t('Lp-ServiciosOver-beneficios_fase2_4')}
      />

      <CardServicesO
        bg={true}
        icon={images.hands}
        fase={'3'}
        title={t('Lp-ServiciosOver-fase3_acompanamiento_mejora_continua')}
        imagePortada={images.consultoriaServicios3}
        Sub1Text1={t('Lp-ServiciosOver-objetivos_fase3_1')}
        Sub1Text2={t('Lp-ServiciosOver-objetivos_fase3_2')}
        Sub1Text3={t('Lp-ServiciosOver-objetivos_fase3_3')}
        Sub1Text4={t('Lp-ServiciosOver-objetivos_fase3_4')}
        Sub2Text1={t('Lp-ServiciosOver-metodologia_fase3_1')}
        Sub2Text2={t('Lp-ServiciosOver-metodologia_fase3_2')}
        Sub2Text3={t('Lp-ServiciosOver-metodologia_fase3_3')}
        Sub2Text4={t('Lp-ServiciosOver-metodologia_fase3_4')}
        Sub3Text1={t('Lp-ServiciosOver-entregables_fase3_1')}
        Sub3Text2={t('Lp-ServiciosOver-entregables_fase3_2')}
        Sub3Text3={t('Lp-ServiciosOver-entregables_fase3_3')}
        Sub3Text4={t('Lp-ServiciosOver-entregables_fase3_4')}
        Sub4Text1={t('Lp-ServiciosOver-beneficios_fase3_1')}
        Sub4Text2={t('Lp-ServiciosOver-beneficios_fase3_2')}
        Sub4Text3={t('Lp-ServiciosOver-beneficios_fase3_3')}
        Sub4Text4={t('Lp-ServiciosOver-beneficios_fase3_4')}
      />

      <section className={"min-h-screen py-6 'bg-[#fff]'"}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Icono superior */}
          <div className="flex justify-center mb-4">
            <div className="rounded-full flex items-center justify-center">
              <img
                src={images.dolar}
                alt={images.dolar}
                className="h-14 w-14"
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            {t('Lp-ServiciosOver-fase4_costos_plazos')}
          </h2>

          {/* Imagen grande central */}
          <div className="mt-8">
            <div className="w-full h-48 md:h-64 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={images.consultoriaServicios4}
                alt={images.consultoriaServicios4}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="overflow-x-auto mt-15">
            <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left text-gray-700">
                    <th className="px-6 py-3 font-semibold">{t('Lp-ServiciosOver-servicio')}</th>
                    <th className="px-6 py-3 font-semibold">{t('Lp-ServiciosOver-plazo_estimado')}</th>
                    <th className="px-6 py-3 font-semibold">
                      {t('Lp-ServiciosOver-rango_costo')}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-t border-gray-200 text-left">
                    <td className="px-6 py-3">
                      {t('Lp-ServiciosOver-fase1_diagnostico_estrategia_tabla')}
                    </td>
                    <td className="px-6 py-3">{t('Lp-ServiciosOver-plazo_fase1_tabla')}</td>
                    <td className="px-6 py-3">{t('Lp-ServiciosOver-rango_fase1_tabla')}</td>
                  </tr>
                  <tr className="border-t border-gray-200 text-left">
                    <td className="px-6 py-3">{t('Lp-ServiciosOver-fase2_implementacion_tabla')}</td>
                    <td className="px-6 py-3">{t('Lp-ServiciosOver-plazo_fase2_tabla')}</td>
                    <td className="px-6 py-3">{t('Lp-ServiciosOver-rango_fase2_tabla')}</td>
                  </tr>
                  <tr className="border-t border-gray-200 text-left">
                    <td className="px-6 py-3">{t('Lp-ServiciosOver-tarifa_consultor')}</td>
                    <td className="px-6 py-3">{t('Lp-ServiciosOver-plazo_tarifa_consultor')}</td>
                    <td className="px-6 py-3">{t('Lp-ServiciosOver-rango_tarifa_consultor')}</td>
                  </tr>
                  <tr className="border-t border-gray-200 text-left">
                    <td className="px-6 py-3">
                      {t('Lp-ServiciosOver-costo_licencias')}
                    </td>
                    <td className="px-6 py-3">{t('Lp-ServiciosOver-plazo_costo_licencias')}</td>
                    <td className="px-6 py-3">{t('Lp-ServiciosOver-rango_costo_licencias')}</td>
                  </tr>
                  <tr className="border-t border-gray-200 text-left">
                    <td className="px-6 py-3">
                      {t('Lp-ServiciosOver-soporte_mantenimiento')}
                    </td>
                    <td className="px-6 py-3">{t('Lp-ServiciosOver-plazo_soporte_mantenimiento')}</td>
                    <td className="px-6 py-3">{t('Lp-ServiciosOver-rango_soporte_mantenimiento')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <footer>
          <div className="flex flex-col items-center justify-center h-auto md:h-120 bg-[#faf4e1] p-4 md:p-8 text-center mt-15">
            <img
              src={images.phone}
              alt={images.phone}
              width={55}
              height={55}
              className="mb-10"
            />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
              {t('Lp-ServiciosOver-listo_transformar_negocio')}
            </h2>
            <p className="max-w-xl text-base md:text-lg text-[#555555] mb-6 md:mb-8 px-4">
              {t('Lp-ServiciosOver-contactanos_exito')}
            </p>
            <NavLink to={'/contactUs'}>
              <button className="hover:bg-black bg-green text-white mt-4 md:mt-7 mb-2 md:mb-0.5 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
                {t('Lp-ServiciosOver-habla_experto')}
              </button>
            </NavLink>
          </div>
        </footer>
      </section>
    </Layout>
  );
};
