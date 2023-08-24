import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Elements from './Components/Elements';
import AddToCart from './Components/AddToCart';

export default function Routtes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path='/:id' element={<Elements />} />
                        <Route path='cart' element={<AddToCart/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
