import React, { useState } from 'react';
import menu from './menuData.js';

function Menu() {
  const [abiertas, setAbiertas] = useState({});

  const toggleCategoria = (index) => {
    setAbiertas((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Nuestro Menú</h2>
      {menu.map((categoria, index) => (
        <div key={index} style={styles.section}>
          <button style={styles.sectionButton} onClick={() => toggleCategoria(index)}>
            {categoria.categoria} {abiertas[index] ? '▲' : '▼'}
          </button>
          {abiertas[index] && (
            <div>
              {categoria.items.map((item, i) => (
                <div key={i} style={styles.item}>
                  <div>
                    <strong>{item.nombre}</strong><br />
                    <small>{item.descripcion}</small>
                  </div>
                  <div style={styles.precio}>${item.precio}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    color: '#12a79d',
    marginBottom: '30px',
  },
  section: {
    marginBottom: '25px',
  },
  sectionButton: {
    backgroundColor: '#12a79d',
    color: 'white',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    padding: '10px',
    fontSize: '18px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
    marginBottom: '10px',
    padding: '0 10px',
  },
  precio: {
    fontWeight: 'bold',
    color: '#444',
  },
};

export default Menu;
