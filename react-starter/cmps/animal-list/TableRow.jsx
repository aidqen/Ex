
export function TableRow({animal}) {
    console.log(animal);
    return <tr>
        <td>{animal.type}</td>
        <td>{animal.count}</td>
        <td><a href={`https://www.google.com/search?q= ${animal.type}`}>Search</a></td>
    </tr>
}