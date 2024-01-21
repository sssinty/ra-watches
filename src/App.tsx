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

  const handlerChange = (event : ChangeEventHandler<HTMLSelectElement>) : void => {
    setTimeZone(event.target.value)
  }

  const handlerChangeInput = (event : ChangeEventHandler<HTMLInputElement>) : void => {
    setName(event.target.value)
  }

  const clickBtnAdd = () : void => {
    if(timeZone) {
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
        <FormTime addTimeContry={addTimeContry} clickBtnAdd={clickBtnAdd} handlerChange={handlerChange} handlerChangeInput={handlerChangeInput}/>
        {state.map((element, id) =>{
          for(const key in element) {
            return <Watch deliteTime={deliteTime} name={key} time={element[key]} key={id} />
          }
        })}  
    </div>
  )
}

export default App
