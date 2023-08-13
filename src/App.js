
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Hedear from './components/Hedear';
import ShopingCardProvider from './components/TextMethods';

function App() {
  return (
    <ShopingCardProvider>
    <Hedear />
    <div className="App bg-light">
        <div>        
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/Store' element= {<Store />} />
          <Route path='/About' element= {<About />} />
        </Routes>
      </div>
    </div>
    </ShopingCardProvider>
  );
}

export default App;
