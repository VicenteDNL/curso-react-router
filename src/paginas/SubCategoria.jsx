import React from 'react';
import { useParams } from 'react-router-dom';
import ListaPost from '../components/ListaPost';

function SubCategoria() {
    const {subcategoria} =useParams()
    return (  
        <ListaPost url={`/posts?subcategoria=${subcategoria}`}></ListaPost>
        );
}

export default SubCategoria;