import { useState } from "react"
import "./App.css"

import Banner from './components/banner/banner'
import Form from "./components/form/form"
import Time from "./components/time/Time"

function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
  {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
  },
  {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
  },
  {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
  },
  {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
  },
  {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
  }
]



  const [users, setUsers] = useState<object[]>([])

  function addUser(card: object) {
    setUsers([...users, card])
  }

  console.log(users ,"App onde esta sendo chamado")

  return (
    <div className="App">
      <Banner/>
      <Form fn={(card:object)=> addUser(card)}/>
      {times.map(time => <Time key={time.nome} time={time.nome} collorPrimary={time.corPrimaria} collorSecondary={time.corSecundaria} />)}
    </div>
  )
}

export default App
