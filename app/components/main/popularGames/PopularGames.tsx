import Slider from 'react-slick';
import styles from '../Main.module.scss'
import cn from 'classnames'

export const PopularGames = () => {

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
            <h3 className={cn(styles.games_title, 'popularTitle')}>the most popular</h3>
            <div className={styles.games}>
            <Slider {...settings}>
                    <div className={styles.game}>
                        <div className={styles.game_img}></div>
                        <div className={styles.game_wrapper}>
                            <h3 className={styles.game_name}>Shadowland Powerleveling</h3>
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
                            <h3 className={styles.game_name}>Shadowland Powerleveling</h3>
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
                            <h3 className={styles.game_name}>Shadowland Powerleveling</h3>
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
                            <h3 className={styles.game_name}>Shadowland Powerleveling</h3>
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
                            <h3 className={styles.game_name}>Shadowland Powerleveling</h3>
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
                            <h3 className={styles.game_name}>Shadowland Powerleveling</h3>
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