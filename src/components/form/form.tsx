import React from 'react'
import Btn from '../btn/btn'
import FieldText from '../input/FieldText'
import Select from '../select/slect'
import "./form.css"

export default function Form() {

  const times = ['Programacao', 'Front-End', 'Back-End', 'Data Science', 'UX e Design', 'mobile', 'Inocacao & gestao']

  function handleSubmit(e){
    e.preventDefault();
    console.log("saveeee")
  }

  return (
    <section className="container">
      <form className="container__form" onSubmit={handleSubmit}>
        <h2 className="container__subtitle">Preencha os dados para criar o card </h2>
        <FieldText isRequired={true} label="Nome" placeholder="Digite seu nome" id="nome"/>
        <FieldText isRequired={true} label="Cargo" placeholder="Digite seu cargo" id="cargo"/>
        <FieldText isRequired={false} label="Imagem" placeholder="Digite o endereco da imagem" id="imagem"/>
        <Select label="Time" options={times}/>
        <Btn title = "Criar Card"/>
      </form>
    </section>
  )
}
