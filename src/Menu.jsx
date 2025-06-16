import React from 'react';
import menu from './menuData.js';

function Menu() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Nuestro Menú</h2>
      {menu.map((categoria, index) => (
        <div key={index} style={styles.section}>
          <h3 style={styles.sectionTitle}>{categoria.categoria}</h3>
          {categoria.items.map((item, i) => (
            <div key={i} style={styles.item}>
              <div>
                <strong>{item.nombre}</strong> <br />
                <small>{item.descripcion}</small>
              </div>
              <div style={styles.precio}>${item.precio}</div>
            </div>
          ))}
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
  sectionTitle: {
    fontSize: '20px',
    color: '#333',
    borderBottom: '2px solid #12a79d',
    paddingBottom: '5px',
    marginBottom: '10px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  precio: {
    fontWeight: 'bold',
    color: '#444',
  },
};

export default Menu;
