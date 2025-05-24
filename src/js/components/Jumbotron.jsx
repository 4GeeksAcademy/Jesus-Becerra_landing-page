import React from 'react';

const Jumbotron = () => {
  return (
    // bg-light: Fondo gris claro por defecto, similar al jumbotron clásico
    // p-5: Padding grande en todos los lados
    // mb-4: Margen inferior
    // rounded-3: Esquinas ligeramente redondeadas
    <div className="p-5 mb-4 bg-light rounded-3">
      {/* Contenedor para centrar el contenido dentro del jumbotron */}
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Desarrolla el Futuro: Explora el Código</h1> {/* display-5 para un título grande */}
        <p className="col-md fs-4">Sumérgete en el apasionante mundo del desarrollo de software. Descubre las últimas tendencias, herramientas esenciales y recursos para impulsar tu carrera como programador, desde principiantes hasta expertos.</p>
        <button className="btn btn-primary btn-lg" type="button">¡Empieza a Explorar!</button>
      </div>
    </div>
  );
};

export default Jumbotron;