import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import {Route, Routes} from "react-router-dom";
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/Entertainment" element={<MainEntertainment />}></Route>
        <Route path="/Education" element={<Education />}></Route>
        <Route path="/Cities" element={<Cities />}></Route>
        <Route path="/Sport" element={<Sport />}></Route>
        <Route path="/Details" element={<DetailedNews />}></Route> */}
        <Route path="/Login" element={<Login />}></Route>
        {/* <Route path="/Cities/NewPage" element={<NewPage />}></Route> */}
      </Routes>
       <Footer/>
    </div>
  );
}

export default App;
