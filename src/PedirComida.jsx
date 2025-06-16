import React, { useState } from 'react';

function PedirComida() {
  return (
    <div style={styles.container}>
    
      <h2 style={styles.title}>¡LO SENTIMOS!</h2>
      <p style={styles.message}>
        Estamos trabajando para agregar esta funcionalidad próximamente.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#f0f4f8',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
     margin: '40px auto 0'
  },
  image: {
    width: '150px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    color: '#12a79d',
    marginBottom: '10px',
  },
  message: {
    fontSize: '16px',
    color: '#666',
  },
};

export default PedirComida;