
const { useState } = React

export function GetImg({imgSrc}) {
    const [isDark, setMode] = useState(false)
    function toggleMode() {
        setMode(isDark => !isDark)
    }

    return <img src={`../../../season-imgs/${imgSrc}.png`} 
    className={isDark ? 'dark' : ''} 
    onClick={toggleMode} /> 
}