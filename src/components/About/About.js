import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeTransition, mouseInText, mouseOutText, setTransition } from '../../actions/action';
import './About.scss';


function About() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mouseOver = () => {
        dispatch(mouseInText())
    };
    const mouseOut = () => {
    dispatch(mouseOutText())
    };
    const changeLocation = () => {
    dispatch(setTransition());
    setTimeout(() => {
        navigate('/about')
        setTimeout(() => {
        dispatch(closeTransition());
        }, 500)
    }, 1000)
    }
    const backTo = () => {
        dispatch(setTransition());
        setTimeout(() => {
            navigate('/')
            setTimeout(() => {
            dispatch(closeTransition());
            }, 500)
        }, 500)
    }

  return(
    <section className='About'>

        <div onClick={backTo} onMouseOver={mouseOver} onMouseOut={mouseOut} className="backTo">
            <i className="fa-solid fa-arrow-left-long" />
        </div>

        <h1 onMouseOver={mouseOver} onMouseOut={mouseOut}>About Me</h1>

        <div className="paragraphs">
            <p onMouseOver={mouseOver} onMouseOut={mouseOut}>
                Mon nom est Idris Ben Ahmed, j'ai 19 ans et je suis passionné par le développement web.
            </p>
            <p onMouseOver={mouseOver} onMouseOut={mouseOut}>
                Après avoir appris seul pendant 6 mois, j'ai décider de compléter mes compétences avec la formation "Développeur web et web mobile" d'O'clock<br/>(6 mois/ 798H), durant laquelle j'ai découvert de nouveux  langages de programmation, de nouvelles architecture et également de nouveaux frameworks, dont React, que j'apprécie énormément notamment.
            </p>
            <p onMouseOver={mouseOver} onMouseOut={mouseOut}>
                Je suis aujourd'hui à la recherche d'un poste, idéalement de Front-end mais je suis aussi ouvert au Back-end ou au Full stack, mon but premier étant de prendre de l'expérience.
                Je suis disponible dans plusieurs secteurs:<br/>
                - Full Remote (télétravail)<br/>
                - Lyon et ses alentours (notamment Annecy)<br/>
                - Cannes et ses alentours (Sophia antipolis, ect...)
            </p>
        </div>

        <div onMouseOver={mouseOver} onMouseOut={mouseOut} className="buttonDiv">
        <button onClick={changeLocation}>Projects</button>
        </div>
    </section>
 )
}
export default About;