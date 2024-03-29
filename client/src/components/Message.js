import { FaUserCircle } from 'react-icons/fa';

const Message = ({ recipients, message, sender }) => {
  return (
    <>
      <article className='message basic-flex'>
        <span className='user-icon basic-flex'>
          <FaUserCircle />
        </span>
        <aside className='glimpse-message'>
          <header className='message-header'>
            <h4 className='title'>
              {sender === recipients[0]._id
                ? recipients[0].name
                : recipients[1].name}
            </h4>
          </header>
          <p>{message}</p>
        </aside>
      </article>
    </>
  );
};

export default Message;
