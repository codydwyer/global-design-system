import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

import { ICharacter } from '~/types';
import { createBlankCharacter } from './createBlankCharacter';

export interface CharactersState {
  list: ICharacter[];
  active?: ICharacter;
}

const items = localStorage.getItem('characters') !== null ? JSON.parse(localStorage.getItem('characters')!) : [];

const initialState: CharactersState = {
  list: items,
  active: undefined,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    createCharacter(state, action: PayloadAction<ICharacter>) {
      const character = createBlankCharacter(action.payload);
      state.list.push(character);
      localStorage.setItem('characters', JSON.stringify(state.list));
    },
    deleteCharacter(state, action: PayloadAction<ICharacter>) {
      const index = state.list.indexOf(action.payload);
      state.list.splice(index, 1);

      localStorage.setItem('characters', JSON.stringify(state.list));
    },
    updateCharacter(state, action: PayloadAction<ICharacter>) {
      const index = state.list.indexOf(action.payload);
      state.list.splice(index, 1, action.payload);

      localStorage.setItem('characters', JSON.stringify(state.list));
    },
    selectCharacter(state, action: PayloadAction<ICharacter>) {
      state.active = action.payload;
    },
  },
});

export const { createCharacter, deleteCharacter, updateCharacter, selectCharacter } = charactersSlice.actions;

export const selectCharacters = (state: RootState) => state.characters.list;
export const selectCharacterById = (state: RootState, characterId: string) =>
  state.characters.list.find((character) => character.id === characterId);
export const selectActiveCharacter = (state: RootState) => state.characters.active;

export default charactersSlice.reducer;
