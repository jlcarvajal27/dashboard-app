"use client";

import Link from "next/link";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { SimplePokemon } from "../interfaces/simple-pokemons";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "@/store/pokemon/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonsCard = ({ pokemon }: Props) => {
  const { name, id } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons[id]);
  const dispacth = useDispatch();

  const onToggle = () => {
    dispacth(toggleFavorite(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className=" flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            width={120}
            height={120}
            priority={false}
          />
          <p className="pt-2 text-lg font-bold text-gray-50 capitalize">
            {name}
          </p>

          <div className="mt-5">
            <Link
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              href={`/dashboard/pokemon/${name}`}
            >
              Mas Inf..
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
          >
            <div className="text-red-600 items-center">
              {isFavorite ? (
                <IoHeart size={30} />
              ) : (
                <IoHeartOutline size={30} />
              )}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Es Favorito" : " No es favorito"}
              </p>
              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
