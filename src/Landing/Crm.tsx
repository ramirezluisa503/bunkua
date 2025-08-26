import { Layout } from '../components/Layout/Layout';
import { IconsCrm } from '../components/IconsCrm/IconsCrm';
import { ListCrm } from '../components/ListCrm/ListCrm';
import { ImgCrm } from '../components/ImgCrm/ImgCrm';
import { FasesCrm } from '../components/FasesCrm/FasesCrm';
import hascunde from '../assets/images/hascunde-logo.webp';
import bunkua from '../assets/images/bunkua.webp';
import ventas from '../assets/images/iconVentas.webp';
import crm from '../assets/images/iconCRM.webp';
import facturación from '../assets/images/iconFacturacion.webp';
import contacto from '../assets/images/iconContacto.webp';
import mrp from '../assets/images/iconMRP.webp';
import inventario from '../assets/images/iconInventario.webp';
import IaCrm from '../assets/images/ImgCRM.webp';
import capturaCrm from '../assets/images/CapturaCRM.webp';
import flecha from '../assets/images/FlechaDerechaGris.svg';
import user from '../assets/images/user.svg';
import paper from '../assets/images/Paper.svg';
import hands from '../assets/images/Hands.svg';
import check from '../assets/images/Check.svg';
import { CardCrm } from '../components/CardCrm/CardCrm';

export const Crm = () => {
  return (
    <Layout>
      <header className="min-h-[200px] bg-[#faf4e1]">
        <div className="container mx-auto py-8">
          {/* Header */}
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

              <div className="text-gray-600">Que me mande al link del CRM</div>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-2xl font-bold text-gray-800 justify-items-center ">
                    <img
                      src={hascunde}
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
                  image={ventas}
                  text="Ventas"
                />

                {/* CRM */}
                <IconsCrm
                  image={crm}
                  text="CRM"
                />

                {/* Facturación */}
                <IconsCrm
                  image={facturación}
                  text="Facturación"
                />

                {/* Contactos */}
                <IconsCrm
                  image={contacto}
                  text="Contactos"
                />

                {/* Inventarios - posicionado en la columna 2 */}
                <IconsCrm
                  image={inventario}
                  text="Inventario"
                  style="md:col-start-2"
                />

                {/* MRP - posicionado en la columna 3 */}
                <IconsCrm
                  image={mrp}
                  text="MRP"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <article className="min-h-screen pt-15 bg-[#fafafb]">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
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
            {/* Benefits Section */}
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
                src={IaCrm}
                alt="IaCrm"
                className="w-full h-100 rounded shadow-2xl"
              />
            </div>
          </div>
        </div>
      </article>

      <article className="min-h-[600px] bg-white pt-15">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Módulos Clave de un CRM
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestra CRM integra módulos esenciales para una gestión
              empresarial completa y eficiente.
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {/* Ventas */}
            <ImgCrm
              text="Ventas"
              image={ventas}
            />

            <ImgCrm
              text="CRM"
              image={crm}
            />

            <ImgCrm
              text="Facturación"
              image={facturación}
            />

            <ImgCrm
              text="Contacto"
              image={contacto}
            />

            <ImgCrm
              text="Inventario"
              image={inventario}
            />

            <ImgCrm
              text="MRP"
              image={mrp}
            />
          </div>

          {/* Bottom Section */}
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
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Fases del Embudo de Ventas
            </h1>
          </div>

          {/* Sales Funnel Steps */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 mb-22">
            {/* Nuevo Lead */}
            <FasesCrm
              text1="Nuevo Lead"
              text2="Identifica y califica contactos potenciales."
              image={user}
            />

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <img
                src={flecha}
                alt="flecha"
                className="w-15 h-15"
              />
            </div>

            {/* Cotización */}
            <FasesCrm
              text1="Cotización"
              text2="Prepara y envía propuestas personalizadas."
              image={paper}
            />

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <img
                src={flecha}
                alt="flecha"
                className="w-15 h-15"
              />
            </div>

            <FasesCrm
              text1="Casi Ganado"
              text2="Negocia y cierra acuerdos con seguimiento."
              image={hands}
            />

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <img
                src={flecha}
                alt="flecha"
                className="w-15 h-15"
              />
            </div>

            <FasesCrm
              text1="Ganado"
              text2="Registra la venta y gestiona el post-cierre."
              image={check}
            />
          </div>

          <div className="flex justify-evenly">
            <img
              src={capturaCrm}
              alt="Interfaz CRM mostrando las fases del embudo de ventas"
              className="w-200 h-auto rounded-lg"
            />

            <div className="flex justify-end items-center">
              <img
                src={hascunde}
                alt="Hascunde"
                className="h-40 w-auto mr-10"
              />
              <img
                src={bunkua}
                alt="Logo Bunkua"
                className="h-40 w-auto"
              />
            </div>
          </div>
        </div>
      </article>

      <article className="min-h-screen pt-15 bg-[#fafafb]">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Módulo de Ventas: Cierra Más Negocios
            </h1>
            <p className="text-lg md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Gestione cada etapa del ciclo de ventas, desde la creación de
              ofertas hasta la aceptación del cliente.
            </p>
          </div>

          <div className="bg-gray-100 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Tarjeta 1 */}
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
        </div>
      </article>
    </Layout>
  );
};
