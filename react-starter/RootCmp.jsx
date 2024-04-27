import { AnimalTable } from "./cmps/animal-list/AnimalList.jsx";
import { Countdown } from "./cmps/count-down/Countdown.jsx";
import { SeasonImgs } from "./cmps/season-clock/SeasonImgs.jsx";
import { Watchers } from "./cmps/watchers/Watchers.jsx";

export function RootCmp() {

    return (
        <main className="content-grid">
            <h1>Exercise</h1>
            <AnimalTable />
            <SeasonImgs />
            <Countdown startFrom={200} onDone={() => {
                console.log('Done');
            }}/>
            <Watchers />
        </main>
    )
}