
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import {Routes,Route} from "react-router-dom";
import Cards from './Components/Cards';
import CardsDetail from './Components/CardsDetail';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Cards />} />
      <Route path='/details/:id' element={<CardsDetail />} />
      <Route path="/aboutus" element={<AboutUs/>} />
    </Routes>
    </>
  );
}

export default App;
