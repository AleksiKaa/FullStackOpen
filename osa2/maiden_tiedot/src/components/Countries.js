const Countries = ({ countries, setFilter }) => {
    return (
        <ul>
            {countries.map(c =>
                <div>
                    <li key={c.name.common}>{c.name.common}</li>
                    <button onClick={() => setFilter(c.name.common)}>
                        show
                    </button>
                </div>
            )}
        </ul>
    )
}

export default Countries

