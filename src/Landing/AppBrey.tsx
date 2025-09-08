import { Layout } from '../components/Layout/Layout';
// Asegúrate de que el nombre del componente coincida con el archivo, por ejemplo, AutoCarousel
import AutoCarousel from '../components/Carousel/Carousel'; 
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

export const AppBrey = () => {

  // Arreglo con la información de las imágenes
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
    <article>
      <Layout>
        <div className=" sm:grid sm:grid-cols-2 sm:gap-10 flex flex-col p-2 bg-gray-50 ">
          
          {/* Portada */}
          <section className="gap-10 grid grid-cols-1 bg-white p-16 items-center place-items-center">
            <div className="sm:text-left text-center box-content">
              <h2 className="sm:text-4xl text-3xl text-black  box-content mb-6 font-bold leading-tight">
                APP BREY: La Solución Definitiva para el Levantamiento de Activos en Campo
              </h2>
              <p className="text-grey text-balance text-xl box-content leading-relaxed">
                Optimice la recopilación y gestión de datos de sus activos en campo con nuestra aplicación móvil robusta y fácil de usar. Trabaje sin conexión, capture datos con voz y asegure la integridad de su información.
              </p>
              <button className="bg-green hover:bg-black cursor-pointer text-white mt-7 mb-0.5 w-fit h-9 px-3 rounded-[6px]">
                Agendar una demostración
              </button>
            </div>
          </section>
          
          <section className='flex justify-center items-center'>
            <AutoCarousel slides={imagesData} interval={8000} />
          </section>
          
        </div>
      </Layout>
    </article>
  );
};