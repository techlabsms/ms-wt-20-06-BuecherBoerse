import { useContext, useState } from 'react';
import { FaCheckCircle, FaPoop } from 'react-icons/fa';
import { AppContext } from '../context';

export const useSignIn = (url) => {
  const [userCredential, setUserCredential] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { setIsUserLoggedIn, setAlert } = useContext(AppContext);
  const signInUser = async () => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userCredential),
      });
      if (res.status >= 200 && res.status <= 299) {
        const userData = await res.json();
        console.log(userData);
        setIsUserLoggedIn(true);
        setAlert({
          display: true,
          icon: <FaCheckCircle />,
          msg: 'Ein voller Erfolg!',
        });
      } else {
        throw new Error('Hoppala, da ist wohl was schief gelaufen...');
      }
    } catch (error) {
      console.log('errrorrrrr', error);
      setAlert({
        display: true,
        icon: <FaPoop />,
        msg: 'Das hat leider nicht geklappt',
      });
    } finally {
      setUserCredential({ name: '', email: '', password: '' });
    }
  };
  return { signInUser, userCredential, setUserCredential, setIsUserLoggedIn };
};
