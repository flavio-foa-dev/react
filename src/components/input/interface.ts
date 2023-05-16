export default interface Iinput {
  type: string;
  label: string;
  placeholder: string;
  id: string;
  isRequired: boolean;
  value: string;
  fn: ({}) => void;
  card: object;
  name:string;
}