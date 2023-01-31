// import {
//     SET_NAV
// } from "../actions/action";

import { CHANGE_JOB, CHANGE_MOUSE_POSITION, CLOSE_TRANSITION, MOUSE_DOWN, MOUSE_IN_TEXT, MOUSE_OUT_TEXT, MOUSE_UP, SET_FIRST_JOB, SET_TRANSITION } from "../actions/action";

export const initialState = {
  app: {
    mouse: {
      positionX: '',
      positionY: '',
      onText: false,
      onMouseDown: false,
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
    default:
      return state;
  }
};

export default reducer;