import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home.js'
import Contact from './pages/Contact.js'


function App() {
  return (
  <div className='app'>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </div>
    
  );
}

export default App;
