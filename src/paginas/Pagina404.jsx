import React from 'react';
import imagem from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

function Pagina404() {
    return ( 
        <main className='container flex flex--centro flex--coluna'>
            <img className=' doguito-imagem' src={imagem} alt="ilustração doguito"></img>
            <h4 className='naoencontrado-texto'>Ops, Essa página não existe!</h4>
        </main>
     );
}

export default Pagina404;