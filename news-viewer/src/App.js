import React, {useState, useCallback} from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

const App = () => {
  const [category,setCategory]=useState('all');
  const onSelect=useCallback(category=>setCategory(category),[])

  return (
    <>
      <Categories onSelect={onSelect} category={category} />
      <NewsList category={category} />
    </>
  );
};


// const [data, setData] = useState(null);
// const onClick = async () => {
//   try {
//     const response = await axios.get(
//       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=62d79da6b66a43b497a670af928af2a6',
//     );
//     setData(response.data);
//   } catch (e) {
//     console.log(e);
//   }
// };
// return (
//   <div>
//     <button onClick={onClick}>불러오기</button>
//     {data && (
//       <textarea
//         rows={7}
//         value={JSON.stringify(data, null, 2)}
//         readOnly={true}
//       />
//     )}
//   </div>
// );

export default App;
