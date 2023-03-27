import React, { Component } from 'react';
// history객체는 라우트에 사용된 컴포넌트에 match,location과 함께 전달되는 props중 하나임 
//  ex)특정버튼이나 로그인화면전환,다른페이지 이탈 방지
class HistorySample extends Component {
    handleGoBack=()=>{
        this.props.history.goBack()
    }
    handleGoHome=()=>{
        this.props.history.push('/');
    }
    componentDidMount(){
        // 이거 설정하면 페이지에 변화가 생기려고 할때마다 정말 나갈 것인지 물어봄
        this.unblock=this.props.history.block("정말 떠나실 건가요?");
    }
    componentWillUnmount(){
        // 컴포넌트가 언마운트되면 질문을 멈춤
        if(this.unblock){
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}

export default HistorySample;
