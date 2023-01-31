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

export const MOUSE_DOWN = 'MOUSE_DOWN';
export const mouseDown = () => ({
  type: MOUSE_DOWN,
});

export const MOUSE_UP = 'MOUSE_UP';
export const mouseUp = () => ({
  type: MOUSE_UP,
});