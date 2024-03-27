

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar correctamente el componente Link


const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data); // Actualiza el estado con los datos de los usuarios
        } else {
          console.error('Error fetching users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Itera sobre la lista de usuarios y crea una tarjeta para cada uno */}
        {users.map((user) => (
          <div key={user.id} className='card'>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            {/* Agrega un enlace para ver más detalles */}
            <Link to={'/details/${user.id}'}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;

