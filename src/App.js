import React, { useState } from 'react';
import Menu from './Menu.jsx'
import Reservas from './Reservas.jsx'
import Contacto from './Contacto.jsx'
import Ubicacion from './Ubicacion.jsx'
import PedirComida from './PedirComida.jsx'
import Header from './Header.jsx';


function App() {
  const [page, setPage] = useState('menu');

  return (
    <div>
      <Header onNavigate={setPage} currentPage={page}/>
      {page === 'menu' && <Menu />}
      {page === 'reservas' && <Reservas />}
      {page === 'contacto' && <Contacto />}
      {page === 'ubicacion' && <Ubicacion />}
      {page === 'pedirComida' && <PedirComida />}
    </div>
  );
}

export default App;
