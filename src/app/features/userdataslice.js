import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: "",
  description: "",
  intrest: "",
  mathefficiency: "",
}

export const Userdataslice = createSlice({
  name: 'dataofuser',
  initialState,
  reducers: {
    setusername: (state, action) => {
      state.username = action.payload
    },
    setdescription: (state, action) => {
      state.description = action.payload
    },
    setintrest: (state, action) => {
      state.intrest = action.payload
    },
    setmathefficiency: (state, action) => {
      state.mathefficiency = action.payload
    },
  },
})

export const { increment, decrement, setdescription, setintrest, setmathefficiency, setusername } = Userdataslice.actions

export default Userdataslice