import React, { useContext } from 'react'
import { ColorContext } from '../context/Ex02ColorContext'

const Ex02ColorList = () => {
    let color = ['red', 'orange', 'yellow', 'green', 'blue']
    const { setChoiceColor} = useContext(ColorContext)

    /*
    context 안에 있는 데이터가 필요하다면? useContext() 활용!
    */
  return (
    <div style={{display : 'flex'}}>
        {color.map(item =>
            <div
            onClick ={(e)=>setChoiceColor(e.target.style.backgroundColor)}
             key={item} style={{
                width : '100px',
                height : '100px',
                backgroundColor : `${item}`
            }}></div>
        )}
    
    </div>
  )
}

export default Ex02ColorList