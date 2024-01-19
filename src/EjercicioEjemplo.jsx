import { useState } from "react"

export const EjercicioEjemplo = () => {

    const ListaTareas = [{
        id: 1,
        tarea: "Estudiar React",
        completada: false,
    }, {
        id: 2,
        tarea: "Tomar mi lonche",
        completada: false
    }, {
        id: 3,
        tarea: "Ir dormir",
        completada: false
    }]

    const [tareas, setTareas] = useState(ListaTareas)

    const [newTarea, setNewTarea] = useState({
        id: "",
        tarea: "",
        completada: false
    })

    const handleEditTarea = (id) =>{
        const actualizarTarea = tareas.map((tarea)=>(
            tarea.id === id ? {...tarea, completada: true} : tarea
        ))
        setTareas(actualizarTarea)
    }

    const handleEliminarTarea = (id) =>{
        const nuevasTareas = tareas.filter((tarea)=> tarea.id !== id)
        setTareas(nuevasTareas)
    }

    const onChangeInput = (event) =>{
        setNewTarea({
            id: tareas.length + 1,
            tarea: event.target.value,
            completada: false
        })
    }

    const onAddTarea = (event) =>{
        event.preventDefault()
        setTareas([...tareas, newTarea])
        alert("Tarea Agregada")
    }

    return (
        <div>
            <h1>LISTA DE TAREAS</h1>
            <form onSubmit={onAddTarea}>
                <input onChange={onChangeInput} type="text" name="tarea" />
                <button>Agregar Tarea</button>
            </form>

            <button onClick={()=>setTareas(ListaTareas)}>Devolver Tareas</button>
            <div>
                <ul>
                    {tareas.map((tarea)=>(
                        <li key={tarea.id}>
                            <p>{tarea.tarea}</p>
                            <p>{tarea.completada ? "HECHA": "FALTA"}</p>
                            <button onClick={()=>handleEditTarea(tarea.id)}>Completar Tarea</button>
                            <button onClick={()=>handleEliminarTarea(tarea.id)}>Eliminar Tarea</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
