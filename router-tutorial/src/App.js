import React from 'react';
import {Link, Route,Switch} from 'react-router-dom'; // Switch 컴포넌트는 여러 Route를 감싸서 그중 일치하는 하나의 라우트만 렌더링함
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profiles from './Profiles';
// 리액트 router가 실행이 안되는 경우가 있을때에는 버전5로 다운그레이드 시킨것을 다운받아서 사용하면 된다.
// Link컴포넌트는 html에서 a와 같음. 하지만 html은 페이지 전체가 리렌더링되기때문에 안되려면 사용
// 파라미터는 특정 아이디나 이름을 조회할때 사용하고 쿼리는 키워드 검색이나 페이지에 필요한 옵션 전달할때 사용
const App = () => {
  return ( 
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
        <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
      <Route path='/' component={Home} exact /> 
      <Route path={["/about","/info"]} component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
      {/* <Route path="/info" Component={About} /> */}
      <Route render={({location})=>(
        <div>
          <h2>이 페이지는 존재하지 않습니다:</h2>
          <p>{location.pathname}</p>
        </div>
      )} />
      </Switch>
    </div>
  );
};

export default App;