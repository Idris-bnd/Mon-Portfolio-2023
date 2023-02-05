import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeProject, closeTransition, mouseInButton, mouseInLi, mouseInText, mouseOutButton, mouseOutLi, mouseOutText, mouseURL, resetCursor, setRandomProject, setTransition, ToggleProjectsBurger } from '../../actions/action';
import './Project.scss';


function Project() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ProjectNames = useSelector((state) => state.portfolio.projects.projectList);
    const actualProject = useSelector((state) => state.portfolio.projects.actualProject);
    const burgerMenu = useSelector((state) => state.portfolio.projects.burgerMenu);
    useEffect(() => {
        dispatch(resetCursor());
        dispatch(mouseURL(window.location.pathname.substring(1)));
        dispatch(setRandomProject());
    }, []);
    const mouseOver = () => {
        dispatch(mouseInText())
    };
    const mouseOut = () => {
     dispatch(mouseOutText())
    };
    const mouseOverLi = () => {
        dispatch(mouseInLi());
    };
    const mouseOutLii = () => {
        dispatch(mouseOutLi());
    };
    const mouseOverButton = () => {
        dispatch(mouseInButton());
    };
    const mouseOutButtonn = () => {
        dispatch(mouseOutButton());
    };
    const backTo = () => {
        dispatch(setTransition());
        setTimeout(() => {
            navigate('/about')
            setTimeout(() => {
            mouseOutButtonn();
            dispatch(closeTransition());
            }, 500)
        }, 500)
    };
    const openBurger = () => {
        dispatch(ToggleProjectsBurger())
    };
    const changeActualProject = (e) => {
        if (document.querySelector('.Project').classList.contains('changeProject')) {
            return;
        }
        document.querySelector('.Project').className = "Project changeProject";
        setTimeout(() => {
            dispatch(changeProject(e.target.id));
            setTimeout(() => {
                document.querySelector('.Project').className = "Project";
            }, 1000)
        }, 1000)
    };

  return(
    <section className='Project'>

        <div onClick={backTo} onMouseOver={mouseOverButton} onMouseOut={mouseOutButtonn} className="backTo">
            <i className="fa-solid fa-arrow-left-long" />
        </div>

        <div onClick={openBurger} onMouseOver={mouseOverButton} onMouseOut={mouseOutButtonn} className={`burgerMenu ${burgerMenu && " open"}`}>
            <div className="line1" />
            <div className="line2" />
        </div>

        <div className={`projectList ${burgerMenu && " open"}`}>
            <ul>
                {ProjectNames.map((project) => (
                    <li key={project.name} id={project.name} className={actualProject.name === project.name && " actualProject"} onClick={changeActualProject} onMouseOver={mouseOverLi} onMouseOut={mouseOutLii}>{project.name}</li>
                ))}
            </ul>
        </div>

        <h1 onMouseOver={mouseOver} onMouseOut={mouseOut}>{actualProject.name}</h1>

        <div className="paragraphs">
            <p onMouseOver={mouseOver} onMouseOut={mouseOut}>{actualProject.description}</p>
        </div>

        <a onMouseOver={mouseOverButton} onMouseOut={mouseOutButtonn} className='ImgLink' href={actualProject.link}>
            <img src={actualProject.img} alt={"image de mon projet: "+ actualProject.name} />
        </a>

    </section>
 )
}
export default Project;