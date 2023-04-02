import React from 'react'
import Btn from '../btn/btn'
import FieldText from '../input/FieldText'
import Select from '../select/slect'
import "./form.css"

export default function Form() {

  const times = ['Programacao', 'Front-End', 'Back-End', 'Data Science', 'UX e Design', 'mobile', 'Inocacao & gestao']

  return (
    <section className="container">
      <form className="container__form">
        <h2 className="container__subtitle">Preencha os dados para criar o card </h2>
        <FieldText label="Nome" placeholder="Digite seu nome" id="nome"/>
        <FieldText label="Cargo" placeholder="Digite seu cargo" id="cargo"/>
        <FieldText label="Imagem" placeholder="Digite o endereco da imagem" id="imagem"/>
        <Select label="Time" options={times}/>
        <Btn title = "Criar Card"/>
      </form>
    </section>
  )
}
