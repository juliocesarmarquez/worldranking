import Head from 'next/head';
import styles from './Layout.module.css'

const   Layout = ({children, title = "World Ranking"}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>         
            </Head>

            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>Julio Marquez</footer>
        </div>
    )
}

export default Layout;