import React from 'react';
import styles from './b.scss';
import { A } from './a';

export const B = (props) => {
  return <div {...props} className={styles.bContain}><A label="test" /></div>;
}
