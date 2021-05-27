import { useGlobalContext } from '../context/OverallContext';
import ModalWrapper from './ModalWrapper';
import Form from './Form';
import InputField from './InputField';
import TextAreaInput from './TextAreaInput';
import ActionBtn from './ActionBtn';

const EditBook = () => {
  const { showEditBook, setShowEditBook } = useGlobalContext();

  const updateBook = (e) => {
    e.preventDefault();
  };

  const closeEditWindow = () => {
    setShowEditBook(false);
  };

  return (
    <>
      <ModalWrapper showEditBook={showEditBook}>
        <Form className='book-update-form' onSubmit={updateBook}>
          <div className='info-upload'>
            <InputField
              type='text'
              htmlFor='Name:'
              name='name'
              id='name'
              placeholder='Name des Buches'
            />
            <InputField
              type='text'
              htmlFor='Autor*in:'
              name='author'
              id='author'
              placeholder='Autor*in des Buches'
            />
            <InputField
              type='text'
              htmlFor='Genre:'
              name='genre'
              id='genre'
              placeholder='Genre des Buches'
            />
            <InputField
              type='text'
              htmlFor='Sprache:'
              name='language'
              id='language'
              placeholder='Sprache des Buches'
            />
            <InputField
              type='text'
              htmlFor='Zustand:'
              name='condition'
              id='condition'
              placeholder='Zustand des Buches'
            />
            <TextAreaInput
              htmlFor='Beschreibung:'
              name='desc'
              id='desc'
              rows='2'
              placeholder='Kurze Beschreibung des Buches'
            />
            <div className='action-btn-container'>
              <ActionBtn type='submit'>Jetzt speichern</ActionBtn>
              <ActionBtn onClick={closeEditWindow}>Jetzt abbrechen</ActionBtn>
            </div>
          </div>
        </Form>
      </ModalWrapper>
    </>
  );
};

export default EditBook;
