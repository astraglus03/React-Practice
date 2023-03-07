import React from "react";
import styled, { css } from "styled-components";

const sizes={
  desktop:1024,
  tablet:768
}

const media = Object.keys(sizes).reduce((acc,label)=>{
  acc[label]=(...arg)=>css`
  @media (max-width:${sizes[label]/16}em){
    ${css(...arg)}
  }
  `;
  return acc;
},{});

const Box = styled.div`
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;

  // 기본적으로는 가로 크기 1024px에 가운데정렬 후 가로가 작아지면 크기 줄이고 768px미만이면 꽉채우기
  // 크기에 따른 다른 스타일 적용 = @media쿼리 사용
  width:1024px;
  margin: 0 auto;

  // @media (max-width:1024px){
  //   width:768px;
  // }
  // @media (max-width:768px){
  //   width:100%
  // }


  ${media.desktop`width:768`}
  ${media.tablet`width:100%`}

`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    // css사용하지 않아도 괜찮지만 tagged리터럴로 되지않아 
    // props의 값을 받아와서 사용할 할 수 없다. props를 사용한다면 css사용 권장
    css ` 
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return(
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
  );
};

export default StyledComponent;
