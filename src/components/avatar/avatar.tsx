import React from 'react'
import "./avatar.css"
import IAvatar from './interface'


export default function Avatar(props:IAvatar) {
  const infosAvatar = props.infos
  return (
    <div className="container-avatar">
      <div className="cabecalho" style={{backgroundColor: props.corFundo}}>
       <img src={infosAvatar.img} alt="foto Perfil"/>
      </div>
      <div className="rodape">
        <h4>{infosAvatar.nome}</h4>
        <h3>{infosAvatar.cargo}</h3>
      </div>
    </div>
  )
}
