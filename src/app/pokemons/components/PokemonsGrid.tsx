import { SimplePokemon } from "../interfaces/simple-pokemons";
import { PokemonsCard } from "./PokemonsCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex gap-10 items-center justify-center flex-wrap">
      {pokemons.map((pokemon) => (
        <PokemonsCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
