import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
// object-fit속성은 지정된 너비와 높이에 맞게 장착되는 방식이다. (img,video,object,svg 등)

const NewsItem = ({article}) => {
    const {title,description,url,urlToImage}=article;
  return(
    <NewsItemBlock>
        {urlToImage &&(<div className='thumbnail'>
            <a href={url} target="_blank" rel='nooperner noreferrer'>
                <img src={urlToImage} alt="thumbnail" />
            </a>
            {/* nooperner은 target을 blank로 했을때 새 페이지가 열리는데 이때 열린쪽을 js를 이용하여 window 객체에 부분적으로 접근하는것을 막는다. */}
            {/* noreferrer은 링크 클릭했을때 리퍼러 헤더 넘기지 않는다.  */}
        </div>)}
        <div className="contents">
            <h2>
            <a href={url} target="_blank" rel='nooperner noreferrer'>{title}</a>
            </h2>
            <p>{description}</p>
        </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
