import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContainer}>
                <h1>¡Welcome to the largest urban clothing store in Argentina!</h1>
                <p>¡Here you can find clothes with the highest quality in the textile market!</p>
            </div>
        </div>
    );
};

export default Home;