import Link from 'next/link'
import styles from './Cart.module.scss'
import cn from 'classnames'
import Image from 'next/image'


export const Cart = () => {
    
    return(
        <>
            <header className={styles.header}>
                <div className={cn('container', styles.header__content)}>
                    <Link href='/'>
                    <div className={styles.modulBtn}>
                        <img src="/arrow_modal.png" alt="" />
                        
                    </div>
                    </Link>
                    <img className={styles.header__top_left_logo} src="./logo.png" alt="" />
                </div>
            </header>
            <div className='container'>
                <div className={styles.cart}>
                    <div className={styles.cart__list}>
                        <div className={styles.cart__list_game}>
                            <Image 
                                src="/cart_img.png" 
                                alt=""
                                height={304}
                                width={202}
                            />
                            <div className={styles.cart__list_game_box}>
                                <p className={styles.cart__list_game_box_text}>Name</p>
                                <h3 className={styles.cart__list_game_box_name}>CASTLE NATHRIA HC SINGLE BOSS KILL</h3>
                                <p className={styles.cart__list_game_box_text}>Genre</p>
                                <p className={styles.cart__list_game_box_option}>PVP</p>
                                <p className={styles.cart__list_game_box_text}>Platform</p>
                                <p className={styles.cart__list_game_box_option}>Windows</p>
                                <p className={styles.cart__list_game_box_text}>Price</p>
                                <h3 className={styles.cart__list_game_box_price}>€ 25</h3>
                            </div>
                            <button className={styles.delete}><img src="./delet.png" alt="" /></button>
                        </div>
                        <div className={styles.cart__list_game}>
                            <Image 
                                src="/cart_img.png" 
                                alt=""
                                height={304}
                                width={202}
                            />
                            <div className={styles.cart__list_game_box}>
                                <p className={styles.cart__list_game_box_text}>Name</p>
                                <h3 className={styles.cart__list_game_box_name}>CASTLE NATHRIA HC SINGLE BOSS KILL</h3>
                                <p className={styles.cart__list_game_box_text}>Genre</p>
                                <p className={styles.cart__list_game_box_option}>PVP</p>
                                <p className={styles.cart__list_game_box_text}>Platform</p>
                                <p className={styles.cart__list_game_box_option}>Windows</p>
                                <p className={styles.cart__list_game_box_text}>Price</p>
                                <h3 className={styles.cart__list_game_box_price}>€ 25</h3>
                            </div>
                            <button className={styles.delete}><img src="./delet.png" alt="" /></button>
                        </div>
                    </div>
                    <div className={styles.cart__statistic}>
                        <p className={styles.cart__list_game_box_text}>Total</p>
                        <h3 className={styles.cart__list_game_box_price}>€ 25</h3>
                        <button className={styles.cart__statistic_btn}>place an order</button>
                    </div>
                </div>
            </div>
        </>
    )
}
