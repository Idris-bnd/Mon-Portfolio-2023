// exemple d'une première action
export const SET_TRANSITION = 'SET_TRANSITION';
export const setTransition = () => ({
  type: SET_TRANSITION,
});

export const CLOSE_TRANSITION = 'CLOSE_TRANSITION';
export const closeTransition = () => ({
  type: CLOSE_TRANSITION,
});


export const SET_FIRST_JOB = 'SET_FIRST_JOB';
export const setFirstJob = () => ({
  type: SET_FIRST_JOB,
});

export const CHANGE_JOB = 'CHANGE_JOB';
export const changeJob = () => ({
  type: CHANGE_JOB,
});

export const CHANGE_MOUSE_POSITION = 'CHANGE_MOUSE_POSITION';
export const changeMousePosition = (X, Y) => ({
  type: CHANGE_MOUSE_POSITION,
  X: X,
  Y: Y,
});

export const MOUSE_IN_TEXT = 'MOUSE_IN_TEXT';
export const mouseInText = () => ({
  type: MOUSE_IN_TEXT,
});

export const MOUSE_OUT_TEXT = 'MOUSE_OUT_TEXT';
export const mouseOutText = () => ({
  type: MOUSE_OUT_TEXT,
});

export const MOUSE_IN_BUTTON = 'MOUSE_IN_BUTTON';
export const mouseInButton = () => ({
  type: MOUSE_IN_BUTTON,
});

export const MOUSE_OUT_BUTTON = 'MOUSE_OUT_BUTTON';
export const mouseOutButton = () => ({
  type: MOUSE_OUT_BUTTON,
});

export const MOUSE_IN_LI = 'MOUSE_IN_LI';
export const mouseInLi = () => ({
  type: MOUSE_IN_LI,
});

export const MOUSE_OUT_LI = 'MOUSE_OUT_LI';
export const mouseOutLi = () => ({
  type: MOUSE_OUT_LI,
});

export const MOUSE_IN_INPUT = 'MOUSE_IN_INPUT';
export const mouseInInput = () => ({
  type: MOUSE_IN_INPUT,
});

export const MOUSE_OUT_INPUT = 'MOUSE_OUT_INPUT';
export const mouseOutInput = () => ({
  type: MOUSE_OUT_INPUT,
});

export const MOUSE_DOWN = 'MOUSE_DOWN';
export const mouseDown = () => ({
  type: MOUSE_DOWN,
});

export const MOUSE_UP = 'MOUSE_UP';
export const mouseUp = () => ({
  type: MOUSE_UP,
});

export const MOUSE_URL = 'MOUSE_URL';
export const mouseURL = (url) => ({
  type: MOUSE_URL,
  url: url,
});

export const SET_INTERVAL = 'SET_INTERVAL';
export const setInterval = (url) => ({
  type: SET_INTERVAL,
  url: url,
});

export const TOGGLE_PROJECTS_BURGER = 'TOGGLE_PROJECTS_BURGER';
export const ToggleProjectsBurger = () => ({
  type: TOGGLE_PROJECTS_BURGER,
});

export const SET_RANDOM_PROJECT = 'SET_RANDOM_PROJECT';
export const setRandomProject = () => ({
  type: SET_RANDOM_PROJECT,
});

export const CHANGE_PROJECT = 'CHANGE_PROJECT';
export const changeProject = (name) => ({
  type: CHANGE_PROJECT,
  name: name,
});

export const CHANGE_CONTACT_BOOL = 'CHANGE_CONTACT_BOOL';
export const changeContactBool = (name, bool) => ({
  type: CHANGE_CONTACT_BOOL,
  name: name,
  bool: bool,
});

export const CHANGE_CONTACT_VALUE = 'CHANGE_CONTACT_VALUE';
export const changeContactValue = (name, value) => ({
  type: CHANGE_CONTACT_VALUE,
  name: name,
  value: value,
});

export const RESET_CONTACT_VALUES = 'RESET_CONTACT_VALUES';
export const resetContactValues = () => ({
  type: RESET_CONTACT_VALUES,
});

export const SEND_MAIL = 'SEND_MAIL';
export const sendMail = (name, value) => ({
  type: SEND_MAIL,
  name: name,
  value: value,
});