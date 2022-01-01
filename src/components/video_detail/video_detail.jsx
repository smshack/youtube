import React from 'react';
import styles from './video_detail.module.css'
const VideoDetail = ({ video ,video:{snippet} }) => (
    <section className={styles.detail}>
        <iframe id="player" type="text/html" width="640" height="360"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameborder="0"></iframe>
            <h2 className={styles.title}>{snippet.title}</h2>
            <h3 className={styles.channelTitle}>{snippet.channelTitle}</h3>
            <pre className={styles.description}>{snippet.description}</pre>
    </section>
);

export default VideoDetail;