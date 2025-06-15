import React from 'react';
import Logo from 'C:\Users\grafi\arrecife-app\public\logo.png';

function Header({ onNavigate }) {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={Logo} alt="Logo" />
      </div>
s
      <nav style={styles.nav}>
        <button onClick={() => onNavigate('menu')}>Menú</button>
        <button onClick={() => onNavigate('reservas')}>Reservas</button>
        <button onClick={() => onNavigate('contacto')}>Contacto</button>
        <button onClick={() => onNavigate('ubicacion')}>Ubicación</button>
        <button onClick={() => onNavigate('pedirComida')}>Pedir Comida</button>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    textAlign: 'center',
    paddingBottom: '20px',
    borderBottom: '1px solid #ccc',
  },
  logoContainer: {
    marginBottom: '10px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
};

export default Header;