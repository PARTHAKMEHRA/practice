import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

function Button({ isComplete, onClick }) {
  function handleClick() {
    onClick();
  }

  return (
    <button onClick={handleClick} className={styles.btn}>
      {isComplete ? '✔️' : 'Complete'}
    </button>
  );
}

Button.propTypes = {
  isComplete: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
