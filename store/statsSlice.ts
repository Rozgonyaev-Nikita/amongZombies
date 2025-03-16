import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { IUser } from "../types/IUser";

interface IStats {
  count: number
  stats:{

  },
  hidenStatts:{

  },
  osob: {
    
  }
}
const initialState: IStats = {
  count: 0
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    changeStats(state) {
    //   console.log('привет', action.payload)
    //   state.user = action.payload;
    //   state.online = true;
      state.count += 1;
    },
    getStats(state, action: PayloadAction<string>) {
    //   state.user.rooms.push(action.payload);
    state.stats
    },
  },
});

export const { changeStats, addRoom } = statsSlice.actions;
export default statsSlice.reducer;