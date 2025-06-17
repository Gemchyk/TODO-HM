import { useState } from 'react'
import './App.css'
import TODOList from './components/TODOList'
import AddForm from './components/AddForm'
import ModalWindow from './components/ModalWindow'

import ClearButton from './components/ClearButton'

function App() {

  return (
    <>
      <ModalWindow />
      <TODOList />
      <ClearButton />
    </>
  )
}

export default App
