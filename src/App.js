//import logo from './logo.svg';
//import './App.css';
import Home from './Home/Home'

function App() {
  const ruta = 'http://localhost:4002/api'
  return (
    <div className="container-fluid">
      <div>
        <Home ruta={ruta}/>
      </div>
      
    </div>
    
  );
}

export default App;
