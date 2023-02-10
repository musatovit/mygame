import Action from "./Types/Action";
import { State } from "./Types/type";
const init = {
  user: {},
  message: "",
};
export const userReducer = (state: State = init, action: Action): State => {
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
    default:
      return state;
  }
};
