import { CardCatalog } from './cardCatalog/CardCatalog'
import { Card } from './cards/Card'
import { LastCard } from './cards/LastCard'
import { LoverPriseGames } from './lowerPriseGames/LowerPriseGames'
import { NewGames } from './newGames/NewGames'
import { PopularGames } from './popularGames/PopularGames'

export const Main = () => {

    return (
        <main>
            <div className="container">
                <LoverPriseGames />
                <Card />
                <NewGames />
                <LastCard/>
                <PopularGames />
                <CardCatalog />
            </div>
        </main>
    )
}