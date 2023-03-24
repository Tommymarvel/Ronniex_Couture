import './index.css';
// import { Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import HomePage from './component/HomePage';
// import Trending from './component/Trending';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      {/* <Trending /> */}
    </div>
  );
}

export default App;
