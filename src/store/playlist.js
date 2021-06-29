import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlist: {
    value: [],
  },
};

const playlist = createSlice({
  name: 'playlist',
  initialState: initialState,

  reducers: {
    addToPlaylist: (state, { payload }) => {
      console.log(15, state);
      console.log(16, payload);
    },
  },
});

export const { addToPlaylist } = playlist.actions;

export default playlist.reducer;
