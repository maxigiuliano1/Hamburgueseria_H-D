import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";

import NosotrosPage from './pages/NosotrosPage';
import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import NovedadesPage from './pages/NovedadesPage';
import GaleriaPage from './pages/GaleriaPage';
import ServiciosPage from './pages/ServiciosPage';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/nosotros.html' exact component={NosotrosPage}></Route>
        <Route path='/contacto.html' exact component={ContactoPage}></Route>
        <Route path='/novedades.html' exact component={NovedadesPage}></Route>
        <Route path='/galeria.html' exact component={GaleriaPage}></Route>
        <Route path='/servicios.html' exact component={ServiciosPage}></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
