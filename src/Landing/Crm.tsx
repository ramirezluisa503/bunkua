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
        <div className="container mx-auto py-8">
          <div className="flex justify-around items-start mb-10 mt-12">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 mt-4">
                CRM y MRP
                <br />
                Empresarial: Impulsa
                <br />
                tu Crecimiento
              </h1>

              <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-lg">
                Centraliza tus relaciones con clientes, automatiza <br /> ventas
                y optimiza cada interacción para disparar tu productividad y
                rentabilidad.
              </p>

              <button className="hover:bg-black bg-green text-white mt-7 mb-8 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
                Empieza a utilizar ahora
              </button>
            </div>

            <div className="flex-shrink-0">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-2xl font-bold text-gray-800 justify-items-center ">
                    <img
                      src={images.hascunde}
                      alt="hascunde"
                      width={85}
                      className={'content-center'}
                    />
                    Hascunde Bunkua
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Exponential organizations CRM ERP
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl ml-auto">
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
                  style="md:col-start-2"
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

      <article className="min-h-screen pt-15 bg-[#fafafb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ¿Qué es un CRM y por qué lo necesita?
            </h1>
            <p className="text-lg md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Un Sistema de Gestión de Relaciones con el Cliente (CRM) es la
              herramienta que te permite organizar, analizar y mejorar cada
              interacción con tus clientes y potenciales clientes. En pocas
              palabras, es tu aliado para construir relaciones comerciales
              sólidas y, a su vez, impulsar tus ventas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
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

            <div className="relative">
              <img
                src={images.IaCrm}
                alt="IaCrm"
                className="w-full h-100 rounded shadow-2xl"
              />
            </div>
          </div>
        </div>
      </article>

      <article className="min-h-[600px] bg-white pt-15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Módulos Clave de un CRM
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestra CRM integra módulos esenciales para una gestión
              empresarial completa y eficiente.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
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

          <div className="bg-gray-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Gestión de Leads y Oportunidades
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Administre el ciclo de vida de sus prospectos desde el primer
              contacto hasta la conversión. El CRM permite capturar leads,
              nutrirlos y convertirlos en oportunidades, siguiendo un flujo de
              ventas claro:
            </p>
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Fases del Embudo de Ventas
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 mb-22">
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

          <div className="flex justify-evenly">
            <img
              src={images.capturaCrm}
              alt="Interfaz CRM mostrando las fases del embudo de ventas"
              className="w-200 h-auto rounded-lg"
            />

            <div className="flex justify-end items-center">
              <img
                src={images.hascunde}
                alt="Hascunde"
                className="h-40 w-auto mr-10"
              />
              <img
                src={images.bunkua}
                alt="Logo Bunkua"
                className="h-40 w-auto"
              />
            </div>
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-15 bg-[#fafafb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Módulo de Ventas: Cierra Más Negocios
            </h1>
            <p className="text-lg md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Gestione cada etapa del ciclo de ventas, desde la creación de
              ofertas hasta la aceptación del cliente.
            </p>
          </div>

          <div className="p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
          <div className="flex justify-center">
            <img
              src={images.capturaVentas}
              alt="capturaVentas"
              className="w-290 rounded-lg"
            />
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-15 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Módulo de Facturación: Control Financiero Simplificado
            </h1>
            <p className="text-lg md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Automatice la facturación y el seguimiento de pagos para una
              gestión financiera sin <br /> esfuerzo.
            </p>
          </div>

          <div className="p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
          <div className="flex justify-center">
            <img
              src={images.capturaFacturacion}
              alt="capturaFacturacion"
              className="w-290 rounded-lg"
            />
          </div>

          <div className="flex justify-center mt-15">
            <img
              src={images.capturaFacturacion2}
              alt="capturaFacturacion"
              className="w-290 rounded-lg"
            />
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Módulo de Contactos: Su Base de Datos Centralizada
            </h1>
            <p className="text-lg md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              El corazón de su CRM, donde toda la información de clientes y
              prospectos reside de forma segura y accesible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-8">
              {/* <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Beneficios
              </h2> */}

              <div className="space-y-4">
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

            <div className="relative">
              <img
                src={images.moduloContacto}
                alt="IaCrm"
                className="w-full h-100 rounded shadow-2xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-22">
            <div className="relative">
              <img
                src={images.capturaContacto}
                alt="capturaContacto"
                className="w-full rounded shadow-2xl"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">
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

      <article className="min-h-screen pt-15 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Módulo de Facturación: Control Financiero Simplificado
            </h1>
            <p className="text-lg md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Automatice la facturación y el seguimiento de pagos para una
              gestión financiera sin <br /> esfuerzo.
            </p>
          </div>

          <div className="p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
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

          <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-6 max-w-6xl">
              <img
                src={images.capturaInventario1}
                alt="capturaContacto"
                className="rounded-xl shadow-lg h-40 w-full"
              />

              <img
                src={images.capturaInventario2}
                alt="capturaContacto"
                className="rounded-xl shadow-lg h-40 w-full"
              />

              <img
                src={images.capturaInventario3}
                alt="capturaContacto"
                className="rounded-xl shadow-lg h-40 w-full"
              />

              <img
                src={images.capturaInventario4}
                alt="capturaContacto"
                className="rounded-xl shadow-lg h-40 w-full"
              />
            </div>
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-15 bg-[#fafafb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Módulo MRP: Planificación de Recursos de Fabricación
            </h1>
            <p className="text-lg md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Optimice su producción asegurando la disponibilidad de materiales
              y componentes <br /> necesarios.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-gray-800 mb-8">
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

            <div className="relative">
              <img
                src={images.moduloMrp}
                alt="moduloMrp"
                className="w-full h-100 rounded shadow-2xl"
              />
            </div>
          </div>
          <div className="flex justify-center mt-15">
            <img
              src={images.capturaMrp}
              alt="capturaVentas"
              className="w-290 rounded-lg"
            />
          </div>
        </div>
      </article>
      <footer>
        <div className="flex flex-col items-center justify-center h-120 bg-[#faf4e1] p-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="max-w-xl text-lg text-[#555555] mb-8">
            Descubre cómo CRM Empresarial puede centralizar tus operaciones,
            potenciar tus ventas y escalar tu crecimiento.
          </p>
          <NavLink to={'/contactUs'}>
            <button className="hover:bg-black bg-green text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px] cursor-pointer">
              Solicita una prueba ahora
            </button>
          </NavLink>
        </div>
      </footer>
    </Layout>
  );
};
