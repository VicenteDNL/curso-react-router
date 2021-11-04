import React from 'react'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'

const Blog = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias></ListaCategorias>
      <ListaPost url='/posts'></ListaPost>
    </main>
  )
}

export default Blog
