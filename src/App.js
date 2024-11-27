import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './Components/Main';
import Stats from './Components/stats/Stats';
import About from './Components/about/About';
import Shop from './Components/Shop/Shop'
import Bat from './Components/Shop/Bat/Bat';
import Ball from './Components/Shop/Ball/Ball';
import Shoes from './Components/Shop/Shoes/Shoes';
import Helmet from './Components/Shop/Helmet/Helmet';
import BatsmanGloves from './Components/Shop/Batsman_Gloves/BatsmanGloves';
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import Trainers from './Components/Trainers/Trainers';
import WicketKeeperGloves from './Components/Shop/WicketKeeperGloves/WicketKeeperGloves';
import Kneepads from './Components/Shop/Kneepads/Kneepads';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Main' element={<Main />}/>
          <Route path='/Stats' element={<Stats />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Trainers' element={<Trainers />}/>
          <Route path='/Shop' element={<Shop />}/>
              <Route path='/Shop/Bat' element={<Bat/>}/>
              <Route path='/Shop/Ball' element={<Ball/>}/>
              <Route path='/Shop/Shoes' element={<Shoes/>}/>
              <Route path='/Shop/Helmet' element={<Helmet/>}/>
              <Route path='/Shop/Batsman_Gloves' element={<BatsmanGloves/>}/>
              <Route path='/Shop/WicketKeeper_Gloves' element={<WicketKeeperGloves/>}/>
              <Route path='/Shop/Kneepads' element={<Kneepads/>}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
