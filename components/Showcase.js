import React from 'react'
import styles from './Showcase.scss'

export default () => (
  <section className={`${styles.container}`}>
    <img className={styles.mockup} src="./static/mockup.png" />
    <div className="grid__col--4">
    <h2 className="has-margin-bottom-15">
      Great App
    </h2>
    <p className="has-margin-top-15">
      Export your shared songs from whatsapp to spotify. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    </div>
    {/* <h3 className={styles.giga}>MUCH WOW</h3> */}
  </section>
);
