import React from 'react';

export default function Menu() {
  const platos = [
    { nombre: "Milanesa", descripcion: "Con papas fritas", precio: 10 },
    { nombre: "Ensalada César", descripcion: "Lechuga, pollo, aderezo", precio: 8 },
  ];

  return (
    <div>
      <h2>Menú</h2>
      {platos.map((plato, i) => (
        <div key={i}>
          <h3>{plato.nombre}</h3>
          <p>{plato.descripcion}</p>
          <p>${plato.precio}</p>
        </div>
      ))}
    </div>
  );
}
