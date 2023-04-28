import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import "./App.css"
import Banner from './components/banner/banner'
import Form from "./components/form/form"
import Time from "./components/time/Time"
import Footer from "./components/footer/footer"

function App() {

  const timesInitial =[
    {
      id: uuidv4(),
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    },
]


const usersInitial = [
  {
    nome: "Flavio Andrade",
    img: "https://github.com/flavio-foa-dev.png",
    cargo: "Tanker",
    time: timesInitial[0].nome
  },
  {
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    img: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: timesInitial[0].nome
  },
  {
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    img: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: timesInitial[0].nome
  },
  {
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    img: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: timesInitial[0].nome
  },
  {
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    img: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: timesInitial[0].nome
  },
  {
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    img: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: timesInitial[1].nome
  },
  {
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    img: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: timesInitial[1].nome
  },
  {
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    img: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: timesInitial[1].nome
  },
  {
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    img: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: timesInitial[1].nome
  },
  {
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    img: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: timesInitial[2].nome
  },
  {
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    img: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: timesInitial[2].nome
  },
  {
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    img: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: timesInitial[2].nome
  },
  {
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    img: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: timesInitial[2].nome
  },
  {
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    img: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: timesInitial[3].nome
  },
  {
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    img: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: timesInitial[3].nome
  },
  {
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    img: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: timesInitial[3].nome
  },
  {
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    img: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: timesInitial[3].nome
  },
  {
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    img: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: timesInitial[4].nome
  },
  {
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    img: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: timesInitial[4].nome
  },
  {
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    img: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: timesInitial[4].nome
  },
  {
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    img: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: timesInitial[4].nome
  },
  {
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    img: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: timesInitial[5].nome
  },
  {
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    img: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: timesInitial[5].nome
  },
  {
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    img: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: timesInitial[5].nome
  },
  {
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    img: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: timesInitial[5].nome
  },
]



  const [users, setUsers] = useState<any>(usersInitial)
  const [times, setTimes] = useState<any>(timesInitial)


  function deleteUser(nome: string){
    setUsers(users.filter((user: any) => user.nome !== nome))
  }


  function addUser(card: object) {
    //debugger
    setUsers([...users, card])
  }

  function setcollorPrimary(collor: string, nome:string) {
    console.log("setcollorPrimary", collor, nome)
    setTimes(times.map((time:any) => {
      if (time.nome == nome){
        time.corPrimaria = collor
      }
      return time
    }))

  }

  function setcollorSecundary(collor: string, nome:string) {
    console.log("setcollorSecundary", collor, nome)
    setTimes(times.map((time: any) => {
      if (time.nome == nome){
        time.corSecundaria = collor
      }
      return time
    }))
  }
  return (
    <div className="App">
      <Banner/>
      <Form
        fn={(card:object)=> addUser(card)}
        times={times.map((time: any)=> time.nome)}
      />
      {times.map((time:any )=>
        <Time
          key={time.nome}
          time={time.nome}
          avatar={users.filter((item: { time: string }) => item.time === time.nome )}
          collorPrimary={time.corPrimaria}
          collorSecondary={time.corSecundaria}
          deletar={deleteUser}
          setCorPrimary={setcollorPrimary}
          setCorSecondary={setcollorSecundary}
        />)
      }
      <Footer/>
    </div>
  )
}

export default App
