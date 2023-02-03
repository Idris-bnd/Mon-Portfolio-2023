import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeContactBool, changeContactValue, closeTransition, mouseInButton, mouseInInput, mouseInText, mouseOutButton, mouseOutInput, mouseOutText, mouseURL, sendMail, setTransition } from '../../actions/action';
import './Contact.scss';


function Contact() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const values = useSelector((state) => state.portfolio.contact.values);
    const contactBool = useSelector((state) => state.portfolio.contact.contactBool);
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
    const mouseOverInput = () => {
        dispatch(mouseInInput());
    };
    const mouseOutInputt = () => {
        dispatch(mouseOutInput());
    };
    const backTo = () => {
        dispatch(setTransition());
        setTimeout(() => {
            navigate('/')
            setTimeout(() => {
            mouseOutButtonn();
            dispatch(closeTransition());
            }, 500)
        }, 500)
    };
    const handleChange = (e) => {
        dispatch(changeContactValue(e.target.name, e.target.value))
    };
    const handleSubmit = (e) => {
        e.preventDefault()

        for (const name in values) {
            const value = values[name];
            if (value.length > 0) {
                dispatch(changeContactBool("champs", true))
                switch (name) {
                    case 'email':
                        if (value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                            dispatch(changeContactBool(name, true));
                        }else{
                            dispatch(changeContactBool(name, false));
                            return;
                        }
                    break;
                    case 'subject':
                        if (value.match(/^[\w.'\séèçù?!à]+$/)) {
                            dispatch(changeContactBool(name, true));

                        }else{
                            dispatch(changeContactBool(name, false));
                            return;
                        }
                    break;
                    case 'content':
                        if (value.match(/^[\w.'"\séèçù?!à@,]+$/)) {
                            dispatch(changeContactBool(name, true));
                        }else{
                            dispatch(changeContactBool(name, false));
                            return;
                        }
                    break;           
                    default:
                        if (value.match(/^[\w\s]+$/)) {
                            dispatch(changeContactBool(name, true));
                        }else{
                            dispatch(changeContactBool(name, false));
                            return;
                        }
                    break;
                }
            }else{
                dispatch(changeContactBool("champs", false))
                return;
            }
        }

        dispatch(sendMail());
    };
  return(
    <section className='Contact'>
        <div onClick={backTo} onMouseOver={mouseOverButton} onMouseOut={mouseOutButtonn} className="backTo">
            <i className="fa-solid fa-arrow-left-long" />
        </div>

       <h1 onMouseOver={mouseOver} onMouseOut={mouseOut}>Contact me!</h1>

       <form onSubmit={handleSubmit} className={`ContactForm ${contactBool.cursorLoading ? 'loading' : ''}`}>

            <div className="user">
                <div className="inputDiv">
                    <label onMouseOver={mouseOver} onMouseOut={mouseOut} htmlFor="firstName">Prénom</label>
                    <input onMouseOver={mouseOverInput} onMouseOut={mouseOutInputt} onChange={handleChange} type="text" name="firstName" placeholder='John' value={values.firstName} disabled={contactBool.cursorLoading && true }/>
                    <p className={!contactBool.firstName && "false"}>seulement les lettres de A à Z sont autorisés</p>
                </div>
                <div className="inputDiv">
                    <label onMouseOver={mouseOver} onMouseOut={mouseOut} htmlFor="lastName">Nom</label>
                    <input onMouseOver={mouseOverInput} onMouseOut={mouseOutInputt} onChange={handleChange} type="text" name="lastName" placeholder='Doe' value={values.lastName} disabled={contactBool.cursorLoading && true } />
                    <p className={!contactBool.lastName && "false"}>seulement les lettres de A à Z sont autorisés</p>
                </div>
            </div>

            <div className="inputDiv">
                <label onMouseOver={mouseOver} onMouseOut={mouseOut} htmlFor="email">Email</label>
                <input onMouseOver={mouseOverInput} onMouseOut={mouseOutInputt} onChange={handleChange} type="text" name="email" placeholder='John.Doe@gmail.com' value={values.email} disabled={contactBool.cursorLoading && true } />
                <p className={!contactBool.email && "false"}>Veuillez respecter le format email.</p>

            </div>

            <div className="inputDiv">
                <label onMouseOver={mouseOver} onMouseOut={mouseOut} htmlFor="subject">Sujet</label>
                <input onMouseOver={mouseOverInput} onMouseOut={mouseOutInputt} onChange={handleChange} type="text" name="subject" placeholder="offre d'emploi" value={values.subject} disabled={contactBool.cursorLoading && true } />
                <p className={!contactBool.subject && "false"}>seulement les lettres, chiffres et cette liste de caractères est autorisé: éèçù?!à,.'</p>
            </div>

            <div className="inputDiv">
                <label onMouseOver={mouseOver} onMouseOut={mouseOut} htmlFor="content">Message</label>
                <textarea onMouseOver={mouseOverInput} onMouseOut={mouseOutInputt} onChange={handleChange} name="content" placeholder="Hello Idris, t'as l'air super cool! Ducoup nous te proposons cette magnifique offre d'emploi :)" value={values.content} disabled={contactBool.cursorLoading && true } />
                <p className={!contactBool.content && 'false'}>seulement les lettres, chiffres et cette liste de caractères est autorisé: éèçù?!à,.@"'</p>
                <p className={!contactBool.champs && 'false'}>Veuillez remplir tout les champs avant d'envoyer le formulaire S.V.P</p>
                <p className={!contactBool.notSend && 'false'}>L'email n'as pas aboutit, veuillez re essayer ou directement me contacter via l'email ci-dessus.</p>
                <p className={contactBool.send && 'send'}>L'email a bien été envoyé, merci d'utiliser nos services</p>
            </div>

            <div onMouseOver={mouseOverButton} onMouseOut={mouseOutButtonn} className={`buttonDiv ${contactBool.cursorLoading && ' loading'}`}>
                <button disabled={contactBool.cursorLoading && true }>Envoyer</button>
            </div>

        </form>
    </section>
 )
}
export default Contact;