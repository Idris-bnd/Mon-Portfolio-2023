import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeJob, closeTransition, mouseInText, mouseOutText, setFirstJob, setTransition } from '../../actions/action';
import './Home.scss';


function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const devTypes = useSelector((state) => state.portfolio.home.devTypes)
  const devType = useSelector((state) => state.portfolio.home.devType.value)
  
  useEffect(() => {
    dispatch(setFirstJob())
    setInterval(() => {
      document.querySelector('.Home h2 span').className = 'remove';
      setTimeout(() => {
        dispatch(changeJob());
        setTimeout(() => {
          document.querySelector('.Home h2 span').className = '';
        }, 200)
      }, 200)
    }, 2700)
  }, [devTypes])
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
  return(
    <section className='Home'>
      <h1 onMouseOver={mouseOver} onMouseOut={mouseOut}>Idris Ben Ahmed</h1>

      <h2 onMouseOver={mouseOver} onMouseOut={mouseOut}>Développeur <span className=''>{devType}</span></h2>

      <div onMouseOver={mouseOver} onMouseOut={mouseOut} className="buttonDiv">
        <button onClick={changeLocation}>More</button>
      </div>
    </section>
 )
}
export default Home;