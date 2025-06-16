import React from 'react';
import Logo from './assets/logo.png'; // Ajusta la ruta según tu estructura de carpetas

function Header({ onNavigate, currentPage }) {
  return (
   <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={Logo} alt="Logo" style={styles.logo} />
      </div>

      <nav style={styles.nav}>
        <button
          onClick={() => onNavigate('menu')}
          style={{
            ...styles.button,
            ...(currentPage === 'menu' ? styles.activeButton : {}),
          }}
        >
          Menú
        </button>
        <button
          onClick={() => onNavigate('reservas')}
          style={{
            ...styles.button,
            ...(currentPage === 'reservas' ? styles.activeButton : {}),
          }}
        >
          Reservas
        </button>
        <button
          onClick={() => onNavigate('contacto')}
          style={{
            ...styles.button,
            ...(currentPage === 'contacto' ? styles.activeButton : {}),
          }}
        >
          Contacto
        </button>
        <button
          onClick={() => onNavigate('ubicacion')}
          style={{
            ...styles.button,
            ...(currentPage === 'ubicacion' ? styles.activeButton : {}),
          }}
        >
          Ubicación
        </button>
        <button
          onClick={() => onNavigate('pedirComida')}
          style={{
            ...styles.button,
            ...(currentPage === 'pedirComida' ? styles.activeButton : {}),
          }}
        >
          Pedir Comida
        </button>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    width: '100%',
    textAlign: 'center',
    paddingBottom: '20px',
    borderBottom: '1px solid #ccc',
  },
  logoContainer: {
    width: '100%',
  },
  logo: {
    width: '100%',
    height: '150px',
    display: 'block',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    padding: '10px 0',
  },
  button: {
    backgroundColor: '#12a79d',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 16px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  activeButton: {
    backgroundColor: '#0e8f86',
  },

};


export default Header;
