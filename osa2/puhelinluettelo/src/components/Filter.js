const Filter = ({filter, handleFilter}) => {
    return (
        <div>
            <h2>Phonebook</h2>
            filter shown with 
            <input value={filter} onChange={handleFilter} />
        </div>
    )
}

export default Filter