import Image from 'next/image'
import styles from '../Main.module.scss'


export const CardCatalog = () => {
    return (
        <div className={styles.cardCatalog}>
            <div className={styles.cardCatalog_column}>
                <Image 
                    src="/katalog.jpg" 
                    alt="" 
                    width={700}
                    height={395}
                    placeholder='blur'
                    blurDataURL='/katalog.jpg'
                />
            </div>
            <div className={styles.cardCatalog_column}>
                <h3 className={styles.cardCatalog_column_title}>Explore Our Catalog</h3>
                <p className={styles.cardCatalog_column_text}> Browse by genre, features, price, and more to find your next favorite game.</p>
                <button className={styles.cardCatalog_column_button}>Browse All</button>
            </div>
        </div>
    )
}