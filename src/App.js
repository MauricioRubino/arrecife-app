import React, { useState } from 'react';
import Menu from './src/Menu';
import Reservas from './src/Reservas';
import Contacto from './src/Contacto';
import Ubicacion from './src/Ubicacion';
import PedirComida from './src/PedirComida';

function App() {
  const [page, setPage] = useState('menu');

  return (
    <div>
      <nav>
        <button onClick={() => setPage('menu')}>Menú</button>
        <button onClick={() => setPage('reservas')}>Reservas</button>
        <button onClick={() => setPage('contacto')}>Contacto</button>
        <button onClick={() => setPage('ubicacion')}>Ubicación</button>
        <button onClick={() => setPage('pedirComida')}>Pedir Comida</button>
      </nav>

      {page === 'menu' && <Menu />}
      {page === 'reservas' && <Reservas />}
      {page === 'contacto' && <Contacto />}
      {page === 'ubicacion' && <Ubicacion />}
      {page === 'pedirComida' && <PedirComida />}
    </div>
  );
}

export default App;
