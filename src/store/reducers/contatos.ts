import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

type TarefasState = {
  itens: Contato[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      nome: 'Leonardo Sibuya',
      telefone: '11989897676',
      email: 'leonardo@teste.com'
    },
    {
      id: 2,
      nome: 'Jade Melissa',
      telefone: '12345678900',
      email: 'jade@teste.com'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com este nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions

export default contatoSlice.reducer
