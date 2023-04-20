

import ShadowCursor from "@/app/api/cursor/Cursor";
import { LayoutGm } from "@/app/components/layout/LayoutGm";
import { useState } from 'react'
import styles from './GamePage.module.scss'
import cn from "classnames"
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'

interface Game {
  name: string;
  price: string;
  text: string;
  video: string;
  logo: string;
  genres: string[];
  features: string[];
  description: string;
  images: string[];
  platforms: string[];
  developer: string;
  publisher: string;
  releaseDate: string;
  initialRelease: string;

  Min_OSversion: string;
  Min_CPU: string;
  Min_memory: string;
  Min_GPU: string;
  Min_directX: string;
  Min_storage: string;
  Min_soundCard: string;

  Rec_OSversion: string;
  Rec_CPU: string;
  Rec_memory: string;
  Rec_GPU: string;
  Rec_directX: string;
  Rec_storage: string;
  Rec_soundCard: string;

  languagesAudio: string;
  languagesText: string;
}

interface Props {
  game: Game;
}

const Game: NextPage<Props> = ({ game }) => {
  const [showAll, setShowAll] = useState(false)
  
  return (
    <LayoutGm>
      <ShadowCursor/>
      <div className="container">
            {game ? (
            <div className={styles.gamePage}>
                <div className={styles.gamePage__content}>
                    <h3 className={styles.gamePage__content_title}>{game.name}</h3>
                    <iframe className={styles.gamePage__content_video} width="700" height="406" src={game.video} title="Book of Demons | Review in 2 Minutes" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <p className={styles.gamePage__content_text}>{game.text}</p>
                    <div className={styles.gamePage__content_columns}>
                        <div className={styles.gamePage__content_column}>
                            <h3>Genres</h3>
                            <div className={styles.gamePage__content_column_list}>
                              {game.genres.map((genre) => 
                                <p>{genre}</p>
                              )}
                            </div>
                        </div>
                        <div className={styles.gamePage__content_column}>
                            <h3>Features</h3>
                            <div className={styles.gamePage__content_column_list}>
                              {game.features.map((feature) => 
                                <p>{feature}</p>
                              )}
                            </div>
                        </div>
                    </div>
                    <div style={{height: showAll ? 'auto' : '150px', overflow: 'hidden'}} className={styles.gamePage__content_dopInfo}>
                        <p className={styles.gamePage__content_description}>{game.description}</p>
                        <div className={styles.gamePage__content_dopInfo}>
                            {game.images.map((img) => 
                              <img src={img} alt="" />
                            )}
                        </div>
                    </div>
                    <div onClick={() => setShowAll(!showAll)} className={cn(styles.gamePage__content_hideDesck, showAll === true ? styles.gamePage__content_hideDesck_active : '')}><p className={styles.gamePage__content_hideDesck_active_p}>{showAll === true ? 'show less' : 'show more'}</p></div>
                    <h3 className={styles.gamePage__content_specifications_title}>Specifications</h3>
                    <div className={styles.gamePage__content_specifications}>
                        <div className={styles.specifications__categories}>
                            <button className={styles.specifications__categories_category}>Windows</button>
                            <button className={styles.specifications__categories_category}>Mac Os</button>
                        </div>
                        <div id='Windows' className={styles.specification}>
                            <div className={styles.specification_columns}>
                                <div className={styles.specification_column}>
                                    <h3 className={styles.specification_column_title}>Minimum</h3>
                                    <div className={styles.specification_column_box}>
                                        <h3>OS version</h3>
                                        <p>{game.Min_OSversion}</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>CPU</h3>
                                        <p>{game.Min_CPU}</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>Memory</h3>
                                        <p>{game.Min_memory}</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>GPU</h3>
                                        <p>{game.Rec_GPU}</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>DirectX</h3>
                                        <p>{game.Min_directX}</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>Storage</h3>
                                        <p>{game.Min_storage}</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>SoundCard</h3>
                                        <p>{game.Min_soundCard}</p>
                                    </div>
                                </div>
                                <div className={styles.specification_column}>
                                    <h3 className={styles.specification_column_title}>Recommended</h3>
                                    <div className={styles.specification_column_box}>
                                        <h3>OS version</h3>
                                        <p>{game.Rec_OSversion}</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>CPU</h3>
                                        <p>{game.Rec_CPU}</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>Memory</h3>
                                        <p>{game.Rec_memory}</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>GPU</h3>
                                        <p>{game.Rec_GPU}</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>DirectX</h3>
                                        <p>{game.Rec_directX}</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>Storage</h3>
                                        <p>{game.Rec_storage}</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>SoundCard</h3>
                                        <p>{game.Rec_soundCard}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.specification_column_box}>
                                <h3>Languages Supported</h3>
                                <p>Audio: {game.languagesAudio}</p>
                                <p>Text: {game.languagesText}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sitebar}>
                    <img className={styles.sitebar_image} src={game.logo} alt="" />
                    <h3 className={styles.sitebar_price}>pln {game.price}</h3>
                    <button className={styles.sitebar_buy}>Buy now</button>
                    <button className={styles.sitebar_add}>add to cart</button>
                    <div className={styles.sitebar_info}>
                        <div className={styles.sitebar_info_line}>
                            <p className={styles.sitebar_info_line_title}>Developer</p>
                            <p className={styles.sitebar_info_line_inf}>{game.developer}</p>
                        </div>
                        <div className={styles.sitebar_info_line}>
                            <p className={styles.sitebar_info_line_title}>Publisher</p>
                            <p className={styles.sitebar_info_line_inf}>{game.publisher}</p>
                        </div>
                        <div className={styles.sitebar_info_line}>
                            <p className={styles.sitebar_info_line_title}>Release Date</p>
                            <p className={styles.sitebar_info_line_inf}>{game.releaseDate}</p>
                        </div>
                        <div className={styles.sitebar_info_line}>
                            <p className={styles.sitebar_info_line_title}>Initial Release</p>
                            <p className={styles.sitebar_info_line_inf}>{game.initialRelease}</p>
                        </div>
                        <div className={styles.sitebar_info_line}>
                            <p className={styles.sitebar_info_line_title}>Platform</p>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            )
        :
        (
            <div>
                Loading...
            </div>
        )}
        </div>
    </LayoutGm>
  )
}



  
        


export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
    const { id } = params || {};
  
    try {
      const response = await axios.get<Game>(`http://localhost:4200/api/games/${id}`);
      return { props: { game: response.data } };
    } catch (error) {
      console.error(error);
      return { props: { game: {} as Game } };
    }
  };


export default Game