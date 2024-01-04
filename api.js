const base = 'https://pokeapi.co/api/v2';

export const fetchAllPokemon = () => {
  return fetch(`${base}/pokemon/?limit=151`).then((response) => response.json());
};

export const fetchPokemonDetailsByName = (name) => {
  return fetch(`${base}/pokemon/${name}`).then((response) => response.json());
};
