import { State, UserScore } from './type';

type Action =
  | {
      type: 'REG_USER';
      payload: State;
    }
  | { type: 'AUTH_USER'; payload: State }
  | { type: 'LOGOUT_USER'; payload: State }
  | { type: 'CHECK_USER'; payload: State }
| { type: 'PLUS_SCORE'; payload: UserScore };

export default Action;
