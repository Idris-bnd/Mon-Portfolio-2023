import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeJob, closeTransition, mouseInButton, mouseInText, mouseOutButton, mouseOutText, mouseURL, resetCursor, setFirstJob, setTransition } from '../../actions/action';
import './Home.scss';


function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const devTypes = useSelector((state) => state.portfolio.home.devTypes)
  const devType = useSelector((state) => state.portfolio.home.devType.value)
  const interval = useSelector((state) => state.portfolio.home.interval)
  useEffect(() => {
    dispatch(setFirstJob());
    dispatch(resetCursor());
    dispatch(mouseURL(window.location.pathname.substring(1)));
    if (interval) {
      return;
    }
      setInterval(() => {
        document.querySelector('.Home h2 span').className = 'remove';
        setTimeout(() => {
          dispatch(changeJob());
          setTimeout(() => {
            document.querySelector('.Home h2 span').className = '';
          }, 200)
        }, 200)
      }, 2700)
  }, [devTypes]);
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
      navigate('/about')
      setTimeout(() => {
        mouseOutButtonn();
        dispatch(closeTransition());
      }, 500)
    }, 500)
  }
  return(
    <section className='Home'>
      <h1 onMouseOver={mouseOver} onMouseOut={mouseOut}>Idris Ben Ahmed</h1>

      <h2 onMouseOver={mouseOver} onMouseOut={mouseOut}>Développeur <span className=''>{devType}</span></h2>

      <div onMouseOver={mouseOverButton} onMouseOut={mouseOutButtonn} className="buttonDiv">
        <button onClick={changeLocation}>More</button>
      </div>
    </section>
 )
}
export default Home;