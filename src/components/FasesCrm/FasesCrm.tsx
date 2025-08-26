interface FasesCrm {
  text1: string;
  text2: string;
  image: any;
}

export const FasesCrm = ({ text1, text2, image }: FasesCrm) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <img
          src={image}
          alt={text1}
          className="w-12 h-12"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{text1}</h3>
      <p className="text-gray-600 text-sm">{text2}</p>
    </div>
  );
};
