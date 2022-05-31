import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import HomePage from '../pages/home'
import Init from '../pages/init'

import { GameProvider } from '../shared/components/context/game'
import { ViewProvider } from '../shared/components/context/view'

export default function AppRoutes(){
    return(
        <Router>
            <GameProvider>
                <ViewProvider>
                    <Routes>
                        <Route 
                            exact path='/home'
                            element={<HomePage/>}
                        />
                        <Route 
                            exact path='/'
                            element={<Init/>}
                        />
                    </Routes>
                </ViewProvider>
            </GameProvider>
        </Router>
    )
}