import { FC, PropsWithChildren } from "react"
import { Footer } from "./footer/Footer"
import styles from './header/Header.module.scss'
import Link from "next/link"
import cn from 'classnames'
import Image from "next/image"

export const LayoutGm: FC<PropsWithChildren> = ({ children }) => {
    return(
        <>
            <header style={{backgroundColor: 'rgb(22 22 22)'}}>
                <div style={{ padding: '15px 0'}} className={cn('container', styles.header__top)}>
                    <div style={{display: 'flex'}} className={styles.header__top_left}>
                        <Image 
                            className={styles.header__top_left_logo} 
                            src="/logo.png" 
                            alt="" 
                            width={54}
                            height={39}
                        />
                        <ul className={styles.header__top_left_list}>
                            <li>
                                <Link className={styles.header__top_left_list_link} href='/'>Home</Link>
                            </li>
                            <li>
                                <Link className={styles.header__top_left_list_link} href='/store'>Store</Link>
                            </li>
                            <li>
                                <Link className={styles.header__top_left_list_link} href=''>Reviews</Link>
                            </li>
                            <li>
                                <Link className={styles.header__top_left_list_link} href=''>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div style={{margin: '0 0 0 auto'}} className={styles.header__top_right}>
                        <Link href='/cart'>
                            <Image
                                className={styles.header__top_right_busket}
                                src="/basket.png" alt="" 
                                width={20}
                                height={20}
                            />
                        </Link>
                        <div className={styles.header__top_right_search}>
                            <input style={{width: '220px'}} type="text" placeholder='Search' />
                            <Image
                                src="/search.png"
                                alt=""
                                width={11}
                                height={11} 
                            />
                        </div>
                        <div className={styles.header__top_right_languages}>
                            <p className={styles.header__top_right_languages_lg}>UA</p>
                            <p className={styles.header__top_right_languages_lg}>EU</p>
                        </div>
                    </div>
                </div>
            </header>
            { children }
            <Footer />
        </>
    )
}