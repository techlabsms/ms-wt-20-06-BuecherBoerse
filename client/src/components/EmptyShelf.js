const EmptyShelf = ({ children }) => {
  return (
    <>
      <section className='empty-shelf'>
        <div className='error-message basic-flex'>
          <h3 className='title'>{children}</h3>
        </div>
      </section>
    </>
  );
};

export default EmptyShelf;
