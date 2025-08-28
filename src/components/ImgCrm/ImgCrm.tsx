interface ImgCrm {
  text: string;
  image: any;
}

export const ImgCrm = ({ text, image }: ImgCrm) => {
  return (
    <div className="flex flex-col items-center text-center transform hover:scale-110 transition-all duration-300">
      <img
        src={image}
        alt={text}
      />
      <h3 className="text-gray-800 font-medium">{text}</h3>
    </div>
  );
};
