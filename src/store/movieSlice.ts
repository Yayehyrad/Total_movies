import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MovieState {
  bannerData:  [] , 
  imageURL : string
}

const initialState: MovieState = {
  bannerData:[] ,
  imageURL : ""
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setBannerData: (state , action) => {
      state.bannerData = action.payload
    },
    setImageURL: (state , action) => {
        state.imageURL = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { setBannerData , setImageURL } = movieSlice.actions

export default movieSlice.reducer