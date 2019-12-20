import POKEMON from './data/pokemon/pokemon.js'; // importando la funcion que filtra desde data

export function filterPokemonType(type) { // exportando la funcion
  if (type == 'todos') {
    return POKEMON;
  }
  const resultadoFilter = POKEMON.filter((resultadoPkn) => resultadoPkn.type.includes ( type));
  return resultadoFilter;
}
