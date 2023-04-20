import styles from '../../main/Main.module.scss'
import cn from 'classnames'
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { fetchData } from '@/app/store/reducers/getGames';
  

export const Games = () => {
    const dispatch = useDispatch();
  const apiData = useSelector((state: RootState) => state.api);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchData());
  }, []);

    return (
        <>
            <div className={cn(styles.games, styles.store)}>
                {apiData && apiData.map((game: any) => (
                <Link href={`/store/game/` + game.id} style={{backgroundImage: `url(${game.mainImg})`}} key={game.id} className={styles.game}>
                    <div className={styles.game_wrapper}>
                        <h3 className={styles.game_name}>{game.name}</h3>
                        <p className={styles.game_already}>Already on boost.com</p>
                        <div className={styles.game_box}>
                            <div className={styles.game_dontBox}>
                                <p className={styles.game_text}>Price</p>
                                <p className={styles.game_price}>&#8364; {game.price}</p>
                            </div>
                            <button className={styles.game_button}>Buy now</button>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </>

    )
}
