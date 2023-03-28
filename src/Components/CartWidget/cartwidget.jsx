import styles from "./cartwidget.module.css";

const cartwidget = () => {
    return (
        <>
        <i className="bi bi-cart3" ></i>
        <span className={styles.cart_items_total}>0</span>
        </>
    );
};

export default cartwidget;