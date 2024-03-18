import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../types';

export interface CharactersState {
  characters: ICharacter[];
}

const items = localStorage.getItem('characters') !== null ? JSON.parse(localStorage.getItem('characters')!) : [];

const initialState = {
  characters: items,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    characterAdded(state, action: PayloadAction<ICharacter>) {
      state.characters.push(action.payload);
    },
  },
});

export default charactersSlice.reducer;
