// import React from 'react'
import { addWatcher, getWatchers } from '../../services/watchers.service.js'

const { useEffect, useState } = React

export function Watchers() {
  const [watchers, setWatchers] = useState([])

  useEffect(() => {
    setWatchers(getWatchers())
  }, [])

  function onAddWatcher() {
    const firstName = prompt("What is your actor's first name?")
    const lastName = prompt("What is your actor's last name?")
    const movies = prompt('What movies did he participate in?')
    addWatcher({ firstName, lastName, movies })

    setWatchers(getWatchers())
    console.log(watchers);
  }

  return (
    <div className="watchers-container">
      <button className="add-watcher" onClick={onAddWatcher}>
        Add Watcher
      </button>
      <div className="watchers">
        {watchers.map(watcher => {
          return (
            <div key={watcher.id} className="watcher">
              <h2>{watcher.fullName}</h2>
              <button>X</button>
              <button>Select</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
