import React from 'react';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🤖</span>
        <p>Страница не найдена</p>
      </h1>
      <h2 className={styles.description}>Данная страница отсуствует в нашем интернет-магазине</h2>
    </div>
  );
};

export default NotFound;
