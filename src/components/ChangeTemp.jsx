import React, { useContext } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";
import { DetailsContext } from './MainView';

const ChangeTemp = () => {
  const { openMenu, units, pickTemp, toggle } = useContext(DetailsContext);

  return (
    <div className='changeTemp'>
      {units === 'C' ? <RiCelsiusFill className='tempIcon' /> : <RiFahrenheitFill className='tempIcon' />}
      {toggle ? <MdKeyboardArrowDown className='tempArrow' onClick={openMenu} /> : <MdKeyboardArrowLeft className='tempArrow' onClick={openMenu} />}
      {toggle && <div className="tempBoard">
        {units === 'C' ? <RiFahrenheitFill onClick={() => pickTemp('F')} className='tempIcon' /> : <RiCelsiusFill onClick={() => pickTemp('C')} className='tempIcon' />}
      </div>}
    </div>
  );
};

export default ChangeTemp;