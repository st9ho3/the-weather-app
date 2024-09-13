import React, { useContext } from 'react'
import style from '../constants/DarkStyle'
import { totalContext } from '../App'

const Header = ({children}) => {
  const {mode} = useContext(totalContext)
  return (
    <div className='header' style={mode ? style : null}>
      {children}
    </div>
  )
}

export default Header
