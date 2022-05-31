import React, {createContext} from "react";

export const GameContext = createContext()

export function GameProvider(props){

    
    return(
        <GameContext.Provider
            value={{
                
            }}        
        >
            {props.children}
        </GameContext.Provider>
    )
}

