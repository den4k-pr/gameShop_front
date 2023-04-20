import Image from 'next/image'
import cards from '../Cards.module.scss'

export const Card = () => {
    return (
        <div className={cards.gameCards}>
                    <div className={cards.gameCards_card}>
                        <div className={cards.gameCards_card_top}>
                            <h3>The most popular</h3>
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
                            <h3>The cheapest</h3>
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
                            <h3>Will appear soon</h3>
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
                </div>
    )
}