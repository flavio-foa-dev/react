import React from 'react'
import "./avatar.css"


export default function Avatar() {
  return (
    <div className="container-avatar">
      <div className="cabecalho">
       <img src="https://github.com/flavio-foa-dev.png" alt="foto Perfil"/>
      </div>
      <div className="rodape">
        <h4>Flavio Andrade</h4>
        <h3>Desenvolvedor</h3>
      </div>
    </div>
  )
}
