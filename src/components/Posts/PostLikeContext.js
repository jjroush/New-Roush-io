import React from "react";

const PostLikeContext = React.createContext({
    "_aws-provisioned-concurrency": {
        "Likes": 2
    },
    "aws-provisioned-concurrency": {
        "Likes": 5
    },
    "hello-world": {
        "Likes": 0
    },
    "http2": {
        "Likes": 1
    },
    "look-into-gatsby": {
        "Likes": 0
    },
    "mitm-proxy": {
        "Likes": 1
    },
    "starting-out": {
        "Likes": 0
    }
}
);
export default PostLikeContext;