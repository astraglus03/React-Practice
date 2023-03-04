import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    dispay:flex;
    flex-directon:column;
    align-items:flex-start;
    justify-content:center;

    & > * {
        :not(:last-child){
            margin-bottom:16px;
        }
    }
`;

function PostList(props) {
    return (
        <Wrapper>
            {props.posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            props.onClickItem(post);
                        }} />
                );
            })}
        </Wrapper>
    );
}

export default PostList;