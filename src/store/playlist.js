import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlist: {
    value: {},
  },
  count: {
    value: 0,
  },
};

const playlist = createSlice({
  name: 'playlist',
  initialState: initialState,

  reducers: {
    addToPlaylist: (state, { payload }) => {
      state.playlist.value[payload.id] = {
        title: payload.title,
        poster: payload.poster,
        id: payload.id,
      };

      state.count.value = state.count.value + 1;
    },
  },
});

export const { addToPlaylist } = playlist.actions;

export default playlist.reducer;
