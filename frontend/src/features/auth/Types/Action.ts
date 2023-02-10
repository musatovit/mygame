import { State } from "./type";

type Action =
  | {
      type: "REG_USER";
      payload: State;
    }
  | { type: "AUTH_USER"; payload: State }
  | { type: "LOGOUT_USER"; payload: State };

export default Action;
