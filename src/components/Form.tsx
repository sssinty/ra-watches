import { ChangeEventHandler, FormEvent, MouseEvent } from "react";
// import Input from "./selected/Input";
import SelectedList from "./selected/SelectedList";
import { dataTimeZone } from "../db/data";
import Input from "./input/Input";

interface IFormTime {
  addTimeContry: FormEvent<HTMLFormElement>,
  handlerChange: ChangeEventHandler<HTMLSelectElement>,
  handlerChangeInput: ChangeEventHandler<HTMLInputElement>,
  clickBtnAdd: MouseEvent<HTMLElement>,
}

const FormTime = ({addTimeContry, clickBtnAdd, handlerChange, handlerChangeInput} : IFormTime) => {
  return (
    <form action="form" onSubmit={addTimeContry}>
      <div className="form-container">
        <Input handlerChange={handlerChangeInput} name="Название" />
        {/* <SelectedList data={dataContry} name="name-contry" handlerChange={handlerChange} label="Название"/> */}
        <SelectedList data={dataTimeZone} name="time-zone" handlerChange={handlerChange} label="Временная зона"/>
      </div>
      <button className="btn-add" onClick={clickBtnAdd}>Добавить</button>
    </form>
  )
}
export default FormTime;