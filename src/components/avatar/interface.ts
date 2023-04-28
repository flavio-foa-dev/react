export default interface IAvatar {
  infos:any
  corFundo: string
  deletar: (id:string)=>void
  fnFavoritar: (id:string)=>void

}