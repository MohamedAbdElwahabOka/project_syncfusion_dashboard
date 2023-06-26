import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'


import "./App.css";
function App() {
    const activeMenu = true;
    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className='flex right-4 bottom-4' style={{ zIndex: '1000' }} ></div>
                    <TooltipComponent content="Settings" position="">
                        <button type='button' className='text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white'
                            style={{
                                background: 'red',
                                borderRadius: "50%"
                            }}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                    {activeMenu ? (
                        <div className='w-27 fixed sidebar
                        dark:bg-secondary-dark-bg'>
                            sidebar
                        </div>
                    ) : (
                        <div>
                            Routes
                        </div>
                    )}
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
