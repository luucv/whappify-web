import React from 'react'
import styles from './Hero.scss'

export default () => (
  <section className={`grid__container has-padding-top-128 has-padding-bottom-128 ${styles.container}`}>
    <div className="grid__col--5">
      <h1 className="has-margin-bottom-15">Chats to Playlists</h1>
      <p className="has-margin-top-15">
        Export your shared songs from whatsapp to spotify. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>  
    </div>
    <div className="grid__col--5 grid__push--2">
      <iframe src="https://giphy.com/embed/blSTtZehjAZ8I" width="480" height="371" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dancing-dance-party-clubbing-blSTtZehjAZ8I">via GIPHY</a></p>
    </div>
    <div className={styles.scroll}>
      <p className="has-margin-bottom-15">scroll down</p>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAABDCAYAAABQmx+pAAAAAXNSR0IArs4c6QAAAHBJREFUOBFjYACC////ewPxaSD+DKW9QeIwCaAYBvAGSYJ0YAOnGYGiP4EGsIGNQSV+gST/o4oheEwIJiZrVBIYJqOBMBoIkKwxmhJGU8JoSoCEAG1Twi+4JaiMX6AseAlVDM67hL/+BKkDVoRYa14AWS6BmQ7GTZQAAAAASUVORK5CYII=" alt=""></img>
    </div>
  </section>
);
