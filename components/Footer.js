import React from 'react'
import styles from './Footer.scss'

export default () => (
  <section className={`grid__container ${styles.container}`}>
    <ul>
      <li><p>terms and conditions</p></li>
      <li><p>about</p></li>
      <li><p>contact</p></li>
    </ul>
  </section>
);
