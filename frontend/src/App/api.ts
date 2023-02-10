import { User, AuthUser } from '../features/auth/Types/type';
import { Card } from '../features/Board/Types/type';

export const loadCards = async (): Promise<Card[]> => {
  const res = await fetch('http://localhost:4000/api/card');
  return res.json();
};

export const registration = async (newUser: User): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      password2: newUser.password,
    }),
  });
  return res.json();
};

export const auth = async (user: AuthUser): Promise<AuthUser> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  });
 return res.json();
};

export const logout = async () => {
  const res = await fetch('http://localhost:4000/api/auth/logout', {
    credentials: 'include',
  });
  return res.json();
};
