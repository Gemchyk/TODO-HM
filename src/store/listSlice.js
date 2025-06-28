import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const startArr = [
  { id: 1, name: "Buba", isDone: false },
  { id: 2, name: "Buba1", isDone: false },
  { id: 3, name: "Buba2", isDone: false },
]

const initialState = {
  data: JSON.parse(localStorage.getItem("data")) || startArr
}

localStorage.setItem("data", JSON.stringify(initialState.data))

const saveToLocalStorage = (getState) => {
  const { list } = getState()
  localStorage.setItem("data", JSON.stringify(list.data))
}

export const addItemThunk = createAsyncThunk(
  "list/addItem",
  async (item, thunkAPI) => {
    thunkAPI.dispatch(addItem(item))
    saveToLocalStorage(thunkAPI.getState)
  }
)

export const removeItemThunk = createAsyncThunk(
  "list/removeItem",
  async (id, thunkAPI) => {
    thunkAPI.dispatch(removeItem(id))
    saveToLocalStorage(thunkAPI.getState)
  }
)

export const changeIsDoneThunk = createAsyncThunk(
  "list/changeIsDone",
  async (id, thunkAPI) => {
    thunkAPI.dispatch(changeIsDone(id))
    saveToLocalStorage(thunkAPI.getState)
  }
)

export const saveEditThunk = createAsyncThunk(
  "list/saveEdit",
  async (item, thunkAPI) => {
    thunkAPI.dispatch(saveEdit(item))
    saveToLocalStorage(thunkAPI.getState)
  }
)

export const clearDataThunk = createAsyncThunk(
  "list/clearData",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(clearData())
    saveToLocalStorage(thunkAPI.getState)
  }
)

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload)
    },
    removeItem: (state, action) => {
      state.data = state.data.filter(i => i.id != action.payload)
    },
    changeIsDone: (state, action) => {
      state.data = state.data.map(i => i.id == action.payload ? { ...i, isDone: !i.isDone } : { ...i })
    },
    saveEdit: (state, action) => {
      state.data = state.data.map(i => i.id == action.payload.id ? { ...i, name: action.payload.name } : { ...i })
    },
    clearData: (state) => {
      state.data = []
    }
  }
})

export const { addItem, removeItem, changeIsDone, clearData, saveEdit } = listSlice.actions
export default listSlice.reducer
