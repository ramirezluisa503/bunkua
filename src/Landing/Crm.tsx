import { Layout } from '../components/Layout/Layout';
import { IconsCrm } from '../components/IconsCrm/IconsCrm';
import hascunde from '../assets/images/hascunde-logo.webp';
import ventas from '../assets/images/iconVentas.webp';
import crm from '../assets/images/iconCRM.webp';
import facturación from '../assets/images/iconFacturacion.webp';
import contacto from '../assets/images/iconContacto.webp';
import mrp from '../assets/images/iconMRP.webp';
import inventario from '../assets/images/iconInventario.webp';

export const Crm = () => {
  return (
    <Layout>
      <div className="min-h-[200px] bg-[#faf4e1]">
        <div className="container mx-auto py-8">
          {/* Header */}
          <div className="flex justify-around items-start mb-10">
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

                {/* Segunda fila - 2 elementos centrados en las columnas 2 y 3 */}
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
      </div>
    </Layout>
  );
};
