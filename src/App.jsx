import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(1)
  const [mostrarDiv, setMostrarDiv] = useState(false)
  const [miObjecto, setMiObjecto] = useState({
    nombre: "Juan",
    apellido: "Silva"
  })

  const [miArray, setMiArray] = useState(["Opciones1", "Opciones2", "Opciones3"])

  const [nombreInput, setNombreInput] = useState("")
  const [apellidoInput, setApellidoInput] = useState("")

  const [valueForm, setValueForm] = useState({
    nombrex: "",
    apellido: "",
    edad: ""
  })


  const onSuma = () => {
    setContador(contador + 1)
    //           1 + 1 = 2
    //           2 + 1 = 3
    //           3 + 1 = 4
    //            .......
  }

  const onResta = () => {
    if (contador === 1) return
    setContador(contador - 1)
    //           1 - 1 = 0
    //           2 - 1 = 1
    //           3 - 1 = 2
    //            .......
  }

  const onReset = () => {
    setContador(1)
    //          1
  }

  const onMostrar = () =>{
    setMostrarDiv(!mostrarDiv)
    //             true => false
    //            falase = true
  }

  const onChangeObjecto = () =>{
    //primera es la cutre no se utiliza
    setMiObjecto({
      nombre: "Juan",
      apellido: "CAMBIE APELLIDO"
    })
    //utilizar el nombre del estado con desestructuracion
    setMiObjecto({
      ...miObjecto, apellido: "CAMBIA APELLIDO SEGUNDA FORMA"
    })
    //utilizando el prevState
    setMiObjecto(prevState => ({
      ...prevState,
      apellido: "CAMBIA APELLIDO TERCERA FORMA FORMA"
    }))
  }


  const onAddMiArray = () =>{
    setMiArray([...miArray, "nuevo valor"])
    setMiArray(prevState => [...prevState, "nuevo valor con prevState"])
  }

  const onEditArray = () =>{
    setMiArray(prevState => {
      const nuevoArray = [...prevState]
      nuevoArray[1] = "VALOR EDITADO"
      return nuevoArray
    })
  }

  const handleOnchageInput = (event) =>{
    console.log("evento",  event)
    setNombreInput(event.target.value)
  }

  const handleOnchageInput2 = (event) =>{
    console.log("evento",  event)
    setApellidoInput(event.target.value)
  }

  const onChangeInputs = (event) =>{
    console.log(event)

    setValueForm({
      ...valueForm,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <h1>HOOK EN REACT</h1>
      <p>USESTATE</p>
      <p> El numero es {contador}</p>
      <button onClick={onSuma}>+1</button>
      <button onClick={onReset}>Reset</button>
      {/**
       * <button onClick={()=>setContador(contador - 1)}>
          -1
      </button>
       */}
      <button onClick={onResta}>-1 </button>
       
       <hr />

      <button onClick={onMostrar}>Mostrar</button>

      {
        mostrarDiv === true ? 
        (<div>
          <h2>Soy un renderizado Condicional</h2>
        </div>) : (<p>Debes precionar el boton</p>)
      }
      
      <hr />

      <p>EL nombre es {miObjecto.nombre}</p>
      <p>EL apellido es {miObjecto.apellido}</p>

      <button onClick={onChangeObjecto}>Cambiar Apellido</button>


      <div>
        <hr />

          <ul>
            {miArray.map((miarray)=>(
              <li>{miarray}</li>
            ))}
          </ul>
          <button onClick={onAddMiArray}>Agregar</button>
          <button onClick={onEditArray}>Editar indice 0</button>
      </div>


      <hr />


      <div>
          <form>
              <input onChange={onChangeInputs} type="text" name='nombrex' placeholder='nombre' />
              <input onChange={onChangeInputs} type="text" name='apellido' placeholder='apellido' />
              <input onChange={onChangeInputs} type="text" name='edad' placeholder='edad' />
          </form>
          <p>{valueForm.nombre}</p>
          <p>{valueForm.apellido}</p>
          <p>{valueForm.edad}</p>
      </div>

    </div>
  )
}

export default App
