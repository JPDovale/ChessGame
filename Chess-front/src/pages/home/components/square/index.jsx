import './index.css'

import React, { useContext } from 'react'

import { ViewContext } from '../../../../shared/components/context/view'

export default function Square(props){

    const id = props.id
    const piece = props.piece

    const { selectSquare } = useContext(ViewContext)

    return(
        <div id={id} className={`${piece} square`}>
            <button 
                className="selectSquare"
                onClick={()=>{
                    selectSquare(id)
                }}
            />
        </div>
    )
}