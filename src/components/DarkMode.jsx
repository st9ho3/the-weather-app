import React, { useState } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const DarkMode = () => {
  const [mode, setMode] = useState('dark');
  const changeMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      {mode === 'light' ? (
        <button style={{backgroundColor: '#0c182a' , color: 'white'}}  onClick={changeMode} className="modeButton">
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