import React, { useState } from 'react'
import { MdKeyboardArrowDown,MdKeyboardArrowLeft } from "react-icons/md";
import { RiCelsiusFill,RiFahrenheitFill } from "react-icons/ri";

const ChangeTemp = () => {
    const [toggle,  setToggle] = useState(false)
    const [units, setUnits] = useState('C')

    const openMenu = () => {
        setToggle(prev => !prev)
    }
    const pickTemp = (t) => {
        setUnits(t)
        setToggle(false)
    }
  return (
    <div className='changeTemp'>
        {units === 'C' ? <RiCelsiusFill className='tempIcon' /> : <RiFahrenheitFill className='tempIcon' />}
        {toggle ? <MdKeyboardArrowDown className='tempArrow' onClick={openMenu} /> : <MdKeyboardArrowLeft className='tempArrow' onClick={openMenu}/>}
        {toggle && <div className="tempBoard">
            {units === 'C' ? <RiFahrenheitFill onClick={()=> pickTemp('F')} className='tempIcon' /> : <RiCelsiusFill onClick={()=> pickTemp('C')} className='tempIcon' />}
            </div>}
         
    </div>
  )
}

export default ChangeTemp
