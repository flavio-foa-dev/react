export default interface ITime {
  time: string;
  collorPrimary: string
  collorSecondary: string
  avatar:any
  deletar: (nome:string)=>void;
  setCorPrimary: (cor:string, nome:string)=>void;
  setCorSecondary: (cor:string, nome:string)=>void;
}