"use client";

import { useAppSelector } from "@/store";
import { PokemonsGrid } from "..";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemons);

  const pokemons = Object.values(favoritePokemons);

  return (
    <div>
      {pokemons.length === 0 ? (
        <NotFavorite />
      ) : (
        <PokemonsGrid pokemons={pokemons} />
      )}
    </div>
  );
};

export const NotFavorite = () => {
  return (
    <div className="flex flex-col items-center h-[500] justify-center mt-20">
      <IoHeartOutline
        size={100}
        className="bg-red-600 justify-center items-center"
      />
      <span className="text-3xl font-semibold"> No Hay Favoritos </span>
    </div>
  );
};
