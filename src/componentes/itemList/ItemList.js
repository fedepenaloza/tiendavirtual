//* IMPORTACIONES */

//Modulos

//Estilos
import './ItemList.css'

//Componentes
import Item from '../item/Item.js'
//Core

/* LOGICA */
const ItemList = (props) => {


    const listaBebidas = [
        {
            "id": 1,
            "nombre": "coca cola",
            "categoria": "gaseosa",
            "precio": 524,
            "stock": 10
        },
        {
            "id": 2,
            "nombre": "fanta",
            "categoria": "gaseosa",
            "precio": 490,
            "stock": 10
        },
        {
            "id": 3,
            "nombre": "pritty",
            "categoria": "gaseosa",
            "precio": 465,
            "stock": 10
        },
        {
            "id": 4,
            "nombre": "schweppes",
            "categoria": "gaseosa",
            "precio": 378,
            "stock": 10
        },
        {
            "id": 5,
            "nombre": "Vino tinto malvec Alma Mora",
            "categoria": "vinos",
            "precio": 963,
            "stock": 10
        },
        {
            "id": 6,
            "nombre": "Vino tinto borgona Viñas de Balbo",
            "categoria": "vinos",
            "precio": 643,
            "stock": 10
        },
        {
            "id": 7,
            "nombre": "Vino tinto cabernet sauvignon Portillo",
            "categoria": "vinos",
            "precio": 930,
            "stock": 10
        },
        {
            "id": 8,
            "nombre": "Vino blanco Cosecha Tardía",
            "categoria": "vinos",
            "precio": 844,
            "stock": 10
        },
        {
            "id": 9,
            "nombre": "Vino blanco honey Dadá",
            "categoria": "vinos",
            "precio": 913,
            "stock": 10
        },
        {
            "id": 10,
            "nombre": "Fernet Branca",
            "categoria": "aperitivos",
            "precio": 190,
            "stock": 100
        },
        {
            "id": 11,
            "nombre": "Gancia",
            "categoria": "aperitivos",
            "precio": 811,
            "stock": 10
        },
        {
            "id": 12,
            "nombre": "Campari",
            "categoria": "aperitivos",
            "precio": 146,
            "stock": 100
        },
        {
            "id": 13,
            "nombre": "Vermouth Cinzano",
            "categoria": "aperitivos",
            "precio": 979,
            "stock": 10
        },
        {
            "id": 14,
            "nombre": "Villa del sur",
            "categoria": "aguas",
            "precio": 292,
            "stock": 10
        },
        {
            "id": 15,
            "nombre": "Villavicencio",
            "categoria": "aguas",
            "precio": 180,
            "stock": 10
        },
        {
            "id": 16,
            "nombre": "Glaciar",
            "categoria": "aguas",
            "precio": 145,
            "stock": 10
        },
        {
            "id": 17,
            "nombre": "Gin Gordon's",
            "categoria": "blancas",
            "precio": 190,
            "stock": 100
        },
        {
            "id": 18,
            "nombre": "Vodka Skyy",
            "categoria": "blancas",
            "precio": 178,
            "stock": 100
        },
        {
            "id": 19,
            "nombre": "Speed",
            "categoria": "energizante",
            "precio": 280,
            "stock": 10
        },
        {
            "id": 20,
            "nombre": "Monster",
            "categoria": "energizante",
            "precio": 310,
            "stock": 10
        }
    ]

   

    let listaPorCategoria
    let ListaDeBebidas
    if (props.categoria === "Todo") {
        listaPorCategoria = listaBebidas.map(elementos => <Item key={elementos.id} data={elementos} />)
    } else {
        listaPorCategoria = listaBebidas.filter(elementos => elementos.categoria === props.categoria)
        ListaDeBebidas = listaPorCategoria.map(elementos => <Item key={elementos.id} data={elementos} />)
    }
    return (

        <div>
            <p>lista de productos</p>
            {ListaDeBebidas}
        </div>

    )

}

/* EXPORTACION */

export default ItemList