//Importaciones
//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';

//Estilos
import './index.css';
//Core
import reportWebVitals from './reportWebVitals';
//Componentes
import NavBar from './componentes/navbar/NavBar';
import Footer from './componentes/footer/Footer';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <NavBar/>
    
      <ItemListContainer/>
    
    <Footer/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
