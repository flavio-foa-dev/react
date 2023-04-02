import React from 'react'
import FieldText from '../input/FieldText'
import "./form.css"

export default function Form() {
  return (
    <section className="container">
      <form className="container__form">
        <h2 className="container__subtitle">Preencha os dados para criar o card </h2>
        <FieldText label="Nome" placeholder="Digite seu nome" id="nome"/>
        <FieldText label="Cargo" placeholder="Digite seu cargo" id="cargo"/>
        <FieldText label="Imagem" placeholder="Digite o endereco da imagem" id="imagem"/>
      </form>
    </section>
  )
}
