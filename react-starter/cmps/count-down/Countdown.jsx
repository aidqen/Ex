const { useState, useEffect } = React 

export function Countdown({startFrom, onDone}) {
    const [countdown, setCountdown] = useState(startFrom)
    console.log(countdown);

    function updateOnInterval() {
        setInterval(() => {
            setCountdown(countdown => countdown - 1)
        }, 1000);
    }
    

    return <div className="clock">
        <h2></h2>
    </div>
}