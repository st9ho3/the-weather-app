import React, { useContext, useState } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { totalContext } from '../App';
import style from '../constants/DarkStyle';

const DarkMode = () => {

  const {mode, changeMode} = useContext(totalContext)

  return (
    <div>
      {!mode ? (
        <button style={mode ? style : {backgroundColor: '#0c182a' , color: 'white'}}  onClick={changeMode} className="modeButton">
          <FaRegMoon className='buttonIcon' />
          Dark
        </button>
      ) : (
        <button onClick={changeMode} className="modeButton">
          <MdOutlineWbSunny className='buttonIcon' />
          Light
        </button>
      )}
    </div>
  );
};

export default DarkMode;