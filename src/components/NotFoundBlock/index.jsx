import React from 'react';
import styles from './notfound.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p>Данная страница отсутствует на нашем сайте</p>
    </div>
  );
};

export default NotFoundBlock;
