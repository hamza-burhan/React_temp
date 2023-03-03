import {createSlice} from "@reduxjs/toolkit"

const formSlice = createSlice({
    name:'formFeature',
    initialState:{
        name:'hamza',
        age:12
    },
    reducers:{
        func:(state,action)=>{
            state.name = 'burhan'
        }
    }
})
export default formSlice.reducer
export const {func} = formSlice.actions