import Action from "./Types/Action";
import { State } from "./Types/type";

const init: State = {
  user: {},
  message: "",
};
const userReducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case "REG_USER":
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      };
    case "AUTH_USER":
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      };
    case "CHECK_USER":
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
export default userReducer;
