import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeTransition, mouseInButton, mouseInText, mouseOutButton, mouseOutText, mouseURL, setTransition } from '../../actions/action';
import './About.scss';


function About() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(mouseURL(window.location.pathname.substring(1)));
    }, []);
    const mouseOver = () => {
        dispatch(mouseInText())
    };
    const mouseOut = () => {
     dispatch(mouseOutText())
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
        navigate('/projects')
        setTimeout(() => {
        mouseOutButtonn();
        dispatch(closeTransition());
        }, 500)
    }, 500)
    }
    const backTo = () => {
        dispatch(setTransition());
        setTimeout(() => {
            navigate('/')
            setTimeout(() => {
            mouseOutButtonn();
            dispatch(closeTransition());
            }, 500)
        }, 500)
    }

  return(
    <section className='About'>

        <div onClick={backTo} onMouseOver={mouseOverButton} onMouseOut={mouseOutButtonn} className="backTo">
            <i className="fa-solid fa-arrow-left-long" />
        </div>

        <h1 onMouseOver={mouseOver} onMouseOut={mouseOut}>About Me</h1>

        <div className="paragraphs">
            <p onMouseOver={mouseOver} onMouseOut={mouseOut}>
                Je m'appelle Idris Ben Ahmed, j'ai 19 ans et je suis passionné par le développement web.
            </p>
            <p onMouseOver={mouseOver} onMouseOut={mouseOut}>
                Après avoir appris seul l'HTML/CSS et le JavaScript pendant 6 mois, j'ai décider de compléter mes compétences avec la formation "Développeur web et web mobile" de l'école O'clock (6 mois/ 798H),<br/> durant laquelle j'ai découvert de nouveux  langages de programmation, de nouvelles architectures et également de nouveaux frameworks, dont React que j'apprécie particulièrement.
            </p>
            <p onMouseOver={mouseOver} onMouseOut={mouseOut}>
                Je suis aujourd'hui à la recherche d'un poste, idéalement de Front-end mais je suis aussi ouvert au Back-end ou au Full stack, mon but premier étant de prendre de l'expérience.
                Je suis disponible dans plusieurs secteurs:<br/>
                - Full Remote (télétravail)<br/>
                - Haute-Savoie (Lyon, Annecy, Grenoble, etc.)<br/>
                - Cannes et ses alentours (Sophia antipolis, Vilbonne, Nice, etc.)
            </p>
        </div>

        <div onMouseOver={mouseOverButton} onMouseOut={mouseOutButtonn} className="buttonDiv">
            <button onClick={changeLocation}>Projects</button>
        </div>
    </section>
 )
}
export default About;