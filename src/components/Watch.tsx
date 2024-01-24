import { MouseEvent } from "react";
import moment from 'moment'

interface IWatch {
  timeAdd: number,
  name: string,
  deliteTime: MouseEvent<HTMLElement, MouseEvent>,
}

const Watch = ({timeAdd, name, deliteTime} : IWatch) => {
  return(
    <div className="watch">
    <h4 className="name-contry">{name}</h4>
    <span className="time">{moment().add(timeAdd, "hours").format('YYYY-MM-DD HH:mm:ss')}</span>
    <button className="delite-time" onClick={() => deliteTime(name)}>X</button>
  </div>
  )
}

export default Watch;