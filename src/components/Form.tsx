import { ChangeEventHandler, FormEvent, MouseEvent } from "react";
// import SelectedList from "./selected/SelectedList";
// import { dataTimeZone } from "../db/data";
import Input from "./input/Input";

interface IFormTime {
  addTimeContry: FormEvent<HTMLFormElement>,
  handlerChange: ChangeEventHandler<HTMLInputElement>,
  handlerChangeInput: ChangeEventHandler<HTMLInputElement>,
  clickBtnAdd: MouseEvent<HTMLElement>,
}

const FormTime = ({addTimeContry, clickBtnAdd, handlerChange, handlerChangeInput} : IFormTime) => {
  return (
    <form action="form" onSubmit={addTimeContry}>
      <div className="form-container">
        <Input handlerChange={handlerChangeInput} name="Название" />
        <Input handlerChange={handlerChange} name="Временная зона" />
        {/* <SelectedList data={dataContry} name="name-contry" handlerChange={handlerChange} label="Название"/> */}
      </div>
      <button className="btn-add" onClick={clickBtnAdd}>Добавить</button>
    </form>
  )
}
export default FormTime;