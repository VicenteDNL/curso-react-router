import React, { useEffect, useState}  from 'react';
import { useParams, Route, useRouteMatch, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { busca } from '../api/api';
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost';
import SubCategoria from './SubCategoria';

function Categoria() {
    const {id} = useParams()
    const {url, path} = useRouteMatch()
    const [subcategorias,setSubCategorias] = useState([])

    useEffect(()=>{
        busca(`/categorias/${id}`, (categoria)=>{
            setSubCategorias(categoria.subcategorias)
        })
    },[id])
    return (  <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>
        <ListaCategorias></ListaCategorias>
        <ul className="lista-categorias container flex">
            { subcategorias.map((sub)=>{
                return ( 
                    <li 
                    className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  
                    key={sub}>
                        <Link to={`${url}/${sub}`}>{sub}</Link>
                    </li>
                    )
            })
           
            }
        </ul>
        <Switch>
            <Route exact path={`${path}/`}>
                <ListaPost url={`/posts?categoria=${id}`}></ListaPost>
            </Route>
            <Route path={`${path}/:subcategoria`}>
                <SubCategoria></SubCategoria>
            </Route>
        </Switch>

        
       
        </> );
}

export default Categoria;