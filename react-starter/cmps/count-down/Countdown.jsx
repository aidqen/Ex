const { useState, useEffect } = React

export function Countdown({ startFrom, onDone }) {
  const [countdown, setCountdown] = useState(startFrom)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (!isActive) return

    const timer = setInterval(() => {
      setCountdown(prevCount => {
        if (prevCount === 0) {
          setIsActive(false)
          onDone()
          return 0
        }
        return prevCount - 1
      })
    }, 1000)

    return () => {
        clearInterval(timer)
    }
  }, [isActive, onDone])

  return (
    <div className={`clock ${countdown <= 6 ? 'red' : ''}`}>
      <h2>{countdown}</h2>
    </div>
  )
}
