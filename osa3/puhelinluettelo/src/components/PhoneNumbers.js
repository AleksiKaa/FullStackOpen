import Person from "./Person"

const PhoneNumbers = ({numbers, removePerson}) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {numbers.map(p => <Person key={p.name} person={p} removePerson={removePerson} />)}
            </ul>
        </div>
    )
}

export default PhoneNumbers