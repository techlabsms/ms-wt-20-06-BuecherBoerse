import { useGlobalContext } from '../context/OverallContext';
import { FaCheckCircle, FaPoo } from 'react-icons/fa';

export const useBookUpload = () => {
  const { setLoading, setAlert, setNewBook, setBookImage } = useGlobalContext();

  const bookUpload = async (api, token, formdata) => {
    try {
      setLoading(true);
      const res = await fetch(api, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formdata,
      });
      if (res.ok) {
        await res.json();
        setLoading(false);
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
      setLoading(false);
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
        desc: '',
      });
      setBookImage();
    }
  };
  return { bookUpload };
};
