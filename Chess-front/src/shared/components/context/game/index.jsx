import React, {createContext, useEffect, useState} from "react";

import { boardPrint } from "../../../../pages/home/components/board/boardPrint/boardPrint";
import { inicialBoard } from "../../../../pages/home/components/board/inicialBoard";


export const GameContext = createContext()

export function GameProvider(props){
    const board = boardPrint
    const[pieceAndPosition, setPieceAndPosition] = useState({})
    const [loading, setLoading] = useState(true)


    function populateBoard(){
        
        for (let square = 0; square < inicialBoard.length; square++) {
            
            const inicialPositionPieces = inicialBoard[square];
            const print = board[square]

            print.piece = inicialPositionPieces.piece

            print.selected = false
        }

        setLoading(false)
    }

    function handleMove(id){
        selectPieceToMove(id)
    }

    
    // useEffect(()=>{
    //     if(loading === false){
    //         document.getElementById(pieceAndPosition.id).children[0].classList.remove('hidden')
    //         movesForPiece(pieceAndPosition)
    //     }

    // },[pieceAndPosition])

    function selectPieceToMove(id){
        let pieceAndPosition = board.find(pc=> pc.id === id)

        if(pieceAndPosition.selected === false){ 
            for (let pieces = 0; pieces < board.length; pieces++) {
                const piece = board[pieces];

                if(piece.selected === true){
                    piece.selected = false
                }
            }

            pieceAndPosition.selected = true

        }else{
            pieceAndPosition.selected = false
        }
        console.log(pieceAndPosition)
        setPieceAndPosition(pieceAndPosition)
        if(pieceAndPosition.piece != '')
        movesForPiece(pieceAndPosition)
    }

    function movesForPiece(pieceAndPosition){

        const id = pieceAndPosition.id
        let piece = pieceAndPosition.piece.substring(5)
        
        switch(piece){
            
            case piece = 'Rook':
                const Rook = board.filter(square => square.id.substring(0, 1) == id.substring(0, 1) || square.id.substring(1, 2) == id.substring(1, 2))
                console.log(Rook)

                for (let index = 0; index < Rook.length; index++) {
                    const element = Rook[index];
                    
                    document.getElementById(element.id).children[0].classList.remove('hidden')
                }

            break;
        
            case piece = 'Pawn':
                
            break;

            default:
                break;
        }
        

        

        

    }
    
    return(
        <GameContext.Provider
            value={{
                populateBoard,
                handleMove,
            }}        
        >
            {props.children}
        </GameContext.Provider>
    )
}

