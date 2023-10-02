import { Route, Switch } from 'react-router';

import './App.css';
import Home from './views/Home';
import About from './views/About';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      <Link to={"/a"}>as</Link>
      <Home/>
    </div>
    
        <Switch>
            <Route exact path="/a" element={<About/>} />
            <Route exact path="/home" element={<Home/>} />
          </Switch>
    
    
    </>
  );
}

export default App;
