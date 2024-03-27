
import React from "react";

const Card = ({ name, username, id }) => {

  const addFav = () => {
  // Obtener datos del localStorage (si existen)
  const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Crear un objeto con la información del dentista
  const dentistInfo = { id, name, username }; // Asegúrate de tener estas variables disponibles

  // Agregar el dentista a la lista de favoritos
  existingFavorites.push(dentistInfo);

  // Guardar la lista actualizada en el localStorage
  localStorage.setItem("favorites", JSON.stringify(existingFavorites));
};


return (
  <div className="card">
    <h3>{name}</h3>
    <p>Username: {username}</p>
    <button onClick={addFav} className="favButton">
      Add fav
    </button>
    
  </div>
)

  }
  
  export default Card;
  
