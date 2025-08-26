interface CardCrm {
  text1: string;
  text2: string;
  icon: any;
}
export const CardCrm = ({ text1, text2, icon }: CardCrm) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
      <div className="text-4xl text-green-700 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
        {text1}
      </h3>
      <p className="text-sm text-gray-600 text-center">{text2}</p>
    </div>
  );
};
