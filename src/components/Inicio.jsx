import estilos from '../sass/inicio.module.scss';
import { useDispatch } from "react-redux";
import { addName } from "../features/controlador.js";
import { useState } from 'react';

function Inicio() {

  const dispath = useDispatch()
  const [jugadorUno, setJugadorUno] = useState('')
  const [jugadorDos, setJugadorDos] = useState('')

  const handleClick = () => {
    if (jugadorUno.trim() != '' && jugadorDos.trim() != '') {
      dispath(addName({jugadorUno, jugadorDos, inicio: 1}))
    }
  }

  return (
    <div className={estilos.contInicio} >
      <div className={estilos.contenedor} >
        <h1 className={estilos.title} >TRES EN RAYA</h1>
        <input
          type="text"
          placeholder='Jugador 1'
          value={jugadorUno}
          onChange={(e) => setJugadorUno(e.target.value)}
          className={estilos.name} />
        <input
          type="text"
          placeholder='Jugador 2'
          value={jugadorDos}
          onChange={(e) => setJugadorDos(e.target.value)}
          className={estilos.name} />
        <button className={estilos.btnInicio} onClick={handleClick} >Jugar</button>
      </div>
    </div>
  )
}

export default Inicio