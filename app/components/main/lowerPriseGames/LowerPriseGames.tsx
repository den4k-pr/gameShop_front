import styles from '../Main.module.scss'
import cn from 'classnames'
import Slider from 'react-slick';

export const LoverPriseGames = () => {

    const settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    return (
        <>
            <h3 className={cn(styles.games_title, 'loverTitle')}>with the biggest discounts</h3>
            <div className={styles.games}>
                <Slider {...settings}>
                    <div className={styles.game}>
                        <div className={styles.game_img}></div>
                        <div className={styles.game_wrapper}>
                            <h3 className={styles.game_name}>Shadowland Powerleveling 1</h3>
                            <p className={styles.game_already}>Already on boost.com</p>
                            <div className={styles.game_box}>
                                <div className={styles.game_dontBox}>
                                    <p className={styles.game_text}>Price</p>
                                    <p className={styles.game_price}>&#8364; 25</p>
                                </div>
                                <button className={styles.game_button}>Buy now</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.game}>
                        <div className={styles.game_img}></div>
                        <div className={styles.game_wrapper}>
                            <h3 className={styles.game_name}>Shadowland Powerleveling 2</h3>
                            <p className={styles.game_already}>Already on boost.com</p>
                            <div className={styles.game_box}>
                                <div className={styles.game_dontBox}>
                                    <p className={styles.game_text}>Price</p>
                                    <p className={styles.game_price}>&#8364; 25</p>
                                </div>
                                <button className={styles.game_button}>Buy now</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.game}>
                        <div className={styles.game_img}></div>
                        <div className={styles.game_wrapper}>
                            <h3 className={styles.game_name}>Shadowland Powerleveling 3</h3>
                            <p className={styles.game_already}>Already on boost.com</p>
                            <div className={styles.game_box}>
                                <div className={styles.game_dontBox}>
                                    <p className={styles.game_text}>Price</p>
                                    <p className={styles.game_price}>&#8364; 25</p>
                                </div>
                                <button className={styles.game_button}>Buy now</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.game}>
                        <div className={styles.game_img}></div>
                        <div className={styles.game_wrapper}>
                            <h3 className={styles.game_name}>Shadowland Powerleveling 4</h3>
                            <p className={styles.game_already}>Already on boost.com</p>
                            <div className={styles.game_box}>
                                <div className={styles.game_dontBox}>
                                    <p className={styles.game_text}>Price</p>
                                    <p className={styles.game_price}>&#8364; 25</p>
                                </div>
                                <button className={styles.game_button}>Buy now</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.game}>
                        <div className={styles.game_img}></div>
                        <div className={styles.game_wrapper}>
                            <h3 className={styles.game_name}>Shadowland Powerleveling 5</h3>
                            <p className={styles.game_already}>Already on boost.com</p>
                            <div className={styles.game_box}>
                                <div className={styles.game_dontBox}>
                                    <p className={styles.game_text}>Price</p>
                                    <p className={styles.game_price}>&#8364; 25</p>
                                </div>
                                <button className={styles.game_button}>Buy now</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.game}>
                        <div className={styles.game_img}></div>
                        <div className={styles.game_wrapper}>
                            <h3 className={styles.game_name}>Shadowland Powerleveling 6</h3>
                            <p className={styles.game_already}>Already on boost.com</p>
                            <div className={styles.game_box}>
                                <div className={styles.game_dontBox}>
                                    <p className={styles.game_text}>Price</p>
                                    <p className={styles.game_price}>&#8364; 25</p>
                                </div>
                                <button className={styles.game_button}>Buy now</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}