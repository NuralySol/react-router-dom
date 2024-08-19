const PokemonList = ({ pokemon, pokemonStats }) => {
    const data = pokemon || pokemonStats;
    const showDetails = !!pokemonStats;  

    return (
        <div>
            <h2>Pokemon List</h2>
            <ul>
                {data.map((pokes) => (
                    <li key={pokes._id}>
                        <h3>{pokes.name}</h3>
                        {showDetails && (
                            <>
                                <p>Weight: {pokes.weight}</p>
                                <p>Height: {pokes.height}</p>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;