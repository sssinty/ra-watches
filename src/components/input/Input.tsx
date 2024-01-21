import { ChangeEventHandler } from "react";

interface IInput {
  name: string,
  handlerChange: ChangeEventHandler<HTMLInputElement>,

}

const Input = ({name, handlerChange} : IInput) => {
  return <> 
    <label>{name}</label>
    <input type="text" onChange={handlerChange} />
  </>
}

export default Input;