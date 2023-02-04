import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { changeMousePosition, closeTransition, mouseInButton, mouseOutButton, setTransition } from '../../actions/action';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Project from '../Project/Project';
import './App.scss';

function App() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const mouse = useSelector((state) => state.portfolio.app.mouse)
    const X = useSelector((state) =>  state.portfolio.app.mouse.positionX)
    const Y = useSelector((state) =>  state.portfolio.app.mouse.positionY)    
    const onText = useSelector((state) =>  state.portfolio.app.mouse.onText)
    const onButton = useSelector((state) =>  state.portfolio.app.mouse.onButton)
    const onLi = useSelector((state) =>  state.portfolio.app.mouse.onLi)
    const onInput = useSelector((state) =>  state.portfolio.app.mouse.onInput)
    const onMouseDown = useSelector((state) =>  state.portfolio.app.mouse.onMouseDown)
    const mouseUrl = useSelector((state) =>  state.portfolio.app.mouse.url)
        
    const transition = useSelector((state) =>  state.portfolio.app.transition)
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
    const mouseOverButton = () => {
        dispatch(mouseInButton());
    };
    const mouseOutButtonn = () => {
        dispatch(mouseOutButton());
    };
    const changeLocation = () => {
    dispatch(setTransition());
    setTimeout(() => {
        navigate('/contact')
        setTimeout(() => {
        mouseOutButtonn();
        dispatch(closeTransition());
        }, 500)
    }, 500)
    }

  return(
    <section onMouseDown={mouseDown} onMouseUp={mouseUp}  onMouseMove={mouseMove} className={`App ${onMouseDown && ' mouseDown'}`}>
        <div style={{ top: X, left: Y}} id='cursor' className={`cursor  ${transition && ' transition '} ${mouseUrl} ${ onButton && " button "} ${ onInput && " onInput "} ${ onText && " text "} ${ onLi && " onLi"}`} />

        <div onClick={changeLocation} onMouseOver={mouseOverButton} onMouseOut={mouseOutButtonn} className="toContact">
            <i className="fa-solid fa-envelope" />
        </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
    </section>
 )
}
export default App;