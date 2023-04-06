import React, { useState } from 'react'
import Btn from '../btn/btn'
import FieldText from '../input/FieldText'
import Select from '../select/slect'
import "./form.css"
import Iform from './interface'

export default function Form(props: Iform) {


  const [card, setcard]= useState({nome:"", cargo: "", img: "",time:""})


  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    props.fn(card)
  }

  return (
    <section className="container">
      <form className="container__form" onSubmit={(handleSubmit)}>
        <h2 className="container__subtitle">Preencha os dados para criar o card </h2>
        <FieldText
          isRequired={true}
          label="Nome"
          placeholder="Digite seu nome"
          id="nome"
          name="nome"
          value={card.nome}
          fn={setcard}
          card={card}


        />
        <FieldText
          isRequired={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          id="cargo"
          name="cargo"
          value={card.cargo}
          fn={setcard}
          card={card}

        />
        <FieldText
          isRequired={false}
          label="Imagem"
          placeholder="Digite o endereco da imagem"
          id="imagem"
          name="img"
          value={card.img}
          fn={setcard}
          card={card}

        />
        <Select
          label="Time"
          options={props.times}
          value={card.time}
          fn={(e:any)=>setcard({...card, time: e.target.value})}
        />
        <Btn title = "Criar Card"/>
      </form>
    </section>
  )
}
