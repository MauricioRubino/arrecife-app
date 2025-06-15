import React, { useState } from 'react';

export default function Reservas() {
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
    // Aquí puedes enviar los datos a un backend o API
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} required />
      <input name="telefono" placeholder="Teléfono" onChange={handleChange} required />
      <input name="fecha" type="date" onChange={handleChange} required />
      <input name="hora" type="time" onChange={handleChange} required />
      <input name="personas" type="number" min="1" value={form.personas} onChange={handleChange} required />
      <button type="submit">Reservar</button>
    </form>
  );
}
