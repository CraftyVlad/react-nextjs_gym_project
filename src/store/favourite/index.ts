import { createSlice } from '@reduxjs/toolkit';

export interface coachState {
  coaches: any[];
  update: number;
  coach: {};
}

const initialState: coachState = {
  coaches: [],
  update: 0,
  coach: {},
};

const baseURL = 'http://localhost:3001/coaches';

export const coachSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const coachID = action.payload.id;

      if (action.payload.isFavourite) {
        try {
          fetch(`${baseURL}/${coachID}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...action.payload, isFavourite: false }),
          });

          state.update = Date.now();
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          fetch(`${baseURL}/${coachID}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...action.payload, isFavourite: true }),
          });
          state.update = Date.now();
        } catch (e) {
          console.log(e);
        }
      }
    },
    getCoach: (state, action) => {
      state.coach = action.payload;
    },
  },
});

// export reducer
export const { addToFavourites, getCoach } = coachSlice.actions;
// export slice
export default coachSlice.reducer;
