import React from 'react'
import ITime from './interface'
import Avatar from '../avatar/avatar'
import "./time.css"

export default function Time(props: ITime) {
  const avatarInfos = props.avatar

  return (
    <section className="time" style={{backgroundColor: props.collorSecondary}}>
      <h3 style={{borderColor: props.collorPrimary}}>{props.time}</h3>
      <div className="time-avatares">
        {avatarInfos.map((info ) => <Avatar infos={info}/>)}
      </div>
    </section>
  )
}
