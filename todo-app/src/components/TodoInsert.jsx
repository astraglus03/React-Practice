import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
// react-icons 설치후에 왼쪽과 같이 원하는 아이콘 가져올수 있음
// https://react-icons.netlify.com/#/icons/md
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    // 한번 함수 만들고 재사용하기위해 usecallback함수 사용
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback( 
    // onClick으로 해도되는데 onSubmit을 사용하는 이유는 Submit은 엔터도 포함하고있으며 Click은 포함하지않기 때문이다.
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault(); // 새로고침 방지 
    },
    [onInsert, value], // value가 바뀔때만 재 생성후 실행
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
      {/* MdAdd를 컴포넌트처럼 사용하면 됌! */}
    </form>
  );
};

export default TodoInsert;
