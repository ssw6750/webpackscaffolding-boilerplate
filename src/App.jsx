import { useState } from 'react';
import testPng from '../assets/test.png'


const App = ({ message: initialMessage }) => {
  const [message] = useState(initialMessage ?? 'hello React *^^*');


  return (
    <div className="App">
      <h1>{message}</h1>
      {testPng}
      <img src={testPng}></img>
    </div>
  );
};

export default App;
