import { ChangeEventHandler, FormEvent, MouseEventHandler, useEffect, useState } from 'react'
import FormTime from './components/Form';
import Watch from './components/Watch';
import './App.css'

function App() {

  const [name, setName] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [state, setState] = useState<any>([]);
  const [timeStatus, setTimeStatus] = useState(false) 
  let timeout;


  const addTimeContry = (event : FormEvent<HTMLFormElement>) : void => {
    event.preventDefault();
  }

  const handlerChangeTimeZone = (event : ChangeEventHandler<HTMLInputElement>) : void => {
    const ru = /[а-яё]+/i.test(event.target.value);
    ru ? alert("Используйте латиницу") : setTimeZone(event.target.value)
  }

  const handlerChangeName = (event : ChangeEventHandler<HTMLInputElement>) : void => {
    setName(event.target.value)
  }

  const clickBtnAdd = () : void => {
    if(timeZone && name) {
      setState([...state.filter(value => !value[name]), {[name]: timeZone}]);
      setTimeStatus(true)
    }
 
  }

  const deliteTime = (event : MouseEventHandler<HTMLButtonElement>) => {
    setState(state.filter(value => !value[event]));
  }

  const loaderTimer = () => {
    setTimeout(setState([...state]), 1000)
    setTimeStatus(true)
    if(state.length === 0) {
      setTimeStatus(false)
    }
    console.log('worck')
  }

  useEffect(loaderTimer, [])

  useEffect(() => {
    if(timeStatus) {
      timeout = window.setTimeout(loaderTimer, 1000)
    }
    return () => {
      window.clearTimeout(timeout)
    }

  }, [state])


  return (
    <div className='form-send'>
        <FormTime addTimeContry={addTimeContry} clickBtnAdd={clickBtnAdd} handlerChange={handlerChangeTimeZone} handlerChangeInput={handlerChangeName}/>
        {state.map((element, id) =>{
          for(const key in element) {
            return <Watch deliteTime={deliteTime} name={key} time={element[key]} key={id} />
          }
        })}  
    </div>
  )
}

export default App
