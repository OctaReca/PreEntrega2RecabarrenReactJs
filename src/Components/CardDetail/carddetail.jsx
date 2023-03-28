import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import styles from "./carddetail.module.css";

const CardDetail = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // {id: "1"}

    const getProducto = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProducto(data);
            setLoading(false);
        }   catch (error) {
            setProducto(null)
        };
    };

        useEffect(() => {
            getProducto();
        }, []);
        
        if (!producto) {
            return <Navigate to="/404" />
    }

        if (loading) {
            return <h1>Cargando...</h1>
    }
        

    return (
        <div className={styles.container}>
            <img src={producto.image} alt={producto.title} width="200" height="250"/>
            <h1 className={styles.title}> {producto.title}</h1>
            <p className={styles.description}> {producto.description}</p>
            <p className={styles.price}>$ {producto.price}</p>
            <p>{producto.category}</p>
        </div>
    )
};

export default CardDetail;