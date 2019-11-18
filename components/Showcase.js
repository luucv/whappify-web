import React from 'react'
import styles from './Showcase.scss'

export default () => (
  <section className={`${styles.container}`}>
    <img className={styles.mockup} src="./static/mockup.png" />
    <h3 className={styles.giga}>MUCH WOW</h3>
  </section>
);
