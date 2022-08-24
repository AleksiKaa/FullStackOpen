const Countries = ({ countries, setFilter }) => {
    return (
        <ul>
            {countries.map(c =>
                <div key={c.name.common}>
                    <li>{c.name.common}</li>
                    <button onClick={() => setFilter(c.name.common)}>
                        show
                    </button>
                </div>
            )}
        </ul>
    )
}

export default Countries

