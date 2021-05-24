import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/OverallContext';
import Loading from '../components/Loading';
import UserAction from '../components/UserAction';
import Alert from '../components/Alert';
import ReturnTo from '../components/ReturnTo';
import MessageModal from '../components/MessageModal';
import Loading2 from '../components/Loading2';
import { useBookData } from '../hooks/useBookData';
import { motion } from 'framer-motion';

const OpenBook = () => {
  const {
    alert,
    closeSubmenu,
    loading,
    API_BOOKS,
    showMessageModal,
    openBook,
  } = useGlobalContext();
  const { fetchSingleBook } = useBookData();
  const [showDesc, setShowDesc] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchSingleBook(API_BOOKS, id);
  }, [API_BOOKS, fetchSingleBook, id]);

  const {
    image,
    name,
    author,
    category,
    language,
    condition,
    owner,
    description,
  } = openBook;

  const collapseDesc = () => {
    setShowDesc(!showDesc);
  };

  if (loading) {
    return (
      <>
        <main>
          <Loading />
        </main>
      </>
    );
  }
  return (
    <>
      {showMessageModal && <MessageModal showMessageModal={showMessageModal} />}
      {loading && <Loading2 />}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={closeSubmenu}
      >
        <ReturnTo />
        <article className='open-book'>
          <img src={image} alt={name} />
          <section className='open-book-info'>
            <div>
              <h2 className='title'>{name}</h2>
              <h4 className='title'>{author}</h4>
            </div>
            <hr className='separation-line' />
            <div>
              <h4>Genre</h4>
              <p>{category}</p>
            </div>
            <div>
              <h4>Sprache</h4>
              <p>{language}</p>
            </div>
            <div>
              <h4>Beschreibung</h4>
              <p>
                {showDesc
                  ? `${description} `
                  : description && `${description.substring(0, 300)}... `}
                <button className='collapse' onClick={collapseDesc}>
                  {!showDesc ? 'Mehr' : 'Weniger'}
                </button>
              </p>
            </div>
          </section>
          <UserAction owner={owner} condition={condition} />
        </article>
        {alert.display && <Alert />}
      </motion.main>
    </>
  );
};

export default OpenBook;
