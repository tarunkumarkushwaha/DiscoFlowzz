import { configureStore } from '@reduxjs/toolkit'
import Userdataslice from './features/userdataslice'

export const store = configureStore({
  reducer: {
    userdata : Userdataslice.reducer
  },
})