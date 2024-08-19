import { useParams } from 'react-router-dom';

const PokemonDetail = ({ pokemonStats }) => {
    const { name } = useParams();
    const pokemon = pokemonStats.find(p => p.name === name);

    if (!pokemon) {
        return <h2>Pokemon not found!</h2>;
    }

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <p>Weight: {pokemon.weight}</p>
            <p>Height: {pokemon.height}</p>
        </div>
    );
};

export default PokemonDetail;