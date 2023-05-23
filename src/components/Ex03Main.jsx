import React, { useContext } from 'react'
import {ThemeContext} from '../context/Ex03ThemeContext'

const Ex03Main = () => {

  const {setIsDark, isDark} = useContext(ThemeContext)
  const toggleTheme = ()=>{
    setIsDark(!isDark)
  }
  return (
    <div style={{
      backgroundColor : isDark ? "black" : "white",
      color : isDark ? "white" : "black"
    }}>
        Ex03Main
        <br/>
        <button onClick={toggleTheme}>다크모드</button>
    </div>
  )
}

export default Ex03Main