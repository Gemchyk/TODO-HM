import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


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


const saveToLocalStorage = (getState) => {
    const { list } = getState();
    localStorage.setItem("data", JSON.stringify(list.data));
  };
  
  export const addItemThunk = (item) => (dispatch, getState) => {
    dispatch(addItem(item));
    saveToLocalStorage(getState);
  };
  
  export const removeItemThunk = (id) => (dispatch, getState) => {
    dispatch(removeItem(id));
    saveToLocalStorage(getState);
  };
  
  export const changeIsDoneThunk = (id) => (dispatch, getState) => {
    dispatch(changeIsDone(id));
    saveToLocalStorage(getState);
  };
  
  export const saveEditThunk = (item) => (dispatch, getState) => {
    dispatch(saveEdit(item));
    saveToLocalStorage(getState);
  };
  
  export const clearDataThunk = () => (dispatch, getState) => {
    dispatch(clearData());
    saveToLocalStorage(getState);
  };


export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.data.push(action.payload);
        },
        removeItem: (state, action) => {
            state.data = state.data.filter(i => i.id != action.payload)
        },
        changeIsDone: (state, action) => {
            state.data = state.data.map(i => i.id == action.payload ? {...i, isDone: !i.isDone} : {...i});          
        },
        saveEdit: (state, action) => {
            state.data = state.data.map(i => i.id == action.payload.id ? {...i, name: action.payload.name} : {...i});          
        },
        clearData: (state) => {
            state.data = [];          
        }

    },
})


export const {addItem, removeItem, changeIsDone, clearData, saveEdit} = listSlice.actions;

export default listSlice.reducer
