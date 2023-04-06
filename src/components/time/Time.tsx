import React from 'react'
import ITime from './interface'
import Avatar from '../avatar/avatar'
import "./time.css"

export default function Time(props: ITime) {
  const avatarInfos = props.avatar

  return (
    // avatarInfos.length > 0 &&
    (avatarInfos.length > 0) ?
    <section className="time" style={{backgroundColor: props.collorSecondary}}>
      <h3 style={{borderColor: props.collorPrimary}}>{props.time}</h3>
      <div className="time-avatares">
        {avatarInfos.map((info: any ) => <Avatar corFundo={props.collorPrimary} infos={info} key={info.nome}/>)}
      </div>
    </section>
    : null
  )
}
