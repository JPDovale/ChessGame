import React, { createContext, useContext } from "react";

import { boardPrint } from "../../../../pages/home/components/board/boardPrint/boardPrint";
import { GameContext } from "../game";


export const ViewContext = createContext()

export function ViewProvider(props){

    const {populateBoard} = useContext(GameContext)

   
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

    function populateViewBoard(){
        
        populateBoard()

        for (let square = 0; square < boardPrint.length; square++) {
            const print = boardPrint[square];

            const squareToPiece = document.getElementById(print.id)
            squareToPiece.classList.add(print.piece)
            
            if(print.piece == 'none'){
                print.piece =''
            }
        }
    }
    
    return(
        <ViewContext.Provider
            value={{
                selectSquare,
                handleGlowBoard,
                populateViewBoard
            }}
        >
            {props.children}
        </ViewContext.Provider>
    )
}