import React, { useState } from 'react'
import estilos from '../sass/juego.module.scss';
import Casilla from './Casilla';
import Inicio from './Inicio';
import { useSelector } from "react-redux";
import GameOver from './GameOver';

function juego() {

  const inicio = useSelector(stete => stete.control.inicio)
  const uno = useSelector(state => state.control.jugadorUno)
  const dos = useSelector(state => state.control.jugadorDos)
  const [posicion, setPosicion] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])

  if (inicio == 0) {
    return <Inicio />
  }

  if (inicio == 1) {
    return (
      <div className={estilos.cuerpoJuego} >
        <div className={estilos.contTitle} >
          <h1>Jugando <br /> <span>Tres En Raya</span></h1>
        </div>
        <div className={estilos.contCasilla} >
          {
            posicion.map(item => (
              <Casilla key={item} posicion={item} />
            ))
          }
        </div>
        <div className={estilos.participantes} >
          <h2>Jugador 1: <span>{uno} </span> </h2>
          <h2>Jugador 2: <span>{dos} </span> </h2>
        </div>
      </div>
    )
  }

  if (inicio == 2) {
    return <GameOver />
  }

  return (
    <div>Not Found</div>
  )
}

export default juego