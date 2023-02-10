export type User = {
  id?: number;
  name: string;
  email: string;
  userScore?: number;
  password?: string;
  password2?: string;
};
export type State = {
  user: User | {};
  message: string;
};
export type AuthUser = {
  email: string;
  password: string;
};
