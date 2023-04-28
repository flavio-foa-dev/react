import { v4 as uuidv4 } from 'uuid';

const timesInitial = [
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
];

const usersInitial = [
  {
    id: uuidv4(),
    favorito: true,
    nome: "Flavio Andrade",
    img: "https://github.com/flavio-foa-dev.png",
    cargo: "Tanker",
    time: timesInitial[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    img: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: timesInitial[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    img: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: timesInitial[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    img: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: timesInitial[0].nome
  },
  {
    id: uuidv4(),
    favorito: true,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    img: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: timesInitial[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    img: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: timesInitial[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    img: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: timesInitial[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    img: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: timesInitial[1].nome
  },
  {
    id: uuidv4(),
    favorito: true,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    img: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: timesInitial[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    img: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: timesInitial[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    img: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: timesInitial[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    img: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: timesInitial[2].nome
  },
  {
    id: uuidv4(),
    favorito: true,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    img: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: timesInitial[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    img: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: timesInitial[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    img: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: timesInitial[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    img: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: timesInitial[3].nome
  },
  {
    id: uuidv4(),
    favorito: true,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    img: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: timesInitial[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    img: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: timesInitial[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    img: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: timesInitial[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    img: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: timesInitial[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    img: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: timesInitial[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    img: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: timesInitial[5].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    img: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: timesInitial[5].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    img: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: timesInitial[5].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    img: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: timesInitial[5].nome
  },
];

export {timesInitial, usersInitial };
