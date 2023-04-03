import { useState } from "react"
import "./App.css"

import Banner from './components/banner/banner'
import Form from "./components/form/form"

function App() {

  const [users, setUsers] = useState<object[]>([])

  function addUser(card: object) {
    setUsers([...users, card])
  }

  console.log(users ,"App onde esta sendo chamado")

  return (
    <div className="App">
      <Banner/>
      <Form fn={(card:object)=> addUser(card)}/>
    </div>
  )
}

export default App
