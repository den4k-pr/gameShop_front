import Link from 'next/link'
import styles from './Header.module.scss'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from '@/app/store/store'
import { toggleButton } from '@/app/store/reducers/usToogle'
import Image from 'next/image'

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.button.value);

    const handleClick = () => {
        dispatch(toggleButton());
    };

    const [store, setStore] = useState(true)

    const [fon, setFon] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === '/') {
            setStore(true)
            setFon('fon.png')
            setTitle('Play your favorite games with boost.com')
            setDescription('Join boost.com, upgrade your account and enjoy the game with us. Simple, fast and safe')
        } else if (router.pathname === '/store') {
            setStore(false)
            setFon('store.png')
            setTitle('wide assortment, low prices and enjoyment of the game is guaranteed!')
            setDescription('Here you will find a wide range of games for different platforms and interests.')
        }
    })

    const test = () => {}

    useEffect(() => {
        function handleScroll() {
          const scrollTop = window.pageYOffset;
          const isTop = scrollTop > 0;
          setIsScrolled(isTop);
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


      useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (router.asPath !== url) {
        window.location.href = url;
      }
    };

    const handlePopstate = () => {
      handleRouteChange('http://localhost:3000/');
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [router]);

    return(
        <header>
            <div onClick={value ? handleClick : test} style={{ backgroundImage: `url(/${fon})`, filter: value ? 'brightness(30%)' : ''}} className={styles.header}>
                {!value && <div style={{ padding: '126px 0 80px 0' }} className={cn('container', styles.header__bottom)}>
                    <h1 className={styles.header__bottom_title}>{title}</h1>
                    <p className={styles.header__bottom_text}>{description}</p>
                    {store && <Link href='/store' className={styles.header__bottom_button}>Browse All</Link>}
                </div>}
            </div>
            <div style={{ background: `${!value && !isScrolled ? 'rgba(20, 20, 20, 0.12)' : '#141414'}` }} className={styles.header__top_fon}>
                {!store && 
                <div onClick={handleClick} className={styles.modulBtn}>
                    <Image
                        src="/arrow_modal.png" 
                        alt=""
                        width={6}
                        height={6}
                    />
                </div>}
                <div style={{maxWidth: value ? '1480px' : '1140px'}} className={cn('container', styles.header__top)}>
                    <div style={{display: value ? 'none' : 'flex'}} className={styles.header__top_left}>
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
                    <div style={{margin: value ? '0 0 0 auto' : '0'}} className={styles.header__top_right}>
                        <Link href='/cart'>
                            <Image
                                className={styles.header__top_right_busket}
                                src="/basket.png" alt="" 
                                width={20}
                                height={20}
                            />    
                        </Link>
                        <div className={styles.header__top_right_search}>
                            <input style={{width: value ? '500px' : '220px'}} type="text" placeholder='Search' />
                            <Image
                                src="/search.png"
                                alt=""
                                width={11}
                                height={11} 
                            />
                        </div>
                        <Link href="/auth">
                            <Image
                                className={styles.profile_icon}
                                src="/user-regular.svg"
                                alt=""
                                width={20}
                                height={20}
                            />
                        </Link>
                        <div className={styles.header__top_right_languages}>
                            <p className={styles.header__top_right_languages_lg}>UA</p>
                            <p className={styles.header__top_right_languages_lg}>EU</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}