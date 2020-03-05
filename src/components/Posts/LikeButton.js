import React, { useState, useEffect } from 'react'
import Heart from './LikeSymbol'
/* eslint-disable */



function LikeButton(props) {
    const [liked, setLiked] = useState(false);
    const [predictedLikeCount, setpredictedLikeCount] = useState(props.likes);

    useEffect(() => {
        if (!liked) {
            setpredictedLikeCount(props.likes)
        }
    });

    function handleClick(article) {
        if (liked === false) {
            fetch(`https://us-central1-roushio.cloudfunctions.net/addLike?article=${article}`);
            setpredictedLikeCount(predictedLikeCount + 1);
        }
        setLiked(true);
    }

    return (
        <a onClick={() => { handleClick(props.article) }}>
            <Heart likes={predictedLikeCount} liked={liked} />
        </a>
    );
}

export default LikeButton;