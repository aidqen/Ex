import { TableRow } from "./TableRow.jsx"
import { utilService} from "../../services/util.service.js"


export function AnimalTable() {
    const animalInfo = [ 
        {type: 'Malayan Tiger', count: 787, id: utilService.makeId()}, 
        {type: 'Mountain Gorilla', count: 212, id: utilService.makeId()}, 
        {type: 'Fin Whale', count: 28, id: utilService.makeId()}, 
    ]

    return <table>
        <thead>
            <tr>
                <td>Animal</td>
                <td>Count</td>
                <td>Link</td>
            </tr>
        </thead>
        <tbody>
            {animalInfo.map(animal => <TableRow key={animal.id} animal={animal}/>)}
        </tbody>
    </table>
}