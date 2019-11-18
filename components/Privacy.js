import React from 'react'
import styles from './Privacy.scss'

export default () => (
  <section className={`grid__container has-padding-top-128 has-padding-bottom-128 ${styles.container}`}>
    <div className="grid__col--5">
      <iframe src="https://giphy.com/embed/l2Je5zDL6SM5pzhbW" width="480" height="362" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/season-4-the-simpsons-4x3-l2Je5zDL6SM5pzhbW">via GIPHY</a></p>
    </div>
    <div className="grid__col--5 grid__push--2">
      <h2 className="has-margin-bottom-15">Privacy first</h2>
      <p className="has-margin-top-15">
      We know that your chats contain sensitive information, that’s why we dont touch it. Whappify keeps your chats on your phone and are never sent to our servers.
      <br></br>
      <br></br>
      Oh yea, it’s also open-source so check out what exactly happens under the hood!
      </p>
    </div>
  </section>
);
