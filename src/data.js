import POKEMON from './data/pokemon/pokemon.js'; // importando la funcion que filtra desde data

export function filterPokemonType(type) { // exportando la funcion 
  if ( type == 'todos'){
      return POKEMON;
  } else {
    const resultadofiltrado = POKEMON.filter((resultadofiltrado) => resultadofiltrado.type == type);
    return resultadofiltrado;
  }
}
