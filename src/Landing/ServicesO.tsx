import { NavLink } from 'react-router-dom';
import { images } from '../assets/images';
import { CardServicesO } from '../components/CardServicesO/CardServicesO';
import { Layout } from '../components/Layout/Layout';

export const ServicesO = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido de texto */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transformamos tu
                <br />
                <span className="text-gray-800">visión en resultados</span>
                <br />
                <span className="text-gray-700">tangibles.</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                En Consultoría de Servicios, somos tu socio estratégico para
                navegar la complejidad del mercado actual. Ofrecemos soluciones
                personalizadas que impulsan el crecimiento, optimizan procesos y
                maximizan el potencial de tu negocio.
              </p>

              <button className="hover:bg-black bg-green text-white mt-4 md:mt-7 mb-2 md:mb-0.5 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
                Agenda una consulta
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
        title={'Diagnóstico y Estrategia'}
        imagePortada={images.consultoriaServicios1}
        Sub1Text1={'Identificar desafíos y oportunidades clave.'}
        Sub1Text2={'Comprender la situación actual de la organización.'}
        Sub1Text3={'Definir metas claras y medibles.'}
        Sub1Text4={'Establecer la visión estratégica a largo plazo.'}
        Sub2Text1={'Análisis exhaustivo de procesos y sistemas.'}
        Sub2Text2={'Entrevistas con stakeholders clave.'}
        Sub2Text3={'Benchmarking de la industria y la competencia.'}
        Sub2Text4={'Desarrollo de un plan estratégico personalizado.'}
        Sub3Text1={'Informe de diagnóstico detallado.'}
        Sub3Text2={'Matriz FODA (SWOT) específica.'}
        Sub3Text3={'Plan estratégico con objetivos SMART.'}
        Sub3Text4={'Mapa de ruta con iniciativas prioritarias.'}
        Sub4Text1={'Claridad sobre la situación actual y futura.'}
        Sub4Text2={'Dirección estratégica definida y alineada.'}
        Sub4Text3={'Base sólida para la toma de decisiones.'}
        Sub4Text4={'Identificación de áreas de mejora inmediata.'}
      />

      <CardServicesO
        bg={false}
        icon={images.cohete}
        fase={'2'}
        title={'Implementación y Capacitación'}
        imagePortada={images.consultoriaServicios2}
        Sub1Text1={'Ejecutar el plan estratégico de forma efectiva.'}
        Sub1Text2={'Integrar nuevas metodologías y herramientas.'}
        Sub1Text3={'Desarrollar habilidades del equipo interno.'}
        Sub1Text4={'Lograr una adopción exitosa del cambio.'}
        Sub2Text1={'Gestión de proyectos y seguimiento de hitos.'}
        Sub2Text2={'Despliegue de soluciones tecnológicas.'}
        Sub2Text3={'Talleres de capacitación interactivos y personalizados.'}
        Sub2Text4={'Creación de manuales y guías de procedimiento.'}
        Sub3Text1={'Plan de implementación detallado.'}
        Sub3Text2={'Sistemas y herramientas configurados y operativos.'}
        Sub3Text3={'Materiales de capacitación y recursos didácticos.'}
        Sub3Text4={'Certificados de finalización de cursos.'}
        Sub4Text1={'Operaciones más eficientes y optimizadas.'}
        Sub4Text2={'Equipo mejor preparado y motivado.'}
        Sub4Text3={'Reducción de errores y retrabajos.'}
        Sub4Text4={'Incremento en la productividad general.'}
      />

      <CardServicesO
        bg={true}
        icon={images.hands}
        fase={'3'}
        title={'Acompañamiento y Mejora Continua'}
        imagePortada={images.consultoriaServicios3}
        Sub1Text1={'Asegurar la sostenibilidad de los cambios implementados.'}
        Sub1Text2={'Monitorear el rendimiento y ajustar estrategias.'}
        Sub1Text3={'Fomentar una cultura de mejora continua.'}
        Sub1Text4={'Proporcionar soporte experto y proactivo.'}
        Sub2Text1={'Reuniones de seguimiento periódicas.'}
        Sub2Text2={'Análisis de métricas de rendimiento (KPIs).'}
        Sub2Text3={'Identificación de nuevas oportunidades de optimización.'}
        Sub2Text4={'Asesoramiento estratégico constante.'}
        Sub3Text1={'Informes de progreso y rendimiento.'}
        Sub3Text2={'Sesiones de coaching y mentoría.'}
        Sub3Text3={'Planes de acción para optimizaciones futuras.'}
        Sub3Text4={'Acceso a nuestro equipo de expertos para consultas.'}
        Sub4Text1={'Crecimiento sostenido y ventajas competitivas.'}
        Sub4Text2={'Adaptabilidad y resiliencia ante cambios del mercado.'}
        Sub4Text3={'Innovación constante y evolución del negocio.'}
        Sub4Text4={'Relación de confianza a largo plazo con el cliente.'}
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

          <p className="uppercase tracking-widest text-sm text-green font-semibold">
            FASE 4
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            Estructura de Costos y Plazos
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
                    <th className="px-6 py-3 font-semibold">Servicio</th>
                    <th className="px-6 py-3 font-semibold">Plazo Estimado</th>
                    <th className="px-6 py-3 font-semibold">
                      Rango de Costo (USD)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-t border-gray-200 text-left">
                    <td className="px-6 py-3">
                      Fase 1: Diagnóstico y Estrategia
                    </td>
                    <td className="px-6 py-3">2-4 semanas</td>
                    <td className="px-6 py-3">$3,000 - $7,000</td>
                  </tr>
                  <tr className="border-t border-gray-200 text-left">
                    <td className="px-6 py-3">Fase 2: Implementación</td>
                    <td className="px-6 py-3">8-24 semanas</td>
                    <td className="px-6 py-3">Variable, por proyecto</td>
                  </tr>
                  <tr className="border-t border-gray-200 text-left">
                    <td className="px-6 py-3">Tarifa por hora del consultor</td>
                    <td className="px-6 py-3">Mensual-trimestral</td>
                    <td className="px-6 py-3">$40 - $100</td>
                  </tr>
                  <tr className="border-t border-gray-200 text-left">
                    <td className="px-6 py-3">
                      Costo de licencias y plataformas
                    </td>
                    <td className="px-6 py-3">Mensual-Trimestral</td>
                    <td className="px-6 py-3">Variable, por software</td>
                  </tr>
                  <tr className="border-t border-gray-200 text-left">
                    <td className="px-6 py-3">
                      Soporte y Mantenimiento (Opcional)
                    </td>
                    <td className="px-6 py-3">Continuo</td>
                    <td className="px-6 py-3">$400 - $1,500/mes</td>
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
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="max-w-xl text-base md:text-lg text-[#555555] mb-6 md:mb-8 px-4">
              Contáctanos hoy mismo para agendar una consulta y descubrir cómo
              nuestras soluciones personalizadas pueden impulsar tu éxito.
            </p>
            <NavLink to={'/contactUs'}>
              <button className="hover:bg-black bg-green text-white mt-4 md:mt-7 mb-2 md:mb-0.5 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
                Habla con un Experto
              </button>
            </NavLink>
          </div>
        </footer>
      </section>
    </Layout>
  );
};
