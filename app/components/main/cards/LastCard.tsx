
import Image from 'next/image'
import cards from '../Cards.module.scss'

export const LastCard = () => {
    return (
        <div className={cards.gameCards}>
                    <div className={cards.gameCards_card}>
                        <div className={cards.gameCards_card_top}>
                            <h3>Sales leaders</h3>
                            <button>show more</button>
                        </div>
                        <div className={cards.gameCards_card_games}>
                            <div className={cards.gameCards_card_game}>
                                <Image 
                                    src="/game.png" 
                                    alt=""
                                    width={70}
                                    height={100} 
                                    placeholder='blur'
                                    blurDataURL='/game.png'
                                />
                                <div className={cards.gameCards_card_game_content}>
                                    <h4>Sales leaders</h4>
                                    <p className={cards.gameCards_card_game_content_already}>Already on boost.com</p>
                                    <p className={cards.gameCards_card_game_content_price}>&#8364; 25</p>
                                </div>
                            </div>
                            <div className={cards.gameCards_card_game}>
                                <Image 
                                    src="/game.png" 
                                    alt=""
                                    width={70}
                                    height={100} 
                                    placeholder='blur'
                                    blurDataURL='/game.png'
                                />
                                <div className={cards.gameCards_card_game_content}>
                                    <h4>Most often the installers</h4>
                                    <p className={cards.gameCards_card_game_content_already}>Already on boost.com</p>
                                    <p className={cards.gameCards_card_game_content_price}>&#8364; 25</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cards.gameCards_card}>
                        <div className={cards.gameCards_card_top}>
                            <h3>Most often the installers</h3>
                            <button>show more</button>
                        </div>
                        <div className={cards.gameCards_card_games}>
                            <div className={cards.gameCards_card_game}>
                                <Image 
                                    src="/game.png" 
                                    alt=""
                                    width={70}
                                    height={100} 
                                    placeholder='blur'
                                    blurDataURL='/game.png'
                                />
                                <div className={cards.gameCards_card_game_content}>
                                    <h4>Shadowland Powerleveling</h4>
                                    <p className={cards.gameCards_card_game_content_already}>Already on boost.com</p>
                                    <p className={cards.gameCards_card_game_content_price}>&#8364; 25</p>
                                </div>
                            </div>
                            <div className={cards.gameCards_card_game}>
                                <Image 
                                    src="/game.png" 
                                    alt=""
                                    width={70}
                                    height={100} 
                                    placeholder='blur'
                                    blurDataURL='/game.png'
                                />
                                <div className={cards.gameCards_card_game_content}>
                                    <h4>Shadowland Powerleveling</h4>
                                    <p className={cards.gameCards_card_game_content_already}>Already on boost.com</p>
                                    <p className={cards.gameCards_card_game_content_price}>&#8364; 25</p>
                                </div>
                            </div>
                            <div className={cards.gameCards_card_game}>
                                <Image 
                                    src="/game.png" 
                                    alt=""
                                    width={70}
                                    height={100} 
                                    placeholder='blur'
                                    blurDataURL='/game.png'
                                />
                                <div className={cards.gameCards_card_game_content}>
                                    <h4>Shadowland Powerleveling</h4>
                                    <p className={cards.gameCards_card_game_content_already}>Already on boost.com</p>
                                    <p className={cards.gameCards_card_game_content_price}>&#8364; 25</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cards.gameCards_card}>
                        <div className={cards.gameCards_card_top}>
                            <h3>Recently updated</h3>
                            <button>show more</button>
                        </div>
                        <div className={cards.gameCards_card_games}>
                            <div className={cards.gameCards_card_game}>
                                <Image 
                                    src="/game.png" 
                                    alt=""
                                    width={70}
                                    height={100} 
                                    placeholder='blur'
                                    blurDataURL='/game.png'
                                />
                                <div className={cards.gameCards_card_game_content}>
                                    <h4>Shadowland Powerleveling</h4>
                                    <p className={cards.gameCards_card_game_content_already}>Already on boost.com</p>
                                    <p className={cards.gameCards_card_game_content_price}>&#8364; 25</p>
                                </div>
                            </div>
                            <div className={cards.gameCards_card_game}>
                                <Image 
                                    src="/game.png" 
                                    alt=""
                                    width={70}
                                    height={100} 
                                    placeholder='blur'
                                    blurDataURL='/game.png'
                                />
                                <div className={cards.gameCards_card_game_content}>
                                    <h4>Shadowland Powerleveling</h4>
                                    <p className={cards.gameCards_card_game_content_already}>Already on boost.com</p>
                                    <p className={cards.gameCards_card_game_content_price}>&#8364; 25</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}