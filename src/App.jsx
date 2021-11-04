import React from 'react'
import './assets/css/base/base.css'
import Blog from './paginas/Blog'
import Sobre from './paginas/Sobre'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'
import Categoria from './paginas/Categoria'

function App() {

  return (
  
  <Router>
    <Cabecalho></Cabecalho>
    <Switch>
      <Route exact path='/blog' >
        <Blog></Blog>
      </Route>
      <Route path='/Sobre'>
        <Sobre></Sobre>
      </Route>
      <Route path='/categoria/:id'>
        <Categoria></Categoria>
      </Route>
      <Route path='/posts/:id'>
        <Post></Post>
      </Route>
      <Route>
        <Pagina404></Pagina404>
      </Route>
    </Switch>
    
  </Router>

  )
}

export default App
