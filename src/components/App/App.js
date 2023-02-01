import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { changeMousePosition, closeTransition } from '../../actions/action';
import About from '../About/About';
import Home from '../Home/Home';
import './App.scss';

function App() {
    const dispatch = useDispatch()
    const X = useSelector((state) =>  state.portfolio.app.mouse.positionX)
    const Y = useSelector((state) =>  state.portfolio.app.mouse.positionY)
    const onText = useSelector((state) =>  state.portfolio.app.mouse.onText)
    const onButton = useSelector((state) =>  state.portfolio.app.mouse.onButton)
    const onMouseDown = useSelector((state) =>  state.portfolio.app.mouse.onMouseDown)
    const transition = useSelector((state) =>  state.portfolio.app.transition)
    const mouseUrl = useSelector((state) =>  state.portfolio.app.mouse.url)
    useEffect(() => {
        setTimeout(() => {
            dispatch(closeTransition());
        }, 500);
    }, []);
    const mouseMove = (e) => {
        dispatch(changeMousePosition(e.clientY + "px", e.clientX + "px"))
    };
    const mouseDown = () => {
        document.querySelector('.App').className = "App mouseDown"
    };
    const mouseUp = () => {
        document.querySelector('.App').className = "App"
    };

  return(
    <section onMouseDown={mouseDown} onMouseUp={mouseUp}  onMouseMove={mouseMove} className={`App ${onMouseDown && ' mouseDown'}`}>
        <div style={{ top: X, left: Y}} id='cursor' className={`cursor ${mouseUrl} ${ onButton && " button "} ${transition && ' transition '} ${ onText && " text "}`} />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </section>
 )
}
export default App;