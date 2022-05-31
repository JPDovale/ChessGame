import React, { createContext } from "react";

export const ViewContext = createContext()

export function ViewProvider(props){

    function selectSquare(id){
        const selectSquare = document.getElementById(id).classList

        if(selectSquare.contains('selected')){

            selectSquare.remove('selected')

        }else{
            unselectAnotherSquares()
            selectSquare.add('selected')
        }
    }

    function unselectAnotherSquares(){
        const selectedSquare = document.getElementsByClassName('square')

        for (let square = 0; square < selectedSquare.length; square++) {
            if(
                selectedSquare.item(square).
                classList.contains('selected')
            ){
                selectedSquare.item(square).
                classList.remove('selected')
            }
        }

    }

    function handleGlowBoard(){
        const board = document.getElementsByClassName('board').item(0)

        board.classList.add('boardGlow')

        setInterval(() => {
            board.classList.remove('boardGlow')
        }, 2000);
    }
    
    return(
        <ViewContext.Provider
            value={{
                selectSquare,
                handleGlowBoard
            }}
        >
            {props.children}
        </ViewContext.Provider>
    )
}