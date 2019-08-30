import React from 'react';
import styles from './a.scss';

export const A = ({ label }) => {
  return <div className={styles.aContain}>{label}</div>;
}
