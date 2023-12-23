import React, { useForm } from 'react-hook-form';
import "./agenda.css";

const Agenda = () => {

  const { register, handleSubmit } = useForm();

  const enviar = (datos) => {
    console.log(datos);
  }

  return (
    <div className='container-agenda'>
      <h1>Reservar una mesa</h1>
      <form className='form' onSubmit={handleSubmit(enviar)}>
        <input type="text" placeholder='Ingrese su nombre' {...register("nombre")} required/>
        <input type="email" placeholder='Ingrese su email' {...register("email")} required/>        
        <input type="date" name="date" {...register("día")} required/>
        <select name="horario" {...register("horario")} required>
          <option value="hour-select">Horario</option>
          <option value="11">16:00</option>
          <option value="11">16:30</option>
          <option value="11">17:00</option>
          <option value="11">17:30</option>
          <option value="11">18:00</option>
          <option value="11">18:30</option>
          <option value="11">19:00</option>
          <option value="11">19:30</option>
          <option value="11">20:00</option>
        </select>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )  
}

export default Agenda