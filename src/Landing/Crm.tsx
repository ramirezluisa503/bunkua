import { Layout } from '../components/Layout/Layout';
import { IconsCrm } from '../components/IconsCrm/IconsCrm';
import { ListCrm } from '../components/ListCrm/ListCrm';
import { ImgCrm } from '../components/ImgCrm/ImgCrm';
import { FasesCrm } from '../components/FasesCrm/FasesCrm';
import { CardCrm } from '../components/CardCrm/CardCrm';
import { images } from '../assets/images/index';
import { CheckList } from '../components/CheckList/CheckList';
import { NavLink } from 'react-router-dom';

export const Crm = () => {
  return (
    <Layout>
      <header className="min-h-[200px] bg-[#faf4e1]">
        <div className="container mx-auto py-4 md:py-8 px-4">
          <div className="flex flex-col lg:flex-row justify-around items-start mb-6 md:mb-10 mt-6 md:mt-12 gap-8">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 mt-4">
                CRM y MRP
                <br />
                Empresarial: Impulsa
                <br />
                tu Crecimiento
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed max-w-lg">
                Centraliza tus relaciones con clientes, automatiza{' '}
                <br className="hidden md:block" /> ventas y optimiza cada
                interacción para disparar tu productividad y rentabilidad.
              </p>

              <button className="hover:bg-black bg-green text-white mt-4 md:mt-7 mb-4 md:mb-8 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
                Empieza a utilizar ahora
              </button>
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
                  text="Ventas"
                />

                <IconsCrm
                  image={images.crm}
                  text="CRM"
                />

                <IconsCrm
                  image={images.facturacion}
                  text="Facturación"
                />

                <IconsCrm
                  image={images.contacto}
                  text="Contactos"
                />

                <IconsCrm
                  image={images.inventario}
                  text="Inventario"
                  style="col-start-2 md:col-start-2"
                />

                <IconsCrm
                  image={images.mrp}
                  text="MRP"
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
              ¿Qué es un CRM y por qué lo necesita?
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Un Sistema de Gestión de Relaciones con el Cliente (CRM) es la
              herramienta que te permite organizar, analizar y mejorar cada
              interacción con tus clientes y potenciales clientes. En pocas
              palabras, es tu aliado para construir relaciones comerciales
              sólidas y, a su vez, impulsar tus ventas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-end">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-8">
                Beneficios
              </h2>

              <div className="space-y-4">
                <ListCrm text="Gestión Centralizada de Datos" />
                <ListCrm text="Mejora de la Relación con el Cliente" />
                <ListCrm text="Automatización de Procesos" />
                <ListCrm text="Análisis de Datos" />
                <ListCrm text="Aumento de Ventas y Retención" />
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
              Módulos Clave de un CRM
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Nuestra CRM integra módulos esenciales para una gestión
              empresarial completa y eficiente.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 mb-12 md:mb-16">
            <ImgCrm
              text="Ventas"
              image={images.ventas}
            />

            <ImgCrm
              text="CRM"
              image={images.crm}
            />

            <ImgCrm
              text="Facturación"
              image={images.facturacion}
            />

            <ImgCrm
              text="Contacto"
              image={images.contacto}
            />

            <ImgCrm
              text="Inventario"
              image={images.inventario}
            />

            <ImgCrm
              text="MRP"
              image={images.mrp}
            />
          </div>

          <div className="bg-gray-100 rounded-2xl p-4 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Gestión de Leads y Oportunidades
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Administre el ciclo de vida de sus prospectos desde el primer
              contacto hasta la conversión. El CRM permite capturar leads,
              nutrirlos y convertirlos en oportunidades, siguiendo un flujo de
              ventas claro:
            </p>
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-8 md:pt-15">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Fases del Embudo de Ventas
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-8 mb-12 md:mb-22">
            <FasesCrm
              text1="Nuevo Lead"
              text2="Identifica y califica contactos potenciales."
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
              text1="Cotización"
              text2="Prepara y envía propuestas personalizadas."
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
              text1="Casi Ganado"
              text2="Negocia y cierra acuerdos con seguimiento."
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
              text1="Ganado"
              text2="Registra la venta y gestiona el post-cierre."
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
              Módulo de Ventas: Cierra Más Negocios
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Gestione cada etapa del ciclo de ventas, desde la creación de
              ofertas hasta la aceptación del cliente.
            </p>
          </div>

          <div className="p-4 md:p-8 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
              <CardCrm
                text1="Crear Cotizaciones"
                text2="Genere propuestas detalladas con productos y precios."
                icon={'📝'}
              />

              <CardCrm
                text1="Gestionar Órdenes de Venta"
                text2="Convierta cotizaciones en pedidos firmes."
                icon={'🛒'}
              />

              <CardCrm
                text1="Administrar Contratos"
                text2="Cree y siga los contratos con sus clientes."
                icon={'✍️'}
              />

              <CardCrm
                text1="Automatización de Email"
                text2="Envía correos personalizados en cada etapa de venta, ahorrando
                  tiempo y esfuerzo."
                icon={'📧'}
              />

              <CardCrm
                text1="Aceptación Online"
                text2="Permite a tus clientes aceptar propuestas y contratos
                  directamente desde la web."
                icon={'💻'}
              />

              <CardCrm
                text1="Análisis de Ventas"
                text2="Obtén informes detallados para identificar tendencias y
                  optimizar estrategias comerciales."
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
              Módulo de Facturación: Control Financiero Simplificado
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Automatice la facturación y el seguimiento de pagos para una
              gestión financiera sin <br className="hidden md:block" />{' '}
              esfuerzo.
            </p>
          </div>

          <div className="p-4 md:p-8 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
              <CardCrm
                text1="Facturación Simplificada"
                text2="Crea facturas profesionales de forma rápida, integrando datos de ventas automáticamente."
                image={images.img}
              />

              <CardCrm
                text1="Seguimiento de Pagos"
                text2="Monitorea el estado de tus pagos, con recordatorios automáticos para deudas pendientes."
                image={images.coins}
              />

              <CardCrm
                text1="Control de Gastos"
                text2="Registra y clasifica todos tus gastos operativos para una gestión financiera precisa."
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
              Módulo de Contactos: Su Base de Datos Centralizada
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              El corazón de su CRM, donde toda la información de clientes y
              prospectos reside de forma segura y accesible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mt-8 md:mt-12">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 text-sm md:text-base">
                <p>
                  El módulo de contactos es la fuente de verdad para todos los
                  datos de sus clientes.
                </p>
                <p>
                  <strong>Base de Datos Unificada:</strong> Almacena perfiles de
                  clientes, historial de interacciones, notas y documentos.
                </p>
                <p>
                  <strong>Integración Multi-Módulo:</strong> Es utilizado por
                  otros módulos (Ventas, Marketing, Soporte) para rellenar datos
                  automáticamente y garantizar la consistencia.
                </p>
                <p>
                  <strong>Visión 360 del Cliente:</strong> Ofrece una vista
                  completa de cada cliente, permitiendo un servicio
                  personalizado y eficiente.
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
                Beneficios Clave:
              </h2>

              <div className="space-y-4">
                <CheckList text="Acceso rápido a la información completa de cada cliente." />
                <CheckList text="Historial de interacciones unificado para una comunicación consistente." />
                <CheckList text="Segmentación avanzada para campañas de marketing dirigidas." />
                <CheckList text="Mejora la colaboración entre equipos de ventas y soporte." />
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-8 md:pt-15 mt-6 md:mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Módulo de Inventario: Control de Stock Inteligente
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Gestiona tu inventario de manera eficiente con control en tiempo
              real y <br className="hidden md:block" /> integración completa.
            </p>
          </div>

          <div className="p-4 md:p-8 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-7xl mx-auto">
              <CardCrm
                text1="Control de Stock en Tiempo Real"
                text2="Monitoriza tus niveles de inventario, entradas y salidas, evitando roturas o excesos."
                image={images.box}
              />

              <CardCrm
                text1="Integración con Ventas y MRP"
                text2="Conecta automáticamente tus ventas con el inventario y planifica la producción según la demanda real."
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

      <article className="min-h-screen pt-8 md:pt-15 bg-[#fafafb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Módulo MRP: Planificación de Recursos de Fabricación
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Optimice su producción asegurando la disponibilidad de materiales
              y componentes <br className="hidden md:block" /> necesarios.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <p className="text-gray-800 mb-4 md:mb-8 text-sm md:text-base">
                <strong>
                  El módulo de MRP es fundamental para empresas de fabricación,
                  permitiendo:
                </strong>
              </p>

              <div className="space-y-4">
                <ListCrm text="Planificación de Materiales" />
                <ListCrm text="Gestión de Órdenes de Fabricación" />
                <ListCrm text="Integración con inventario" />
                <ListCrm text="Optimización de Recursos" />
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <img
                src={images.moduloMrp}
                alt="moduloMrp"
                className="w-full h-auto rounded shadow-2xl"
              />
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-15 px-4">
            <img
              src={images.capturaMrp}
              alt="capturaVentas"
              className="w-full max-w-6xl md:w-290 rounded-lg"
            />
          </div>
        </div>
      </article>

      <footer>
        <div className="flex flex-col items-center justify-center h-auto md:h-120 bg-[#faf4e1] p-4 md:p-8 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="max-w-xl text-base md:text-lg text-[#555555] mb-6 md:mb-8 px-4">
            Descubre cómo CRM Empresarial puede centralizar tus operaciones,
            potenciar tus ventas y escalar tu crecimiento.
          </p>
          <NavLink to={'/contactUs'}>
            <button className="hover:bg-black bg-green text-white mt-4 md:mt-7 mb-2 md:mb-0.5 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
              Solicita una prueba ahora
            </button>
          </NavLink>
        </div>
      </footer>
    </Layout>
  );
};
