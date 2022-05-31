import './index.css'

import React, { useContext } from 'react'

import { ViewContext } from '../../../../shared/components/context/view'
import { GameContext } from '../../../../shared/components/context/game'


export default function Square(props){
    const { selectSquare } = useContext(ViewContext)
    const {handleMove} = useContext(GameContext)

    const id = props.id
    
    return(
        <button 
            id={id} 
            className={`square selectSquare`}
            onClick={()=>{
                handleMove(id)
                selectSquare(id)
            }} 
            children={ 
                <div 
                    className='moveFor hidden'  
                    onClick={()=>console.log(`ola ${id}`)}
                >    
                    <div className='move'></div>
                </div> 
            }
        />
    )
}