import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
            <NavBar/>

      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
