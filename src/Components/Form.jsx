

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    const newErrors = {};
    if (formData.fullName.length < 5) {
      newErrors.fullName = "Por favor, ingresa un nombre válido (mínimo 5 caracteres).";
    }
    if (!/^\S+@\S+$/.test(formData.email)) {
      newErrors.email = "Por favor, ingresa un email válido.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Datos válidos, puedes manejarlos aquí (por ejemplo, mostrarlos por consola)
      console.log(formData);
      // Mostrar mensaje de éxito
      alert ('Gracias'+formData.fullName+'te contactaremos pronto vía email.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Nombre completo"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        {errors.fullName && <p>{errors.fullName}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;

