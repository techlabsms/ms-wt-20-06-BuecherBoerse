import { useContext } from 'react';
import { AppContext } from '../context/OverallContext';
import { FaCheckCircle, FaPoo } from 'react-icons/fa';

export const useBookUpload = () => {
  const { setAlert, setNewBook, userId, setBookImage } = useContext(AppContext);

  const bookUpload = async (api, token, formdata) => {
    try {
      const res = await fetch(api, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formdata,
      });
      if (res.status >= 200 && res.status <= 299) {
        const userBook = await res.json();
        console.log(userBook);
        setAlert({
          display: true,
          icon: <FaCheckCircle />,
          msg: 'Das Buch wurde erfolgreich hinzugefügt',
        });
      } else {
        throw new Error('Hoppala, da ist was schief gegangen');
      }
    } catch (error) {
      console.log('Hochladen fehlgeschlagen', error);
      setAlert({
        display: true,
        icon: <FaPoo />,
        msg: 'Das hat irgendwie nicht geklappt...',
      });
    } finally {
      setNewBook({
        name: '',
        author: '',
        genre: '',
        language: '',
        condition: '',
        owner: userId,
        desc: '',
      });
      setBookImage();
    }
  };
  return { bookUpload };
};
