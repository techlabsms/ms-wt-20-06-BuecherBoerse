import React from 'react';

const TextAreaInput = (props) => {
  return (
    <>
      <div className='form-control'>
        <label htmlFor={props.htmlFor} name={props.name}>
          {props.htmlFor}
        </label>
        <textarea cols='30' rows='5' {...props} />
      </div>
    </>
  );
};

export default TextAreaInput;
