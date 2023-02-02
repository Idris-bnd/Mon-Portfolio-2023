import {
  CHANGE_JOB,
  CHANGE_MOUSE_POSITION,
  CHANGE_PROJECT,
  CLOSE_TRANSITION,
  MOUSE_DOWN,
  MOUSE_IN_BUTTON,
  MOUSE_IN_LI,
  MOUSE_IN_TEXT,
  MOUSE_OUT_BUTTON,
  MOUSE_OUT_LI,
  MOUSE_OUT_TEXT,
  MOUSE_UP, MOUSE_URL,
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
      url: "",
    },
    transition: true,
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
        description: 'Blog / journal où je donne mon avis sur des sujets divers et variés, pour ce site j\'ai utilisé react, avec ses hooks, props, validation de props et également du scss/sass, <a href=\'https://github.com/Idris-bnd/blog-journal\'>lien</a> vers le répo github et <a href=\'https://blogjournal.web.app/\'>ici</a> vers le site.',
        img: BlogJournalImg,
        link: 'https://blogjournal.web.app/',
      },
      {
        name: 'Choose',
        description: 'Site pour générer des couleurs aléatoirement, pour ce site j\'ai utilisé react avec ses props et ses validations et du scss/sass également. le repo est <a href=\'https://github.com/Idris-bnd/Choose\'>ici</a> et le site <a href=\'https://choose-8d461.web.app/\'>ici</a>!',
        img: ChooseImg,
        link: 'https://choose-8d461.web.app/',
      },
      {
        name: 'Mon Portfolio',
        description: 'Mon portfolio tout bien tout sympa',
        img: Portfolio,
        link: '',
      },
      {
        name: 'Dance Riser',
        description: 'Dans une équipe de 4 développeurs, on a crée from scratch un site visant à gérer les relations professeurs/élèves d\'écoles de dances.',
        img: DanceRiserImg,
        link: 'https://www.dance-riser.com/',
      },
      {
        name: 'TerminalGame',
        description: 'Petit jeu sur un site effet \'terminal\' pour montrer mes compétences sur du Javascript vanilla, en utilisant les modèles, <a href=\'https://github.com/Idris-bnd/TerminalGame\'>lien</a> vers le répo github et <a href=\'https://idris-bnd.github.io/TerminalGame/\'>ici</a> vers le site',
        img: TerminalGameImg,
        link: 'https://idris-bnd.github.io/TerminalGame/',
      },
    ]
  }
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
          } 
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
        default:
      return state;
  }
};

export default reducer;