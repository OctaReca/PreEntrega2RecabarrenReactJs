import { Link } from 'react-router-dom';
import styles from './card.module.css';

const Card = ({producto}) => {
    return (
    <Link to={`${producto.id}`}>
        <div className={styles.card}>
            <img src={producto.image} alt={producto.title} className={styles.img}/>
            <h3 className={styles.title}> {producto.title}</h3>
            <p className={styles.price}> ${producto.price}</p>
            <button className={styles.btn}>Comprar</button>
        </div>
    </Link>
    )
};

export default Card;