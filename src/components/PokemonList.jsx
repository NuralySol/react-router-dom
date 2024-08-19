import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PokemonList = ({ pokemon, pokemonStats }) => {
    // Using state to store the data
    const [data, setData] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    // Using useEffect to set the data when component mounts or props change
    useEffect(() => {
        const selectedData = pokemon || pokemonStats;
        setData(selectedData);
        setShowDetails(!!pokemonStats);  // Set showDetails based on the presence of pokemonStats
    }, [pokemon, pokemonStats]); // Dependencies: re-run effect if these change

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