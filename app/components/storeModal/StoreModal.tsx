import { useDispatch, useSelector } from "react-redux"
import { features, genre, platform, types } from '@/app/api/filters'
import styles from './StoreModal.module.scss'
import { FC, useState } from 'react'
import { PropsHeader } from '../store/Store'
import { toggleButton } from "@/app/store/reducers/usToogle"
import { RootState } from "@/app/store/store"
import cn from 'classnames'
import Image from "next/image"

export const StoreModal: FC<PropsHeader> = ({ setShow }) => {
    const [menuState, setMenuState] = useState({price: false, genre: false, features: false, types: false, platform: false});

    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.button.value);

    const handleClick = () => {
        dispatch(toggleButton());
    };

    const dasabledToggle = (event: any) => {
        event.stopPropagation(); // Остановить распространение события
        // Другие действия, которые нужно выполнить при клике на элемент
    };


    return (
        <div style={{ transform: `${!setShow ? 'translateX(-100%)' : "translateX(0%)"}` }} className={styles.modal}>
            <div className={styles.modal__content}>
                <div onClick={handleClick} className={styles.modal__content_btn}>
                    <Image 
                        style={{transform: value === false ? 'rotate(-90deg)' : 'rotate(0deg)'}} 
                        src="/arrow_modal.png" 
                        alt="" 
                        width={6}
                        height={6}
                    />
                </div>
                <div onClick={() => setMenuState(prevState => ({...prevState, price: !prevState.price}))} id="box1" className={styles.modal__content_punkt}>
                    <div className={cn(styles.modal__content_punkt_box, menuState.price === true ? styles.modal__punkt_change : "")}>
                        <Image 
                            className={styles.modal__content_punkt_img} 
                            src="/modal/Union.png" 
                            alt="" 
                            width={24}
                            height={24}
                        />
                        <p className={styles.modal__content_punkt_link}>Price</p>
                        <Image 
                            className={styles.modal__content_punkt_arrow} 
                            src="/arrow.svg" 
                            alt="" 
                            width={15}
                            height={15}
                        />
                    </div>
                    <div onClick={dasabledToggle} className={menuState.price === true ? 'modal__content_punkt__active' : styles.modal__content_punkt__list}>
                        <p className={styles.modal__content_punkt__list_link}>Under PLN 40.00</p>
                        <p className={styles.modal__content_punkt__list_link}>Under PLN 80.00</p>
                        <p className={styles.modal__content_punkt__list_link}>Under PLN 120.00</p>
                        <p className={styles.modal__content_punkt__list_link}>PLN 59.99 and above </p>
                        <p className={styles.modal__content_punkt__list_link}>Discounted</p>
                    </div>
                </div>
                <div onClick={() => setMenuState(prevState => ({...prevState, genre: !prevState.genre}))} id="box2" className={styles.modal__content_punkt}>
                    <div className={cn(styles.modal__content_punkt_box, menuState.genre === true ? styles.modal__punkt_change : "")}>
                        <Image 
                            className={styles.modal__content_punkt_img} 
                            src="/modal/Ghost.png" 
                            alt="" 
                            width={24}
                            height={24}
                        />
                        <p className={styles.modal__content_punkt_link}>Genre</p>
                        <Image 
                            className={styles.modal__content_punkt_arrow} 
                            src="/arrow.svg" 
                            alt="" 
                            width={15}
                            height={15}
                        />
                    </div>
                    <div onClick={dasabledToggle} className={menuState.genre === true ? 'modal__content_punkt__active' : styles.modal__content_punkt__list}>
                        {genre && genre.map((genr) => 
                            <p className={styles.modal__content_punkt__list_link}>{genr}</p>
                        )}
                    </div>
                </div>
                <div onClick={() => setMenuState(prevState => ({...prevState, features: !prevState.features}))} id="event" className={styles.modal__content_punkt}>
                    <div className={cn(styles.modal__content_punkt_box, menuState.features === true ? styles.modal__punkt_change : "")}>
                        <Image 
                            className={styles.modal__content_punkt_img} 
                            src="/modal/CrownSimple.png" 
                            alt="" 
                            width={24}
                            height={24}
                        />
                        <p className={styles.modal__content_punkt_link}>Features</p>
                        <Image 
                            className={styles.modal__content_punkt_arrow} 
                            src="/arrow.svg" 
                            alt="" 
                            width={15}
                            height={15}
                        />
                    </div>
                    <div onClick={dasabledToggle} className={menuState.features === true ? 'modal__content_punkt__active' : styles.modal__content_punkt__list}>
                        {features && features.map((feature) => 
                            <p className={styles.modal__content_punkt__list_link}>{feature}</p>
                        )}
                    </div>
                </div>
                <div onClick={() => setMenuState(prevState => ({...prevState, types: !prevState.types}))} id="event" className={styles.modal__content_punkt}>
                    <div className={cn(styles.modal__content_punkt_box, menuState.types === true ? styles.modal__punkt_change : "")}>
                        <Image 
                            className={styles.modal__content_punkt_img} 
                            src="/modal/mod.png" 
                            alt="" 
                            width={24}
                            height={24}
                        />
                        <p className={styles.modal__content_punkt_link}>Types</p>
                        <Image 
                            className={styles.modal__content_punkt_arrow} 
                            src="/arrow.svg" 
                            alt="" 
                            width={15}
                            height={15}
                        />
                    </div>
                    <div onClick={dasabledToggle} className={menuState.types === true ? 'modal__content_punkt__active' : styles.modal__content_punkt__list}>
                        {types && types.map((type) => 
                            <p className={styles.modal__content_punkt__list_link}>{type}</p>
                        )}
                    </div>
                </div>
                <div onClick={() => setMenuState(prevState => ({...prevState, platform: !prevState.platform}))} id="event" className={styles.modal__content_punkt}>
                    <div className={cn(styles.modal__content_punkt_box, menuState.platform === true ? styles.modal__punkt_change : "")}>
                        <Image 
                            className={styles.modal__content_punkt_img} 
                            src="/modal/bubble-chart.png" 
                            alt="" 
                            width={24}
                            height={24}
                        />
                        <p className={styles.modal__content_punkt_link}>Platform</p>
                        <Image 
                            className={styles.modal__content_punkt_arrow} 
                            src="/arrow.svg" 
                            alt="" 
                            width={15}
                            height={15}
                        />
                    </div>
                    <div onClick={dasabledToggle} className={menuState.platform === true ? 'modal__content_punkt__active' : styles.modal__content_punkt__list}>
                        {platform && platform.map((pl) => 
                            <p className={styles.modal__content_punkt__list_link}>{pl}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}