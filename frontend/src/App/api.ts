import { User } from '../features/auth/Types/type';
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
    body: JSON.stringify({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      password2: newUser.password,
    }),
  });
  return res.json();
};
