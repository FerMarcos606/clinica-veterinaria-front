import React, { useState } from 'react';
import Hero from '../../components/hero/Hero';
import Button from '../../components/button/Button';
import "./Contact.css"

const Contact = () => {
  // Estado del formulario
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  // Función para actualizar campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Función al enviar
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
    alert('Formulario enviado!'); // temporal
    // Aquí podrías enviar a una API o email
    setForm({ nombre: '', email: '', telefono: '', mensaje: '' }); // reset
  };

  return (
    <>
      <Hero text='Contacto' />
      <h2>Llámanos, escríbenos o ven a nuestras instalaciones</h2>

      <main className="contact-main">
        {/* Columna 1: Formulario */}
        <form onSubmit={handleSubmit} className="form">
            <input type="text" name="nombre" placeholder="Nombre*" value={form.nombre} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email*" value={form.email} onChange={handleChange} required />
            <input type="tel" name="telefono" placeholder="Teléfono*" value={form.telefono} onChange={handleChange} required />
            <textarea name="mensaje" placeholder="Mensaje" value={form.mensaje} onChange={handleChange} />
            <Button text='Mensaje' type='primary' className="form-btn"></Button>
        </form>

        {/* Columna 2: Info + Horario */}
        <div className="col-info">
            <div className="info-box">
            <div><b>Clínica</b>: 999666999</div>
            <div><b>Urgencias</b>: 666999666</div>
            <div><b>Dirección</b>: C/ Bonifacio Cobacho 32</div>
            </div>
            <div className="horario">
            <b>HORARIO:</b><br />
            Lunes a Viernes: 9.00h a 18.00h <br />
            Atención 24/7 para emergencias y pacientes hospitalizados
            </div>
        </div>

        {/* Columna 3: Mapa */}
        <div className="col-mapa">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.041!2d-5.661!3d43.545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368e5f123!2sGij%C3%B3n!5e0!3m2!1ses!2ses!4v169627"
            loading="lazy"
            title="mapa"
            ></iframe>
        </div>
        </main>

    </>
  )
}

export default Contact;
