import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jugadorUno: '',
  jugadorDos: '',
  inicio: 0,
  vector: ['', '', '', '', '', '', '', '', ''],
  valueEnd: '',
  ganador: 'Ninguno'
}

const buscarGanador = (array, comparar) => {
  for (let i = 0; i < 9; i = i + 3) {
    if (array[i] == comparar && array[i + 1] == comparar && array[i + 2] == comparar) {
      return 2;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (array[i] == comparar && array[i + 3] == comparar && array[i + 6] == comparar) {
      return 2;
    }
  }

  if (array[0] == comparar && array[4] == comparar && array[8] == comparar) {
    return 2;
  }

  if (array[2] == comparar && array[4] == comparar && array[6] == comparar) {
    return 2;
  }

  return 1;
}

const verificarVector = (array) => {
  return array.indexOf('')
}

export const controladorSlice = createSlice({
  name: 'controlar',
  initialState,
  reducers: {
    addName: (state, action) => {
      state.jugadorUno = action.payload.jugadorUno;
      state.jugadorDos = action.payload.jugadorDos;
      state.inicio = action.payload.inicio;
    },
    updateEnd: (state, action) => {
      state.valueEnd = action.payload.valor
      state.vector[action.payload.posicion] = action.payload.valor
      state.inicio = buscarGanador(state.vector, state.valueEnd)
      if (state.inicio == 2) {
        state.ganador = state.valueEnd == 'X' ? state.jugadorUno : state.jugadorDos
      }
      if (verificarVector(state.vector) == -1) {
        state.inicio = 2
        state.ganador = 'Ninguno'
      }
    },
    updateInicio: (state, action) => {
      state.inicio = action.payload
      state.vector = ['', '', '', '', '', '', '', '', '']
      state.valueEnd = ''
    },
  }
})

export const { addName, updateEnd, updateInicio } = controladorSlice.actions;

export default controladorSlice.reducer;