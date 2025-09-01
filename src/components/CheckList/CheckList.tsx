import { images } from '../../assets/images';

interface List {
  text: string;
}

export const CheckList = ({ text }: List) => {
  return (
    <div className="flex">
      <img
        src={images.check}
        alt="check"
        className="w-6 mr-3 mb-2"
      />
      <p>{text}</p>
    </div>
  );
};
