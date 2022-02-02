import React from 'react';
import './button.css';

const ButtonFocus = (props) => {
    const {text, onClick} = props;
  return (
      <button color="primary" onClick={onClick} id={'button-focus'}>{text}</button>
  );
}

export default ButtonFocus;
