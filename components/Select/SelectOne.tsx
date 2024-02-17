import React, { useEffect, useState } from 'react';
import Style from "@/styles/SelectOne.module.scss"

interface SelectOneProps {
  checkboxRef: React.RefObject<HTMLLabelElement>;
}

const SelectOne: React.FC<SelectOneProps> = ({ checkboxRef }) => { 
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (checkboxRef.current && !checkboxRef.current.contains(event.target as Node)) {
        setIsChecked(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [checkboxRef]);
  
  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <section className={Style.SectionSelect}>
      <h1 className={Style.Titulo}>Seção Select</h1>
      <div className={Style.Container}>



        <div className={Style.SelectCustom}>
          <label className={Style.buttonView + " " +  (isChecked ? Style.selected : "") } ref={checkboxRef} >
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            <span>Selecione {isChecked ? "Marcado": "Desmarcado"}</span>
          </label>
          <div className={Style.Options + " " +  (isChecked ? Style.Open : "") }>
            <input type="text" name="" id="" />
          </div>
        </div>
        <p>ttestenandao dasjkdkadasd sadlasdlasl</p>

      </div>
    </section>
  );
};

export default SelectOne;