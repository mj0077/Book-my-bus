import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Search from './components/Search';
import './App.css'
import ListBuses from './components/ListBuses';
import SeatLayout from './components/SeatLayout'
// import { useSelector } from 'react-redux';

const App = () => {

  // let users = useSelector(state => state.users);

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/buses" element={<ListBuses />} />
          <Route exact path="/seats" element={<SeatLayout />} />
        </Routes>


      </div>
    </Router>
  );
};

export default App;