import { useState } from 'react'
import './App.css'
import TODOList from './components/TODOList'
import AddForm from './components/AddForm'
import ModalWindow from './components/ModalWindow'

import ClearButton from './components/ClearButton'

function App() {

  return (
    <>
      <h1>TODO WITH REDUX!</h1>
      <ModalWindow />
      <TODOList />
      <ClearButton />
    </>
  )
}

export default App
