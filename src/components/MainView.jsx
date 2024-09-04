import React, { useState, createContext } from 'react';

const DetailsContext = createContext(null);
export { DetailsContext };

const MainView = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [units, setUnits] = useState('C');

  const openMenu = () => {
    setToggle((prev) => !prev);
  };

  const pickTemp = (t) => {
    setUnits(t);
    setToggle(false);
  };

  return (
    <div className="mainview">
      <DetailsContext.Provider value={{ toggle, units, openMenu, pickTemp }}>
        {children}
      </DetailsContext.Provider>
    </div>
  );
};

export default MainView;