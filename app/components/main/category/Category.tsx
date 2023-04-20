import { categories } from '@/app/api/categori'
import styles from '../Main.module.scss'

export const Category = () => {
    return (
        <div className={styles.categories}>
            {categories && categories.map((category, index) =>
                <button key={index} className={styles.categories__punkt}>{category}</button>
            )}
        </div>
    )
}