import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context';
import Loading from '../components/Loading';
import '../styles/OpenBook.css';
import UserAction from '../components/UserAction';
const api = '/api/books/';

const OpenBook = () => {
  const { closeSubmenu, loading, setLoading } = useContext(AppContext);
  const [openBook, setOpenBook] = useState({});
  const [showDesc, setShowDesc] = useState(false);
  const { id } = useParams();

  const fetchSingleBook = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${api}${id}`);
      if (res.ok) {
        const singleBook = await res.json();
        setOpenBook(singleBook);
      } else {
        throw new Error('etwas hat nicht geklappt');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [id, setLoading]);

  useEffect(() => {
    fetchSingleBook();
  }, [fetchSingleBook]);

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
      <main onClick={closeSubmenu}>
        <article className='open-book'>
          <img src={`../${image}`} alt={name} />
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
      </main>
    </>
  );
};

export default OpenBook;
