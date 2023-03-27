import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: "pink",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopart">
            velopart
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/astraglus">
            astraglus
          </NavLink>
        </li>
      </ul>
      {/* exact가 단독으로 적혀있을 경우에는 exact={true}라는 의미이다. */}
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택하시오</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
