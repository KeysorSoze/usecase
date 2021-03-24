import logo from './logo.svg';
import './App.css';

//import components
import Header from "./views/Header.js"
import Home from "./views/Home.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
