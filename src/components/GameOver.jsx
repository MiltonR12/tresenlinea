import estilos from "../sass/gameOver.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateInicio } from "../features/controlador.js";

function GameOver() {

  const dispath = useDispatch()
  const ganador = useSelector(state => state.control.ganador)

  return (
    <div className={estilos.cuerpoGame} >
      <h1 className={estilos.title} >Game Over</h1>
      <h2 className={estilos.ganador} >Ganador: <span>{ganador}</span> </h2>
      <button className={estilos.btnReiniciar} onClick={() => dispath(updateInicio(0))} >Volver a Jugar</button>
    </div>
  )
}

export default GameOver