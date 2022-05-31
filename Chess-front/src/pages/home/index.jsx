import './index.css'

import React, { useContext } from 'react'

import Board from './components/board'

import { ViewContext} from '../../shared/components/context/view'

export default function HomePage(){

    const { handleGlowBoard, populateViewBoard } = useContext(ViewContext)

    return(
        <div className='main'>
            <Board/>
            <button 
                onClick={()=>{
                    handleGlowBoard()
                    populateViewBoard()
                }}
                className='newGame'
                children={
                    <h5>Novo jogo</h5>
                } 
            />
        </div>
    )
}