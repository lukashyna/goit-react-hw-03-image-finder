import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Load More
  </button>
);
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
