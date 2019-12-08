

import { filterPokemonType } from './data.js';//importando la funcion que filtra desde data
import POKEMON from './data/pokemon/pokemon.js';//importando toda la data de pokemones desde data



const planta = document.getElementById("planta");//creando constante de la funcion
    planta.addEventListener("click", function(){//llamado a funcion mediante click

     const plantaValue = document.getElementById("planta").value;//rescatando el valor del boton
     const resultado = filterPokemonType(plantaValue);//enviando el valor como paramentro a la funcion

     const divFiltrados = document.getElementById("pokemonesFiltrados");//obteniendo el div donde se mostrara el resultado de los pokemones
   
    for (let i=0; i<resultado.length; i++){//recorriendo cada pokemon de la funcion "filterPokemonType"
        divFiltrados.innerHTML= resultado[i].name;//imprimiendo en el div 
    }

   });


   const agua = document.getElementById("agua");//creando constante de la funcion
    agua.addEventListener("click", function(){//llamado a funcion mediante click

     const aguaValue = document.getElementById("agua").value;//rescatando el valor del boton
    filterPokemonType(aguaValue);//enviando el valor como paramentro a la funcion
   });

   const fuego = document.getElementById("fuego");//creando constante de la funcion
   fuego.addEventListener("click", function(){//llamado a funcion mediante click

    const fuegoValue = document.getElementById("fuego").value;//rescatando el valor del boton
   const resultado= filterPokemonType(fuegoValue);//enviando el valor como paramentro a la funcion

   const divFiltrados = document.getElementById("pokemonesFiltrados");//obteniendo el div donde se mostrara el resultado de los pokemones
   
    for (let i=0; i<resultado.length; i++){//recorriendo cada pokemon de la funcion "filterPokemonType"
        divFiltrados.innerHTML+= resultado[i].name;//imprimiendo en el div 
    }

});



  const aire = document.getElementById("aire");//creando constante de la funcion
  aire.addEventListener("click", function(){//llamado a funcion mediante click

   const aireValue = document.getElementById("aire").value;//rescatando el valor del boton
  filterPokemonType(aireValue);//enviando el valor como paramentro a la funcion
 });


 const electrico = document.getElementById("electrico");//creando constante de la funcion
 electrico.addEventListener("click", function(){//llamado a funcion mediante click

  const electricoValue = document.getElementById("electrico").value;//rescatando el valor del boton
 filterPokemonType(electricoValue);//enviando el valor como paramentro a la funcion
});


const psiquico = document.getElementById("psiquico");//creando constante de la funcion
psiquico.addEventListener("click", function(){//llamado a funcion mediante click

 const psiquicoValue = document.getElementById("psiquico").value;//rescatando el valor del boton
filterPokemonType(psiquicoValue);//enviando el valor como paramentro a la funcion
});

const todos = document.getElementById("todos");//creando constante de la funcion
todos.addEventListener("click", function(){//llamado a funcion mediante click

 const todosValue = document.getElementById("todos").value;//rescatando el valor del boton
filterPokemonType(todosValue);//enviando el valor como paramentro a la funcion
});

