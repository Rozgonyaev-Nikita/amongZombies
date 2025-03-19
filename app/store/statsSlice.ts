import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { IUser } from "../types/IUser";

interface IStats {
  stats:{
    power: number,
    agility: number,
    intellect: number,
    stealth: number,
    charisma: number,
  },
  hidenStatts:{
    stamina: number,  //выносливость
    composure: number, //холоднокровие
    perception: number, //восприятие
  },
  osob: {
    
  }
}
const initialState: IStats = {
  stats:{
    power: 6,
    agility: 6,
    intellect: 6,
    stealth: 6,
    charisma: 6,
  },
  hidenStatts:{
    stamina: 6, //выносливость
    composure: 6, //холоднокровие
    perception: 6, //восприятие
  },
  osob: {
    
  }
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