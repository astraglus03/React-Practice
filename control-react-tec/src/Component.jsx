import React from "react";
import styled from "styled-components";

const Component = ({ name, children }) => {
  return (
    <div>
      내 이름은 {name}입니다.
      {/* 태그와 태그 사이에 값을 넣어줄때에는 children 사용 */}
      {children}
    </div>
  );
};

// props가 없을경우 대체할 문구 사용시 default Props사용
Component.defaultProps = {
  name: "기본 이름",
};
export default Component;
