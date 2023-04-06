import React from 'react'
import "./avatar.css"
import IAvatar from './interface'


export default function Avatar(props:IAvatar) {
  const infosAvatar = props.infos
  console.log("inf", infosAvatar)
  return (
    <div className="container-avatar">
      <div className="cabecalho">
       <img src={infosAvatar.img} alt="foto Perfil"/>
      </div>
      <div className="rodape">
        <h4>{infosAvatar.nome}</h4>
        <h3>{infosAvatar.cargo}</h3>
      </div>
    </div>
  )
}
