import IMGportada from '../assets/Images/PortadaCapacitacionIA.webp';
import NuestroPrograma from '../assets/Images/NuestroPrograma.webp';
import RecursosNecesarios from '../assets/Images/RecursosNecesarios.webp';
import Users from '../assets/Images/Users.svg';
import Bombillo from '../assets/Images/Bombillo.svg';
import Time from '../assets/Images/Time.svg';
import { Layout } from '../components/Layout/Layout';
import AccordionItem from '../components/AccordionItem/AccordionItem';

export const TrainingAI = () => {
  return (
    <article>
      <Layout>
        {/*Portada */}
        <section className="sm:grid-cols-2 sm:gap-15 sm:py-35 gap-10 grid grid-cols-1 bg-nv-bg p-16 items-center place-items-center">
          <div className="sm:col-span-1 sm:text-left text-center box-content">
            <h2 className="text-black text-5xl box-content mb-6 font-bold leading-tight">
              Propuesta de Capacitación Teórico-Práctica:
              <br />
              "IA para la Transformación Empresarial en Latinoamérica"
            </h2>
            <p className="text-grey text-balance text-xl box-content leading-relaxed">
              Abre las puertas al futuro empresarial de América Latina con
              nuestro curso. Aprende a liderar la transformación digital,
              superando desafíos locales e implementando IA para un crecimiento
              sostenible y exitoso.
            </p>
            <button className="bg-green hover:bg-black cursor-pointer text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px]">
              Inscríbete Ahora
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

        {/*Nuestro Programa de Capacitacion*/}
        <section className="flex flex-col justify-center items-center ">
          <h2 className="text-4xl font-bold pt-20 text-center  ">
            Nuestro Programa de Capacitación
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
                Justificación y Relevancia
              </h2>
              <p className="text-grey sm:text-left text-justify text-balance text-xl box-content leading-relaxed">
                La Inteligencia Artificial (IA) ha dejado de ser una promesa
                futurista para convertirse en una herramienta transformadora que
                redefine los modelos de negocio y la competitividad global. Para
                las empresas latinoamericanas, comprender y apropiarse de estas
                tendencias es crucial para superar los desafíos inherentes a la
                región (infraestructura, brecha digital, talento especializado)
                y capitalizar las oportunidades que la IA ofrece en términos de
                eficiencia, innovación y crecimiento. Esta propuesta busca dotar
                a los participantes de los conocimientos teóricos y las
                herramientas prácticas necesarias para diseñar e implementar
                estrategias de IA exitosas, inspirándose en casos de éxito
                regionales y globales, y abordando los desafíos específicos del
                contexto latinoamericano.
              </p>
            </div>
          </section>
        </section>

        {/*Detalles del programa */}
        <section className="bg-lpc-bg py-12 sm:py-10 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mx-11">
              <h2 className="text-black text-4xl box-content mb-6 font-bold leading-none text-balance">
                Detalles del Programa
              </h2>
            </div>

            {/* CARDS*/}
            <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-3 sm:gap-6 m-10">
              {/*CARD 1*/}
              <div className="border border-borderGrey bg-white shadow-md rounded-xl p-6 flex flex-col items-center  text-center transform hover:scale-102 transition-transform duration-300">
                <div className="m-5">
                  <img
                    src={Users}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-5 text-gray-800">
                  Público Objetivo
                </h3>
                <p className="text-grey text-sm mb-5 max-w-90 leading-relaxed text-center ">
                  Directivos, gerentes de área, líderes de equipo, personal
                  técnico y tomadores de decisiones de empresas latinoamericanas
                  interesados en la implementación y aprovechamiento de la
                  Inteligencia Artificial.
                </p>
              </div>
              {/*CARD 2*/}
              <div className="border border-borderGrey bg-white shadow-md rounded-xl p-6 flex flex-col items-center   text-center transform hover:scale-102 transition-transform duration-300">
                <div className="m-5">
                  <img
                    src={Bombillo}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-5 text-gray-800">
                  Modalidad
                </h3>
                <p className="text-grey text-sm mb-5 max-w-90 leading-relaxed text-center ">
                  Modalidad Híbrida: Clases virtuales en vivo con talleres
                  prácticos especializados para una experiencia completa.
                </p>
              </div>
              {/*CARD 3*/}
              <div className="border border-borderGrey bg-white shadow-md rounded-xl p-6 flex flex-col items-center  text-center transform hover:scale-102 transition-transform duration-300">
                <div className="m-5">
                  <img
                    src={Time}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-5 text-gray-800">
                  Duración
                </h3>
                <p className="text-grey text-sm mb-5 max-w-90 leading-relaxed text-center ">
                  12 horas totales (6 módulos de 2 horas cada uno).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*Modulos de la Capacitacion  */}
        <section className="flex flex-col justify-center items-center py-15 px-5">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Contenido Programático Detallado
          </h2>
          <div className="w-full max-w-4xl space-y-4">
            {/*Modulo 1*/}
            <AccordionItem
              title="Módulo  1 :  Contextualización de las Tendencias Tecnológicas de la 
            Inteligencia Artificial (2 horas) "
            >
              <ul>
                <li>Introducción a la IA</li>
                <li>
                  Principales Ramas de la IA: Machine Learning (ML), Deep
                  Learning (DL), Procesamiento de Lenguaje Natural (NLP), Visión
                  por Computadora (CV), Robótica e IA (breve introducción).{' '}
                </li>
                <li>
                  Tendencias Emergentes: IA Generativa (ChatGPT, Midjourney), IA
                  Explicable (XAI), Edge AI, IA para la Sostenibilidad.{' '}
                </li>
                <li>Impacto de la IA en la Industria 4.0 </li>
                <li>Ética y Responsabilidad en la IA. </li>
              </ul>
            </AccordionItem>

            {/*Modulo 2*/}
            <AccordionItem
              title="Módulo  2 : Desafíos Institucionales para las Empresas Latinoamericanas 
              en la Adopción de IA (2 horas)"
            >
              <ul>
                <li>Madurez Digital en Latinoamérica.</li>
                <li>Infraestructura Tecnológica.</li>
                <li>Disponibilidad de Datos.</li>
                <li>Talento Humano.</li>
                <li>Cultura Organizacional.</li>
                <li>Marcos Regulatorios y Legales.</li>
                <li>
                  Acceso a Financiamiento y Capital de Riesgo para Innovación en
                  IA.
                </li>
                <li>Ejercicio Práctico</li>
              </ul>
            </AccordionItem>

            {/*Modulo 3*/}
            <AccordionItem
              title="Módulo  3 :  Casos de Éxito de Apropiación e Implementación de IA en 
              Latinoamérica (2 horas) "
            >
              <ul>
                <li>
                  Casos Sectoriales: Finanzas, Retail y Consumo Masivo, Salud,
                  Agricultura, Manufactura.
                </li>
                <li>Factores Clave de Éxito</li>
                <li>Lecciones Aprendidas de Proyectos Fallidos. </li>
                <li>Taller.</li>
              </ul>
            </AccordionItem>

            {/*Modulo 4*/}
            <AccordionItem
              title="Módulo  4 :   Automatizaciones con IA: Fundamentos y Estrategias (2 
              horas) "
            >
              <ul>
                <li>
                  Concepto de Automatización Inteligente (Intelligent Automation
                  - IA).
                </li>
                <li>
                  Identificación de Procesos Candidatos para Automatización con
                  IA.
                </li>
                <li>Tecnologías Habilitadoras.</li>
                <li>Diseño de Soluciones de Automatización con IA.</li>
                <li>Métricas de Éxito en Automatización.</li>
                <li>Taller Práctico.</li>
              </ul>
            </AccordionItem>

            {/*Modulo 5*/}
            <AccordionItem
              title="Módulo  5 :  Herramientas y Plataformas para la Implementación de IA y 
              Automatizaciones (4 horas) "
            >
              <ul>
                <li>Plataformas de Machine Learning (MLOps).</li>
                <li>Herramientas de RPA.</li>
                <li>Plataformas No-Code/Low-Code para IA y Automatización.</li>
                <li>APIs de IA.</li>
                <li>Demostraciones en vivo de herramientas seleccionadas. </li>
                <li>Taller Práctico.</li>
              </ul>
            </AccordionItem>

            {/*Modulo 6*/}
            <AccordionItem
              title="Módulo  6 :   Desarrollo de una Propuesta de Proyecto de IA/Automatización 
              para su Empresa (2 horas) "
            >
              <ul>
                <li>Metodologías Ágiles para Proyectos de IA.</li>
                <li>Definición del Problema y Oportunidad.</li>
                <li>Identificación de Datos Necesarios y Fuentes. </li>
                <li>
                  Selección de la Tecnología y Enfoque de Implementación.{' '}
                </li>
                <li>Definición de Métricas de Éxito y KPI's. </li>
                <li>Análisis de Riesgos y Mitigación. </li>
                <li>Hoja de Ruta y Plan de Acción Preliminar. </li>
                <li>
                  Presentación y Discusión de Propuestas
                  Individuales/Grupales.{' '}
                </li>
                <li>Sesión de Preguntas y Respuestas Final. </li>
              </ul>
            </AccordionItem>
          </div>
        </section>

        {/*Recursos Necesarios */}
        <section className=" bg-lpc-bg p-10 items-center place-items-center">
          <h2 className="text-4xl font-bold  text-center">
            Recursos Necesarios
          </h2>
          <div className="sm:grid-cols-2 sm:gap-15 sm:py-20 gap-10 grid grid-cols-1">
            <div className="sm:col-span-1 sm:text-left text-center box-content">
              <h2 className="text-black text-4xl box-content mb-6 font-bold leading-tight">
                Todo lo que necesitas para tu éxito
              </h2>
              <p className="text-grey text-balance text-xl box-content leading-relaxed">
                Para aprovechar al máximo este programa, los participantes
                requerirán de algunos recursos básicos que complementarán su
                experiencia de aprendizaje y les permitirán aplicar los
                conocimientos de forma efectiva.
              </p>
              <br />
              <ul className="list-disc pl-5 space-y-2 sm:max-w-300 text-balance  text-grey  text-xl">
                <li>
                  <span className="font-semibold">
                    Plataforma de Videoconferencia:
                  </span>{' '}
                  Zoom, Google Meet o similar para sesiones virtuales.
                </li>
                <li>
                  <span className="font-semibold">
                    Herramientas Colaborativas:
                  </span>{' '}
                  Mural, Miro o similar para talleres.
                </li>
                <li>
                  <span className="font-semibold">
                    Acceso a Plataformas de IA/RPA:
                  </span>{' '}
                  Cuentas de prueba, versiones gratuitas o entornos de
                  laboratorio.
                </li>
                <li>
                  <span className="font-semibold">
                    Material de Apoyo Digital:
                  </span>{' '}
                  Presentaciones, lecturas, plantillas.
                </li>
                <li>
                  <span className="font-semibold">
                    Sala de Clases (opcional):
                  </span>{' '}
                  Para talleres presenciales.
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
      </Layout>
    </article>
  );
};
