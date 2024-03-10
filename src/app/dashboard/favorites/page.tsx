import { FavoritePokemons } from "@/app/pokemons";

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col ">
      <span className=" text-center text-5xl my-2 font-bold">
        Pokemons <small>Favoritos</small>
      </span>
      {/* <PokemonsGrid pokemons={[]} /> */}
      <FavoritePokemons />
    </div>
  );
}
