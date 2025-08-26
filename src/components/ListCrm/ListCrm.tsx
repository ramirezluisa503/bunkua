interface ListCrm {
  text: string;
}

export const ListCrm = ({ text }: ListCrm) => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-3 border border-blue-200 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center space-x-3 justify-center">
        <span className="text-gray-700 font-medium text-base">{text}</span>
      </div>
    </div>
  );
};
