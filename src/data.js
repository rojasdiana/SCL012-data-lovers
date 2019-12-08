/* Manejo de data */


import POKEMON from './data/pokemon/pokemon.js';//importando la funcion que filtra desde data
export function filterPokemonType(type) {//exportando la funcion 
 
  if( type == 'todos'){
      //devolver el POKEMON completo

      return POKEMON;
  }else{
    //hacer el filter
    let resultadofiltrado;
    resultadofiltrado = POKEMON.filter(resultadofiltrado => resultadofiltrado.type == type);
  
    return resultadofiltrado;
  }

};



