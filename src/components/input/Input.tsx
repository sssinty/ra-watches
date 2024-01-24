import { ChangeEventHandler } from "react";

interface IInput {
  name: string,
  handlerChange: ChangeEventHandler<HTMLInputElement>,
  type: string
}

const Input = ({name, handlerChange, type} : IInput) => {
  return <> 
    <label>{name}</label>
    <input type={type} onChange={handlerChange} />
  </>
}

export default Input;