//* IMPORTACIONES */

//Modulos
import { useState } from 'react'
//Estilos

import './ItemListContainer.css'

//Componentes
import ItemList from '../itemList/ItemList.js'
//Core

/* LOGICA */
const ItemListContainer = () => {
    const [categoriaNombre, setCatgoria] = useState("")

    const categoriaAgua = () => {
        setCatgoria("Agua")
    }
    const categoriaAperitivos = () => {
        setCatgoria("Aperitivos")
    }
    const categoriaVinos = () => {
        setCatgoria("Todo")
    }
    return (
        <div>
            <div><p>aca esta la lista de bebidas</p>
                <button onClick={categoriaAgua}>Agua</button>
                <button onClick={categoriaAperitivos}>Aperitivos</button>
                <button onClick={categoriaVinos}>Todo</button>
                <ItemList categoria={categoriaNombre}/>
            </div>
        </div>
    )

}

/* EXPORTACION */

export default ItemListContainer