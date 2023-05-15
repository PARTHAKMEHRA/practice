import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/button';
import Cross from '../../atoms/cross';
import styles from './listitem.module.css';

function ListItem({ task, isComplete, onToggleComplete, onDelete }) {
    return (
      <div className={styles.container}>
        <p className={isComplete ? styles.complete : null}>{task}</p>
        <Button isComplete={isComplete} onClick={onToggleComplete} />
        <Cross onClick={onDelete} />
      </div>
    );
  }
  
  ListItem.propTypes = {
    task: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };
  
  export default ListItem;