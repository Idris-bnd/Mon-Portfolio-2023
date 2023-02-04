import {
  CHANGE_CONTACT_BOOL,
  CHANGE_CONTACT_VALUE,
  CHANGE_JOB,
  CHANGE_MOUSE_POSITION,
  CHANGE_PROJECT,
  CLOSE_TRANSITION,
  MOUSE_DOWN,
  MOUSE_IN_BUTTON,
  MOUSE_IN_INPUT,
  MOUSE_IN_LI,
  MOUSE_IN_TEXT,
  MOUSE_OUT_BUTTON,
  MOUSE_OUT_INPUT,
  MOUSE_OUT_LI,
  MOUSE_OUT_TEXT,
  MOUSE_UP, MOUSE_URL,
  RESET_CONTACT_VALUES,
  SET_FIRST_JOB,
  SET_INTERVAL,
  SET_RANDOM_PROJECT,
  SET_TRANSITION,
  TOGGLE_PROJECTS_BURGER
} from "../actions/action";

import DanceRiserImg from '../assets/DanceRiser.jpg';
import ChooseImg from '../assets/Choose.jpg';
import BlogJournalImg from '../assets/BlogJournal.jpg';
import TerminalGameImg from '../assets/TerminalGame.jpg';
import Portfolio from '../assets/Portfolio.png';
export const initialState = {
  app: {
    mouse: {
      positionX: '',
      positionY: '',
      onText: false,
      onMouseDown: false,
      onButton: false,
      onLi: false,
      onInput: false,
      url: "",
    },
    transition: false,
  },
  home: {
    devTypes: [
      'Front-end',
      'Créatif',
      'Passionné',
      'JavaScript',
      'React.js',
      'Back-end',
      'Php',
      'Full Stack',
    ],
    devType : {
      value: '',
      index: '',
    },
    interval : false,
  },
  projects:{
    burgerMenu: false,
    actualProject: false,
    projectList : [
      {
        name: 'Blog',
        description: 'Blog / journal où je donne mon avis sur des sujets divers et variés, pour ce site j\'ai utilisé react, avec ses hooks, props, validation de props et également du scss/sass. Cliquez sur l\'image pour attérir sur le site. Lien du répo github: https://github.com/Idris-bnd/blog-journal',
        img: BlogJournalImg,
        link: 'https://blogjournal.web.app/',
      },
      {
        name: 'Choose',
        description: 'Site pour générer des couleurs aléatoirement, pour ce site j\'ai utilisé react avec ses props et ses validations et du scss/sass. Cliquez sur l\'image pour attérir sur le site. Lien du répo github: https://github.com/Idris-bnd/Choose',
        img: ChooseImg,
        link: 'https://choose-8d461.web.app/',
      },
      {
        name: 'Mon Portfolio',
        description: 'Mon portfolio, site sur lequel vous vous trouvez actuellement, réalisé avec React/Redux et responsive, vous y trouverez quelques projets personnels/ en équipe. Lien du répo github: https://github.com/Idris-bnd/Mon-Portfolio-2023',
        img: Portfolio,
        link: 'https://idris-portfolio-8228d.web.app/',
      },
      {
        name: 'Dance Riser',
        description: 'Dans une équipe de 4 développeurs, on a crée from scratch un site visant à gérer les relations professeurs/élèves d\'écoles de dances. Pour l\'application front on s\'est servis de React/Redux, scss et le plus important: axios pour communiquer en API REST avec l\'application back-end réalisé en Symfony/Doctrine. Cliquez sur l\'image pour attérir sur le site.',
        img: DanceRiserImg,
        link: 'https://www.dance-riser.com/',
      },
      {
        name: 'TerminalGame',
        description: 'Petit jeu sur un site effet \'terminal\' pour montrer mes compétences sur du Javascript vanilla, en utilisant les modèles. Cliquez sur l\'image pour attérir sur le site. Lien du répo github: https://github.com/Idris-bnd/TerminalGame',
        img: TerminalGameImg,
        link: 'https://idris-bnd.github.io/TerminalGame/',
      },
    ]
  },
  contact:{
    contactBool:{
      firstName: true,
      lastName: true,
      email: true,
      subject: true,
      content: true,
      // --
      champs: true,
      notSend: true,
      cursorLoading: false,
      send: false,
    },
    values:{
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      content: '',
    }
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //exemple d'une action 
      case SET_FIRST_JOB:
      const newValue = state.home.devTypes[Math.floor(Math.random() * state.home.devTypes.length)];
      const newIndex = state.home.devTypes.indexOf(newValue);
      return{
        ...state,
        home: {
          ...state.home,
          devType: {
            ...state.home.devType,
            value : newValue,
            index : newIndex,
          } 
        }
      };
      case CHANGE_JOB:
        let index = state.home.devType.index
        index += 1
        if (index > state.home.devTypes.length - 1) {
          index = 0
        }
      return{
        ...state,
        home: {
          ...state.home,
          devType: {
            ...state.home.devType,
            value: state.home.devTypes[index],
            index: index
          },
          interval: true,
        }
      };
      case CHANGE_MOUSE_POSITION:
        return{
          ...state,
          app: {
            ...state.app,
            mouse: {
              ...state.app.mouse,
              positionX: action.X,
              positionY: action.Y
            } 
          }
        };
      case MOUSE_IN_TEXT:
      return{
        ...state,
        app: {
          ...state.app,
          mouse: {
            ...state.app.mouse,
            onText: true,
          } 
        }
      };
      case MOUSE_OUT_TEXT:
      return{
        ...state,
        app: {
          ...state.app,
          mouse: {
            ...state.app.mouse,
            onText: false,
          } 
        }
      };
      case MOUSE_IN_BUTTON:
      return{
        ...state,
        app: {
          ...state.app,
          mouse: {
            ...state.app.mouse,
            onButton: true,
          } 
        }
      };
      case MOUSE_OUT_BUTTON:
      return{
        ...state,
        app: {
          ...state.app,
          mouse: {
            ...state.app.mouse,
            onButton: false,
          } 
        }
      };
      case MOUSE_IN_LI:
      return{
        ...state,
        app: {
          ...state.app,
          mouse: {
            ...state.app.mouse,
            onLi: true,
          } 
        }
      };
      case MOUSE_OUT_LI:
      return{
        ...state,
        app: {
          ...state.app,
          mouse: {
            ...state.app.mouse,
            onLi: false,
          } 
        }
      };
      case MOUSE_IN_INPUT:
      return{
        ...state,
        app: {
          ...state.app,
          mouse: {
            ...state.app.mouse,
            onInput: true,
          } 
        }
      };
      case MOUSE_OUT_INPUT:
      return{
        ...state,
        app: {
          ...state.app,
          mouse: {
            ...state.app.mouse,
            onInput: false,
          } 
        }
      };
      case MOUSE_DOWN:
      return{
        ...state,
        app: {
          ...state.app,
          mouse: {
            ...state.app.mouse,
            onMouseDown: true,
          } 
        }
      };
      case MOUSE_UP:
      return{
        ...state,
        app: {
          ...state.app,
          mouse: {
            ...state.app.mouse,
            onMouseDown: false,
          } 
        }
      };
      case SET_TRANSITION:
      return{
        ...state,
        app: {
          ...state.app,
          transition: true,
        }
      };
      case CLOSE_TRANSITION:
      return{
        ...state,
        app: {
          ...state.app,
          transition: false,
        }
      };
      case MOUSE_URL:
        return{
          ...state,
          app: {
            ...state.app,
            mouse: {
              ...state.app.mouse,
              url: action.url
            },
          }
        };
      case SET_INTERVAL:
        return{
          ...state,
          home: {
            ...state.home,
            interval: true
          }
        };
      case TOGGLE_PROJECTS_BURGER:
        return{
          ...state,
          projects: {
            ...state.projects,
            burgerMenu: !state.projects.burgerMenu
          }
        };
      case SET_RANDOM_PROJECT:
        return{
          ...state,
          projects: {
            ...state.projects,
            actualProject: state.projects.projectList[Math.floor(Math.random() * state.projects.projectList.length)]
          }
        };
      case CHANGE_PROJECT:
        action.data = state.projects.projectList.filter((project) => {
          return project.name === action.name
        })
        console.log(action.data);
        return{
          ...state,
          projects: {
            ...state.projects,
            actualProject: action.data[0]
          }
        };
      case CHANGE_CONTACT_BOOL:
        return{
            ...state,
            contact:{
              ...state.contact,
              contactBool:{
                ...state.contact.contactBool,
                [action.name]: action.bool,
              }
            }
        }; 
      case CHANGE_CONTACT_VALUE:
        return{
            ...state,
            contact:{
              ...state.contact,
              values:{
                ...state.contact.values,
                [action.name]: action.value,
              }
            }
        }; 
      case RESET_CONTACT_VALUES:
        return{
          ...state,
          contact:{
            ...state.contact,
            values:{
              firstName: '',
              lastName: '',
              email: '',
              subject: '',
              content: '',
            }
          }
        }  
        default:
      return state;
  }
};

export default reducer;