import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import {Route, Routes} from "react-router-dom";
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Sports } from './Pages/Sports';
import PrivateRoute from './Components/PrivateRoute';
import { SportsDetail } from './Pages/SportsDetail';
import {Education} from './Pages/Education';
import { EducationDetail } from './Pages/EducationDetail';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/education" element={<PrivateRoute><Education /></PrivateRoute>}></Route>
        <Route path="/educationDetail" element={<PrivateRoute><EducationDetail /></PrivateRoute>}></Route>
        <Route path="/sports" element={<PrivateRoute><Sports /></PrivateRoute>}></Route>
        <Route path="/sportsDetail" element={<PrivateRoute><SportsDetail /></PrivateRoute>}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
       <Footer/>
    </div>
  );
}

export default App;
