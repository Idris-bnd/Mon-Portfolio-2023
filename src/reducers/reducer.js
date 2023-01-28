// import {
//     SET_NAV
// } from "../actions/action";

export const initialState = {
    nav: {
      open: false
    },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //exemple d'une action 
    //   case SET_NAV:
    //   return{
    //     ...state,
    //     webSiteThings: {
    //       ...state.webSiteThings,
    //       navOpen: !state.webSiteThings.navOpen,
    //     }
    //   };

    default:
      return state;
  }
};

export default reducer;