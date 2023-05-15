import React from 'react';
import PropTypes from 'prop-types';
import styles from './cross.module.css';


function Cross({ onClick }) {
  function handleDelete() {
    onClick();
  }

  return (
    <button onClick={handleDelete} className={styles.btn}>X</button>
  );
}

Cross.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Cross;
