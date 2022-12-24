import estilos from '../sass/casilla.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { updateEnd } from "../features/controlador.js";

function Casilla({posicion}) {

  const [valor, setValor] = useState('')
  const dispath = useDispatch()
  const valueEnd = useSelector(state => state.control.valueEnd);

  const handleClick = () => {
    if (valor == '') {
      if (valueEnd == '' || valueEnd == 'O') {
        setValor('X')
        dispath(updateEnd({valor: 'X', posicion}))
      } else {
        setValor('O')
        dispath(updateEnd({valor: 'O', posicion}))
      }
    }
  }

  return (
    <div className={estilos.caja} onClick={handleClick} >
      <div className={estilos.contText} >
        {valor}
      </div>
    </div>
  )
}

export default Casilla