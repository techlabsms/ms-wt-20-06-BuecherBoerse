import { useContext, useState } from 'react';
import { FaPoop } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context';

export const useSignIn = (url) => {
  const [userCredential, setUserCredential] = useState({
    name: '',
    email: '',
    password: '',
  });
  const history = useHistory();
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
        localStorage.setItem('token', userData.token);
        localStorage.setItem('name', userData.user.name);
        history.push('/', setIsUserLoggedIn(true));
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
