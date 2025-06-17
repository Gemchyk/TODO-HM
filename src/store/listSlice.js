import { createSlice } from '@reduxjs/toolkit';


const startArr = [
    {
        id: 1,
        name: "Buba",
        isDone: false
    },
    {
        id: 2,
        name: "Buba",
        isDone: false
    },
    {
        id: 3,
        name: "Buba",
        isDone: false
    },
]


const initialState = {
    data: JSON.parse(localStorage.getItem("data")) || startArr
}

localStorage.setItem("data", JSON.stringify(initialState.data));


export const listSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.data.push(action.payload);
            localStorage.setItem("data", JSON.stringify(state.data));
        },
        removeItem: (state, action) => {
            state.data = state.data.filter(i => i.id != action.payload)
            localStorage.setItem("data", JSON.stringify(state.data));
        },
        changeIsDone: (state, action) => {
            state.data = state.data.map(i => i.id == action.payload ? {...i, isDone: !i.isDone} : {...i});
            localStorage.setItem("data", JSON.stringify(state.data));            
        },
        saveEdit: (state, action) => {
            state.data = state.data.map(i => i.id == action.payload.id ? {...i, name: action.payload.name} : {...i});
            localStorage.setItem("data", JSON.stringify(state.data));            
        },
        clearData: (state) => {
            state.data = [];
            localStorage.setItem("data", JSON.stringify(state.data));            
        }

    },
})


export const {addItem, removeItem, changeIsDone, clearData, saveEdit} = listSlice.actions;

export default listSlice.reducer
