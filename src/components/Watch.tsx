import { MouseEvent } from "react";
import moment from 'moment-timezone'

interface IWatch {
  time: number,
  name: string,
  deliteTime: MouseEvent<HTMLElement>,
}

const Watch = ({time, name, deliteTime} : IWatch) => {
  return(
    <div className="watch">
    <h4 className="name-contry">{name}</h4>
    <span className="time">{moment().tz(time).format('YYYY-MM-DD HH:mm:ss')}</span>
    <button className="delite-time" onClick={() => deliteTime(name)}>X</button>
  </div>
  )
}

export default Watch;