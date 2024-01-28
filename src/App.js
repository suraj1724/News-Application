import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import MarqueeComponent from './components/Marquee';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <MarqueeComponent />
    <h1 className="text-3xl font-bold underline">
      Hello world! hello
    </h1>
    </div>
  );
}

export default App;
