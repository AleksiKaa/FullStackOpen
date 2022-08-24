import Person from "./Person"

const PhoneNumbers = ({numbers}) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {numbers.map(p => <Person key={p.name} person={p} />)}
            </ul>
        </div>
    )
}

export default PhoneNumbers