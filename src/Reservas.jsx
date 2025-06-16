import React, { useState } from 'react';

function Reservas() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    fecha: '',
    hora: '',
    personas: 1,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Reserva creada para ${form.nombre} el ${form.fecha} a las ${form.hora}`);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Reservá tu mesa</h2>

      <div style={styles.field}>
        <label style={styles.label}>Nombre completo</label>
        <input
          name="nombre"
          placeholder="Ej: Juan Pérez"
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Número telefónico</label>
        <input
          name="telefono"
          placeholder="Ej: 099123456"
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Fecha de la reserva</label>
        <input
          name="fecha"
          type="date"
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Horario</label>
        <input
          name="hora"
          type="time"
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Cantidad de personas</label>
        <input
          name="personas"
          type="number"
          min="1"
          value={form.personas}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <button style={styles.button} type="submit">Reservar</button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '400px',
    margin: '40px auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '10px',
    fontSize: '24px',
    color: '#12a79d',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontSize: '14px',
    color: '#333',
    fontWeight: '500',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
  },
  button: {
    backgroundColor: '#12a79d',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Reservas;
