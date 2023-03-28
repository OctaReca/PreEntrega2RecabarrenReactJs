import styles from './navbar.module.css';
import CartWidget from '../CartWidget/cartwidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ productos, setCategoriaSeleccionada }) => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <NavLink to={"/Home"} onClick={() => setCategoriaSeleccionada("")} className={styles.items}>
                        Moda Urbana
                    </NavLink>
                </div>
                <div className={styles.menu}>
                    <NavLink to="/home" className={styles.items}>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/products" className={styles.items}>
                        <p>Productos</p>
                    </NavLink>
                </div>
                <div>
                    <a className={styles.nav_link} href="#">
                        <CartWidget />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;