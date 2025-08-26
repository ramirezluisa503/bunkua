interface IconsProps {
  image: any;
  text: string;
  style?: string;
}

export const IconsCrm = ({ image, text, style }: IconsProps) => {
  return (
    <div
      className={`bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 ${style || ''}`}
    >
      <img
        src={image}
        alt={text}
        className="w-18 h-18 mx-auto mb-2"
      />
      <div className="text-gray-800 font-semibold text-center text-xs">
        {text}
      </div>
    </div>
  );
};
