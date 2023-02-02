import emailjs from "@emailjs/browser";
import { changeContactBool, resetContactValues, SEND_MAIL } from "../actions/action";
const apis = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MAIL:{
      store.dispatch(changeContactBool("cursorLoading", true));
      store.dispatch(changeContactBool("notSend", true));
      if (
        !process.env.REACT_APP_SERVICE_ID ||
        !process.env.REACT_APP_TEMPLATE_ID ||
        !process.env.REACT_APP_CLE_API
        ) {
          setTimeout(() => {
            store.dispatch(changeContactBool("notSend", false));
            store.dispatch(changeContactBool("cursorLoading", false))
            next(action);
          }, 2000)
      }

      emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
            firstName: store.getState().portfolio.contact.values.firstName,
            lastName: store.getState().portfolio.contact.values.lastName,
            email: store.getState().portfolio.contact.values.email,
            subject: store.getState().portfolio.contact.values.subject,
            content: store.getState().portfolio.contact.values.content,
        },
        process.env.REACT_APP_CLE_API
      )
      .then(() => {
        store.dispatch(resetContactValues())
        store.dispatch(changeContactBool("champs", true));
        store.dispatch(changeContactBool("notSend", true));
        store.dispatch(changeContactBool("send", true));

        setTimeout(() => {
          store.dispatch(changeContactBool("send", false));
        }, 5000)
      })
      .catch(() => {
        store.dispatch(changeContactBool("notSend", false));
      })
      .finally(() => {
        store.dispatch(changeContactBool("cursorLoading", false));
      })
      next(action);
  break;
  };
  default:
    next(action);
    break;
  }
};

export default apis;