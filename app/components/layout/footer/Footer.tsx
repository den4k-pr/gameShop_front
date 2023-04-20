import Link from 'next/link'
import styles from './Footer.module.scss'
import { RootState } from '@/app/store/store';
import { useSelector } from "react-redux"
import Image from 'next/image';

export const Footer = () => {

    const value = useSelector((state: RootState) => state.button.value);

    return(
        <footer style={{display: value ? "none" : "block"}} className='footer'>
            <div className="container">
                <div className={styles.footer__columns}>
                    <div className={styles.footer__column}>
                        <ul className={styles.footer__column_list}>
                            <li>
                                <Link className={styles.footer__column_list_link} href=''>FAQ</Link>
                            </li>
                            <li>
                                <Link className={styles.footer__column_list_link} href=''>Reviews</Link>
                            </li>
                            <li>
                                <Link className={styles.footer__column_list_link} href=''>License Agreement</Link>
                            </li>
                            <li>
                                <Link className={styles.footer__column_list_link} href=''>Contact us</Link>
                            </li>
                            <li>
                                <Link className={styles.footer__column_list_link} href=''>Account security</Link>
                            </li>
                            <li>
                                <Link className={styles.footer__column_list_link} href=''>Refunding policy</Link>
                            </li>
                        </ul>
                    </div>
                    <Image 
                        className={styles.footer_logo} 
                        src="/footer_logo.png" 
                        alt="" 
                        width={84}
                        height={61}
                    />
                    <div className={styles.footer__column}>
                        <div className={styles.footer__column_galery}>
                            <Image 
                                src="/foot_facebook.png" 
                                alt="" 
                                width={29}
                                height={29}
                            />
                            <Image 
                                src="/foot_insta.png" 
                                alt="" 
                                width={29}
                                height={29}
                            />
                            <Image 
                                src="/foot_diskord.png" 
                                alt="" 
                                width={29}
                                height={29}
                            />
                            <Image 
                                src="/foot_skape.png" 
                                alt="" 
                                width={29}
                                height={29}
                            />
                            <Image 
                                src="/foot_telegram.png" 
                                alt="" 
                                width={29}
                                height={29}
                            />
                        </div>
                        <p className={styles.footer__column_email}>admin@nice-boost.com</p>
                    </div>
                </div>
                <p className={styles.footer__bottom}>(с) World of Warcraft, WoW, Overwatch, Hearthstone,Heroes of the Storm, Diablo 3 and Blizzard Entertainment are registered trademarks of Blizzard Entertainment Inc DESTINY 2 is registrerd tragemark of BUNGIE INC.</p>
            </div>
        </footer>
    )
}