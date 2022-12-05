import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Header } from './components/Header';

/** 引入uno.css，不引入不生效 */
import 'uno.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
