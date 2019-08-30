import React from 'react';
import styles from './c.scss';
import { B } from './b';

export const C = (props) => {
  return <div className={styles.cContain}><B testprop={57} /></div>;
}
