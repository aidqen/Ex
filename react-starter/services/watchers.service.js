'use strict'
import { utilService } from "../services/util.service.js";

const gWatchers = [
    { 
        id: utilService.makeId(4), 
        fullName : 'Puki Ba', 
        movies: ['Rambo', 'Rocky'] 
    },
    { 
        id: utilService.makeId(4), 
        fullName : 'Muki Ba', 
        movies: ['Rambo', 'Rocky'] 
    }
]

export function getWatchers() {
    return [...gWatchers]
}

export function addWatcher({firstName, lastName, movies}) {
    gWatchers.push(
        {
            id: utilService.makeId(4),
            fullName: `${firstName} ${lastName}`,
            movies
        }
    )
}