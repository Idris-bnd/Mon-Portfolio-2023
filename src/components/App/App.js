import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import './App.scss';


function App() {

  return(
    <section className='App'>
        <BrowserRouter>
            <Routes>

               <Route path="/" element={<Home />} />

            </Routes>
       </BrowserRouter>
    </section>
 )
}
export default App;