import React from 'react';
import styles from './video_detail.module.css'
const VideoDetail = ({ video, video: { snippet } }) => (
    <section className={styles.detail}>
        <iframe id="player"
            type="text/html"
            width="100%"
            height="500px"
            title="youtube video player"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen
            ></iframe>
        <h2 className={styles.title}>{snippet.title}</h2>
        <h3 className={styles.channelTitle}>{snippet.channelTitle}</h3>
        <pre className={styles.description}>{snippet.description}</pre>
    </section>
);

export default VideoDetail;