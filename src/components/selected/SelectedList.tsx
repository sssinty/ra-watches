import { ChangeEventHandler } from "react"

interface ISelectedList {
  data: Array<{'name': string}> | string[],
  name: string,
  handlerChange: ChangeEventHandler<HTMLSelectElement>,
  label: string
}

const SelectedList = ({data, name, handlerChange, label} : ISelectedList) => {
  if(typeof data[0] === 'string') {
    return <>
      <label>{label}</label>
      <select name={name} id={name} onChange={handlerChange}>
        {data.map((element: any) => {
          return <option value={element}>{element}</option>
        })}
      </select>
    </>
  } else {
    return <>
      <label>{label}</label>
      <select name={name} id={name} onChange={handlerChange}>
        {data.map((element: any) => {
          for(const key in element) {
            return <option value={element[key]}>{element[key]}</option>
          }
        })}
      </select>
    </>
  }
}
export default SelectedList;