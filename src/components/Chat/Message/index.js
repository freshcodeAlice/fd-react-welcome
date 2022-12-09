import React from 'react';
import styles from './Message.module.css';
import {format} from 'date-fns';

const Message = (props) => {
    const {message: {body, id, postId, date, user: {username, imageSrc}}} = props;


    ////TODO: position of message relate to author

    const imgSrc = imageSrc ? imageSrc : './userPlaceholder.jpg';
    const messageDate = date ? date : new Date();

    return (
        <section className={styles['message-wrapper']}>
            <img src={imgSrc} className={styles['message-author-image']} />
            <div className={styles['text-wrapper']}>
                <span className={styles['username']}>{username}</span>
                <span className={styles['message-body']}>{body}</span>
                <span className={styles['message-date']}>{format(messageDate, 'hh:mm')}</span>
            </div>
        </section>
    );
}

export default Message;
