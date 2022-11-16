import { createAction, createReducer } from "@reduxjs/toolkit";

export const increament = createAction("increament/counter")
export const decreament = createAction("decreament/counter")
export const increaseAmount = createAction("increaseByAmount/counter")
export const decreaseAmount = createAction("decreaseAmount/counter")

//1.reducers
//using builder notaion
const initialState = {
    value: []
}
export const counterSlices = createReducer(initialState, builder => {
   
    builder.addCase(increament, (state, action) => {
        state.value.push(action.payload);
    })

    builder.addCase(decreament, (state, action) => {
        if (state.value > 0) {
            state.value--;
        }
    })

    builder.addCase(increaseAmount, (state, action) => {
        state.value = state.value + action.payload
    })

    builder.addCase(decreaseAmount, (state, action) => {
        if (state.value > 0) {
            state.value = state.value - action.payload
        }
    })
})
