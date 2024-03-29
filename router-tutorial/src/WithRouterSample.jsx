import React from "react";
import { withRouter } from "react-router-dom";

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
      value={JSON.stringify(match,null,2)} 
      // JSON.stringify의 두번째 파라미터와 세번째 파라미터를 null,2로 해주면 들여쓰기 적용된 상태로 문자열 생성
      rows={7}
      readOnly={true} />
      <button onClick={()=>history.push('/')}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample); // withRouter를 사용시에 함수로 감싸주어야함.
