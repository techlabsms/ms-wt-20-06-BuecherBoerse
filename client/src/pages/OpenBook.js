import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ReturnTo from '../components/ReturnTo';
import { AppContext } from '../context';
import Loading from '../components/Loading';
import '../styles/OpenBook.css';
const api = '/api/books/';

const OpenBook = () => {
  const { closeSubmenu, loading, setLoading } = useContext(AppContext);
  const [openBook, setOpenBook] = useState({});
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
    description,
  } = openBook;

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
        <ReturnTo />
        <article className='open-book'>
          <img src={`../${image}`} alt={name} />
          <section className='open-book-info'>
            <div>
              <h2 className='title'>{name}</h2>
              <h3 className='title'>{author}</h3>
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
              <p>{description}</p>
            </div>
          </section>
          <aside className='user-action'>
            <section className='action-section'>
              <p>Dieses Buch gehört:</p>
              <h3>User XYZ</h3>
            </section>
            <hr className='separation-line' />
            <section className='action-section'>
              <p>Zustand des Buches ist:</p>
              <h3>{condition}</h3>
            </section>
            <hr className='separation-line' />
            <section className='action-section'>
              <p>Was möchtest du tun?</p>
              <button className='action-btn'>Jetzt vormerken</button>
              <button className='action-btn'>Jetzt ausleihen</button>
            </section>
          </aside>
        </article>
      </main>
    </>
  );
};

export default OpenBook;
