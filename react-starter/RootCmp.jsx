import { AnimalTable } from "./cmps/animal-list/AnimalList.jsx";
import { Countdown } from "./cmps/count-down/Countdown.jsx";
import { SeasonImgs } from "./cmps/season-clock/SeasonImgs.jsx";

export function RootCmp() {

    return (
        <main className="content-grid">
            <h1>Exercise</h1>
            <AnimalTable />
            <SeasonImgs />
            <Countdown startFrom={10} onDone={() => {
                console.log('Done');
            }}/>
        </main>
    )
}