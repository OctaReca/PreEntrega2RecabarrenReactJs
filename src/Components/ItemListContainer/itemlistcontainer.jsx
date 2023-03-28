import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Card from "../Card/card";
import styles from "./itemlistcontainer.module.css";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(data => {
                setProductos(data);
                const categoriasUnicas = [
                    ...new Set(data.map((producto) => producto.category)),
                ];
                setCategorias(categoriasUnicas);
            });
    }, []);

    const handleCategoriaClick = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };

    const productosFiltrados = categoriaSeleccionada
        ? productos.filter(
            (producto) => producto.category === categoriaSeleccionada
            )
        : productos;

    return (
        <section>
            <div className={styles.categoriasbtn}>
                <div><h3>¡Nuestras Categorias!</h3></div>
                {categorias.map((categoria) => (
                    <NavLink
                        key={categoria}
                        to={`/category/${categoria}`}
                        onClick={() => handleCategoriaClick(categoria)}>
                        <button className={styles.categoriasbtn}>{categoria}</button>
                    </NavLink>
                ))}
            </div>

            <div className={styles.container}>
                {productosFiltrados.map((producto) => {
                    return (
                        <Card key={producto.id} producto={producto} />
                    )
                })}
            </div>
        </section>
    );
};

export default ItemListContainer;











// import './App.css'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import { useEffect, useState } from 'react';
// import ItemListContainer from './Components/ItemListContainer/itemlistcontainer';
// import NavBar from './Components/NavBar/navbar';
// import CardDetail from './Components/CardDetail/carddetail';

// function App() {
//   const [productos, setProductos] = useState([])

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products/')
//       .then(response => response.json())
//       .then(data => {
//         setProductos(data)
//       })
//   }, [])

//   console.log(productos);

//   return (
//   <div>
//     <NavBar />
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="/home" element={<ItemListContainer productos={productos}/>} />
//       <Route path="/home/:id" element={<CardDetail />} />
//       <Route path="/category/men" element={<ItemListContainer productos={productos} category="men's clothing"/> } />
//       <Route path='/category/women' element={<ItemListContainer productos={productos} category="women's clothing"/>} />
//       <Route path='/category/electronics' element={<ItemListContainer productos={productos} category="electronics"/>} />
//       <Route path='/category/jewelery' element={<ItemListContainer productos={productos} category="jewelery"/>} />
//       <Route path="/404" element={<h1>404 Not Found</h1>} />
//     </Routes>
//   </div>
//   );
// }

// export default App;