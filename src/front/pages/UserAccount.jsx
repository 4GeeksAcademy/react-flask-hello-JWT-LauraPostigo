import React from "react";

const UserAccount = () => {
  const user = {
    nombre: "",
    email: "",
  };

  const motogp = {
    pilotoFavorito: "Marc Márquez",
    equipoActual: "Ducati Lenovo Team (2025)",
    compañeroDeEquipo: "Francesco Bagnaia",
    últimaCarrera: "GP Qatar",
    posiciónFinal: "1º",
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "650px" }}>
      <h2 className="mb-4">Mi cuenta</h2>

      <div className="card p-4 mb-4">
        <p><strong>Nombre:</strong> {user.nombre}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <h4 className="mb-3">🏍️ Detalles MotoGP</h4>

      <div className="card p-4 mb-4">
        <p><strong>Piloto favorito:</strong> {motogp.pilotoFavorito}</p>
        <p><strong>Equipo actual:</strong> {motogp.equipoActual}</p>
        <p><strong>Compañero de equipo:</strong> {motogp.compañeroDeEquipo}</p>
        <p><strong>Última carrera:</strong> {motogp.últimaCarrera}</p>
        <p><strong>Posición final:</strong> {motogp.posiciónFinal}</p>
      </div>

      <h5 className="mb-3">❤️ Sección marquista deluxe</h5>

      <div className="card p-4 bg-light">
        <p><strong>Marc Márquez</strong> ha vuelto al equipo oficial con la bestia roja de fábrica. El 93 y el 1 en el mismo box: pura dinamita.</p>
        <p>La unión de experiencia, garra y técnica con la moto más competitiva de la parrilla.</p>
        <p>🔥 “No vine a hacer amigos, vine a ganar.”</p>
      </div>
    </div>
  );
};

export default UserAccount;
