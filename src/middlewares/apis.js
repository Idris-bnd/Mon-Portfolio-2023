// import emailjs from "@emailjs/browser";

const apis = (store) => (next) => (action) => {
  switch (action.type) {
//     case SEND_MAIL:{
//       store.dispatch(setLoadingOnForm());
//       store.dispatch(makeFormInputsTrue("notSend"));
//       if (
//         !process.env.REACT_APP_SERVICE_ID ||
//         !process.env.REACT_APP_SERVICE_ID ||
//         !process.env.REACT_APP_SERVICE_ID
//         ) {
//           setTimeout(() => {
//             store.dispatch(makeFormInputsError("notSend"));
//             store.dispatch(setLoadingOnForm())
//             next(action);
//           }, 2000)
//       }

//       emailjs.send(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         {
//             firstName: store.getState().reducer.ContactInputs.firstName,
//             lastName: store.getState().reducer.ContactInputs.lastName,
//             email: store.getState().reducer.ContactInputs.email,
//             subject: store.getState().reducer.ContactInputs.subject,
//             content: store.getState().reducer.ContactInputs.msgContent,
//         },
//         process.env.REACT_APP_CLE_API
//       )
//       .then(() => {
//         store.dispatch(resetFormInputs())
//         store.dispatch(makeFormInputsTrue("champs"));
//         store.dispatch(makeFormInputsTrue("notSend"));
//         store.dispatch(makeFormInputsTrue("send"));

//         setTimeout(() => {
//           store.dispatch(makeFormInputsError("send"));
//         }, 5000)
//       })
//       .catch(() => {
//         store.dispatch(makeFormInputsError("notSend"));
//       })
//       .finally(() => {
//         store.dispatch(setLoadingOnForm());
//       })
//       next(action);
//   break;
//   };
  default:
    next(action);
    break;
  }
};

export default apis;