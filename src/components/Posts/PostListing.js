import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import PostLikeContext from './PostLikeContext.js'

const StyledLikeSpan = styled.span`
    color: #800000;
`;

function PostListing({ post }) {

    const postLikes = useContext(PostLikeContext);
    const postSlug = post.fields.slug.split('/')[2];

    return (
        <article>
            <h3><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h3>
            <span>{post.frontmatter.date}
                {postLikes[postSlug] &&
                    <StyledLikeSpan>{` - ${postLikes[postSlug].Likes} \u2665`}</StyledLikeSpan>
                }
            </span>
            <p>{post.excerpt}</p>
        </article>
    )
}


export default PostListing;