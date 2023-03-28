import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemListContainer from './Components/ItemListContainer/itemlistcontainer';
import NavBar from './Components/NavBar/navbar';
import CardDetail from './Components/CardDetail/carddetail';
import Home from './Components/Home/home';

function App() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => {
        setProductos(data)
      })
  }, [])

  console.log(productos);

  return (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="products" element={<ItemListContainer productos={productos}/>} />
      <Route path="/products/:id" element={<CardDetail />} />
      <Route path="/category/men's clothing" element={<ItemListContainer productos={productos} category="men's clothing"/> } />
      <Route path="/category/men's clothing/:id" element={<CardDetail />} />
      <Route path="/category/women's clothing" element={<ItemListContainer productos={productos} category="women's clothing"/>} />
      <Route path="/category/women's clothing/:id" element={<CardDetail />} />
      <Route path='/category/electronics' element={<ItemListContainer productos={productos} category="electronics"/>} />
      <Route path="/category/electronics/:id" element={<CardDetail />} />
      <Route path='/category/jewelery' element={<ItemListContainer productos={productos} category="jewelery"/>} />
      <Route path="/category/jewelery/:id" element={<CardDetail />} />
      <Route path="/404" element={<h1>404 Not Found</h1>} />
    </Routes>
  </div>
  );
}

export default App;