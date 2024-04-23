
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';


function App() {
  return (
   <Router>
    <Navbar/>
      <Routes>
         <Route path='/' exact element={<Home/>}/>
         <Route path='/rooms' exact element={<Rooms/>}>
             <Route slug element={<SingleRoom/>}/>
         </Route>
         <Route path='*' element={<PageNotFound/>}/>
      </Routes>
     </Router>
  );
}

export default App;
