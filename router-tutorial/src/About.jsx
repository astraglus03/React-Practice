import React from "react";
import qs from 'qs'; // 쿼리 문자열을 객체로 변환할때에는 qs라이브러리 사용함

// location의 형태 = {
  //"pathname": "/about",
  // "search": ?detail=true,
  // "hash":""
// }
const About = ({location}) => {
  const query=qs.parse(location.search,{
    ignoreQueryPrefix:true // 이 설정을 통해 문자열 맨 앞의 ?를 생략 가능함.
  })
  
  const showDetail=query.hello =="3"; // 쿼리의 파싱 결과 값은 무조건 문자열이다. 
  return (
    <div>
      <h1>소개</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et dolorum,
        pariatur debitis officiis quos nostrum officia dicta in eaque cumque
        nesciunt sunt deleniti, magni error inventore libero voluptatem dolores?
      </p>
      {showDetail && <p>hello값을 3으로 설정했다.</p>}
    </div>
  );
};

export default About;
