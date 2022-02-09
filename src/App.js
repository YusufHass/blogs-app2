import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Home2 from './Home2';

function App() {
  return (
    <div className="App">
            <NavBar/>

      <div className="content">
        <Home2/>
      </div>
    </div>
  );
}

export default App;
