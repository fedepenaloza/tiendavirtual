//* IMPORTACIONES */

//Modulos
//Estilos
import './Item.css'

//Componentes
//Core

/* LOGICA */
const Item = (props) => {
    
    const [nombre, categoria, precio, stock] = props.data
    return (

        <div>
            <img src="" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{categoria}</p>
                    <p className="card-text">$ {precio}</p>
                    <p className="card-text">{stock}</p>
                </div>
        </div>
    
    )

}

/* EXPORTACION */

export default Item