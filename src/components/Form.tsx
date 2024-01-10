import { ChangeEventHandler, FormEvent, MouseEvent } from "react";
// import Input from "./selected/Input";
import SelectedList from "./selected/SelectedList";
import { dataContry, dataTimeZone } from "../db/data";

interface IFormTime {
  addTimeContry: FormEvent<HTMLFormElement>,
  handlerChange: ChangeEventHandler<HTMLSelectElement>,
  clickBtnAdd: MouseEvent<HTMLElement>,

}

const FormTime = ({addTimeContry, clickBtnAdd, handlerChange} : IFormTime) => {
  return (
    <form action="form" onSubmit={addTimeContry}>
      <div className="form-container">
        <SelectedList data={dataContry} name="name-contry" handlerChange={handlerChange} label="Название"/>
        <SelectedList data={dataTimeZone} name="time-zone" handlerChange={handlerChange} label="Временная зона"/>
      </div>
      <button className="btn-add" onClick={clickBtnAdd}>Добавить</button>
    </form>
  )
}
export default FormTime;