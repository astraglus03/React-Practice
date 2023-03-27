import React from "react";
import { withRouter } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";
const data = {
  velopart: {
    name: "김건동",
    description: "리액트 개싫어함.",
  },
  astraglus: {
    name: "멍청이",
    description: "존잘",
  },
};

const Profile = ({ match }) => {
  // url 파라미터를 사용할 때는 라우트로 사용되는 match객체 사용하고 안에 params를 참조함
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
