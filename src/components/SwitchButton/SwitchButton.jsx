import { useState } from 'react';

export default function SwitchButton() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleLanguage = () => {
    setIsChecked(!isChecked);
    // Aquí puedes agregar la lógica para cambiar el idioma
    // const newLang = !isChecked ? 'en' : 'es';
    // i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center justify-center h-8 text-center">
      <label className="inline-block relative m-0">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleLanguage}
          className="cursor-pointer w-[99%] h-[29px] opacity-0 absolute top-0 left-0 z-10 m-0"
        />
        <div
          className={`
            relative m-0 w-[140px] h-[30px] bg-[#7c9e85] rounded-[26px] overflow-hidden transition-all duration-300 ease-in-out block
            before:content-[attr(data-on)] before:absolute before:text-sm before:font-semibold before:top-1 before:right-5 before:text-white
            after:content-[attr(data-off)] after:w-[70px] after:h-[25px] after:bg-white after:rounded-[26px] after:absolute after:text-sm after:flex after:justify-center after:items-center after:left-[3px] after:top-[2px] after:text-center after:transition-all after:duration-300 after:ease-in-out after:shadow-[0px_0px_6px_-2px_#111] after:py-[3px] after:px-0 after:text-[#222] after:font-semibold
            ${
              isChecked
                ? 'after:content-[attr(data-off)] after:left-[68px] before:content-[attr(data-off)] before:right-auto before:left-5'
                : ''
            }
          `}
          data-on={isChecked ? 'Esp' : 'Eng'}
          data-off={isChecked ? 'Eng' : 'Esp'}
        />
      </label>
    </div>
  );
}
