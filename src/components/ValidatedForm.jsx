import React, { useState } from 'react';
import '../styles/ValidatedForm.css';

const ValidatedForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    switch (name) {
      case 'nombre':
        if (!value) return 'El nombre es requerido';
        return '';
      case 'correo':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Correo no válido';
        return '';
      case 'password':
        if (value.length < 6) return 'La contraseña debe tener al menos 6 caracteres';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: validate(name, value) });
  };

  return (
    <div className="form-container">
      <form>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <span className="error">{errors.nombre}</span>}
        </div>
        <div>
          <label>Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
          {errors.correo && <span className="error">{errors.correo}</span>}
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
      </form>
    </div>
  );
};

export default ValidatedForm;