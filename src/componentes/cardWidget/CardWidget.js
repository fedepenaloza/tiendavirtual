/* IMPORTACIONES */

//Modulos

//Estilos
import './CardWidget.css'

//Componentes

//Core

/* LOGICA */
const CardWidget = (props) => {

    return (

        <div className='cart-box'>
        <span className="material-symbols-outlined">shopping_cart</span>
        <p>{props.cantidad}</p>
        
    </div>
    )

}

/* EXPORTACION */

export default CardWidget