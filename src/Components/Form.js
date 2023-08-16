import React from 'react'
import { useState } from 'react'
import Card from './Card';

const Form = () => {

    const [nombre, setNombre] = useState("");
    const [color, setColor] = useState("");
    const [objeto, setObjeto] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nombre.length > 3 || nombre.indexOf("")===0) {
            alert("Por favor cheque que la información sea correcta")
        }
        if (color.length < 6) {
            alert("Por favor chequea que la información sea correcta")
        }
    }

    const handleNombre = (event) => {
        setNombre(event.target.value)
    }

    const handleColor = (event) => {
        setColor(event.target.value)
    }

    const hanclic = (event) => {
        setObjeto(nombre)
    }


    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type='text'
                    name='nombre'
                    placeholder='ingresa tu nombre'
                    onChange={handleNombre}
                    value={nombre}
                ></input>
                <input
                    type='text'
                    name='color'
                    placeholder='ingresa tu color'
                    onChange={handleColor}
                    value={color}
                ></input>
                <button
                    onClick={hanclic}
                >
                    ENVIAR
                </button>
            </form>
            <Card
                nombre={nombre}
                color={color}
            />

        </div>
    )
}

export default Form
