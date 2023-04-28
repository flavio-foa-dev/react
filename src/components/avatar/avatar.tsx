import React from 'react'
import "./avatar.css"
import IAvatar from './interface'
import {AiFillCloseCircle} from "react-icons/ai"



export default function Avatar(props:IAvatar) {
  const infosAvatar = props.infos
  return (
    <div className="container-avatar">
      <AiFillCloseCircle size={20} className="container-avatar__deleter" onClick={()=>props.deletar(infosAvatar.id)}/>
      <div className="cabecalho" style={{backgroundColor: props.corFundo}}>
       <img src={infosAvatar.img} alt="foto Perfil"/>
      </div>
      <div className="rodape">
        <hr/>
        <h4>{infosAvatar.nome}</h4>
        <h4>{infosAvatar.cargo}</h4>
      </div>
    </div>
  )
}
