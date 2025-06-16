import React from 'react';

export default function Reservas() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contacto:</h2>
      <p style={styles.text}>
        📧 <strong>Email:</strong> <a href="mailto:arrecife.restaurante@gmail.com">arrecife.restaurante@gmail.com</a>
      </p>
      <p style={styles.text}>
        ☎️ <strong>Teléfono:</strong> <a href="tel:+59844796837">4479 6837</a>
      </p>
      <p style={styles.text}>
        🕒 <strong>Horario de atención:</strong><br />
        12:00 a 16:00 hs<br />
        19:30 a 00:00 hs
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '40px auto',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '26px',
    color: '#12a79d',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '15px',
  },
};


