import { useContext } from 'react';
import { UserContext } from './AuthProvider';

export const useSession = () => {
  const userState = useContext(UserContext);
  return userState;
};
