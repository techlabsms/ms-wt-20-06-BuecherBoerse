import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReturnTo from '../components/ReturnTo';
import { AppContext } from '../context';
import Loading from '../components/Loading';
import '../styles/OpenBook.css';
const api = 'http://localhost:4000/api/books/';

const OpenBook = () => {
  const { closeSubmenu } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [openBook, setOpenBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchSingleBook = async () => {
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
    };
    fetchSingleBook();
  }, [id]);

  const { image, name, author, category, description } = openBook;

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
        <section className='open-book'>
          <h2 className='title'>{name}</h2>
          <h3 className='title italic'>{author}</h3>
          <img src={`../${image}`} alt={name} />
          <div className='open-book-info'>
            <header>
              <h3>Beschreibung</h3>
              <p>{description}</p>
            </header>
            <p>
              Genre: <span>{category}</span>
            </p>
            <footer>
              <div className='btn-container'>
                <button className='btn'>Jetzt vormerken</button>
                <button className='btn'>Jetzt ausleihen</button>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
};

export default OpenBook;
