import { Link } from 'react-router-dom';

const PokemonList = ({ pokemon, pokemonStats }) => {
    const data = pokemon || pokemonStats;
    const showDetails = !!pokemonStats;  // This will be true if pokemonStats is passed

    return (
        <div>
            <h2>Pokemon List</h2>
            <ul>
                {data.map((p) => (
                    <li key={p._id}>
                        <h3>
                            <Link to={`/pokemon/${p.name}`}>
                                {p.name}
                            </Link>
                        </h3>
                        {showDetails && (
                            <>
                                <p>Weight: {p.weight}</p>
                                <p>Height: {p.height}</p>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;