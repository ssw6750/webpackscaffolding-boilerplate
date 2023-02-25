import { useState } from 'react';
import testPng from '../assets/test.png';
import testSvg from '../assets/react.svg';
import { ReactComponent as TestSvgComponent } from '../assets/react.svg';


const App = ({ message: initialMessage }) => {
  const [message] = useState(initialMessage ?? 'hello React *^^*');


  return (
    <div className="App">
      <h1>{message}</h1>
      {testPng}
      {testSvg}
      <TestSvgComponent></TestSvgComponent>
      
    </div>
  );
};

export default App;
