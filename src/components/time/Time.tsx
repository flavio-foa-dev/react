import React from 'react'
import ITime from './interface'
import Avatar from '../avatar/avatar'
import "./time.css"

export default function Time(props: ITime) {
  const avatarInfos = props.avatar

  return (
    // avatarInfos.length > 0 &&
    (avatarInfos.length > 0) ?
    <section className="time" style={{backgroundColor: props.collorPrimary}}>
      <input
        type="color"
        className="input-color__secundaria"
        value={props.collorPrimary}
        onChange={(e)=> props.setCorPrimary(e.target.value, props.time)}
      />
       <input
        type="color"
        className="input-color__primary"
        value={props.collorSecondary}
        onChange={(e)=> props.setCorSecondary(e.target.value, props.time)}
      />
      <h3 style={{borderColor: props.collorPrimary}}>{props.time}</h3>
      <div className="time-avatares">
        {avatarInfos.map((info: any ) => {
          return <Avatar
              corFundo={props.collorSecondary}
              infos={info}
              key={info.id}
              deletar={props.deletar}
              fnFavoritar={props.fnFavoritar}
            />
        })}
      </div>
    </section>
    : null
  )
}
