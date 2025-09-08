interface PropsCardServices {
  bg?: boolean;
  icon: any;
  fase: string;
  title: any;
  imagePortada: any;
  Sub1Text1: string;
  Sub1Text2: string;
  Sub1Text3: string;
  Sub1Text4: string;
  Sub2Text1: string;
  Sub2Text2: string;
  Sub2Text3: string;
  Sub2Text4: string;
  Sub3Text1: string;
  Sub3Text2: string;
  Sub3Text3: string;
  Sub3Text4: string;
  Sub4Text1: string;
  Sub4Text2: string;
  Sub4Text3: string;
  Sub4Text4: string;
}

export const CardServicesO = (Props: PropsCardServices) => {
  return (
    <section
      className={`min-h-screen py-6 ${Props.bg ? 'bg-[#fafafb]' : 'bg-[#fff]'}`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Icono superior */}
        <div className="flex justify-center mb-4">
          <div className="rounded-full flex items-center justify-center">
            <img
              src={Props.icon}
              alt={Props.icon}
              className="h-14 w-14"
            />
          </div>
        </div>

        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
          {Props.title}
        </h2>

        {/* Imagen grande central */}
        <div className="mt-8">
          <div className="w-full h-48 md:h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={Props.imagePortada}
              alt={Props.imagePortada}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Cuadros inferiores */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {/* Objetivos */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-900">Objetivos</h3>
            <ul className="mt-3 text-gray-600 space-y-2 text-sm">
              <li>{Props.Sub1Text1}</li>
              <li>{Props.Sub1Text2}</li>
              <li>{Props.Sub1Text3}</li>
              <li>{Props.Sub1Text4}</li>
            </ul>
          </div>

          {/* Actividades */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-900">Actividades</h3>
            <ul className="mt-3 text-gray-600 space-y-2 text-sm">
              <li>{Props.Sub2Text1}</li>
              <li>{Props.Sub2Text2}</li>
              <li>{Props.Sub2Text3}</li>
              <li>{Props.Sub2Text4}</li>
            </ul>
          </div>

          {/* Entregables */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-900">Entregables</h3>
            <ul className="mt-3 text-gray-600 space-y-2 text-sm">
              <li>{Props.Sub3Text1}</li>
              <li>{Props.Sub3Text2}</li>
              <li>{Props.Sub3Text3}</li>
              <li>{Props.Sub3Text4}</li>
            </ul>
          </div>

          {/* Resultados */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-900">Resultados</h3>
            <ul className="mt-3 text-gray-600 space-y-2 text-sm">
              <li>{Props.Sub4Text1}</li>
              <li>{Props.Sub4Text2}</li>
              <li>{Props.Sub4Text3}</li>
              <li>{Props.Sub4Text4}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
