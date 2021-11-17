import './App.css';
import Graphics from './Graphics.js'
import Navbar from './Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="card" style={{"width": "70rem", "margin":"auto"}}>
        <div class="card-body">
        <Graphics />
        </div>
      </div>
    </div>
  );
}

export default App;
