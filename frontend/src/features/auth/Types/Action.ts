import { State } from "./type";

type Action = {
  type: "REG_USER";
  payload: State;
};

export default Action;
