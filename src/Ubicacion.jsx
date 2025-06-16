import React from 'react';

function Ubicacion() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ubicación</h2>
      <p style={styles.text}>
        Nos encontramos en <strong>La Paloma, Rocha</strong>. Ubicados en el corazón del balneario, rodeados de mar, naturaleza y buena energía. ¡Te esperamos!
      </p>
      <div style={styles.mapContainer}>
        <iframe
          title="Ubicación en Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.7224004363106!2d-54.158062424455665!3d-34.661712972933564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95749cb72cf8e197%3A0x2a87d7b92b18fe5a!2sRestaurante%20Arrecife!5e0!3m2!1ses-419!2suy!4v1750037711949!5m2!1ses-419!2suy"
          width="100%"
          height="350"
          style={styles.map}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    color: '#12a79d',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    color: '#444',
    marginBottom: '20px',
  },
  mapContainer: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  map: {
    border: '0',
  },
};

export default Ubicacion;
