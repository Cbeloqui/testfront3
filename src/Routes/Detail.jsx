import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importa Axios

const Detail = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Hacer la solicitud a la API con el ID del usuario
    axios.get('https://jsonplaceholder.typicode.com/users/${match.params.id')
      .then((response) => setUser(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [match.params.id]);

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Detalle del Usuario</h1>
      <p>Nombre: {user.name}</p>
      <p>Correo electrónico: {user.email}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Sitio web: {user.website}</p>
    </div>
  );
};

export default Detail;


