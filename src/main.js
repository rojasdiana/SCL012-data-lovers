import { filterPokemonType } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const planta = document.getElementById('planta');

planta.addEventListener('click', () => {
     
  const plantaValue = document.getElementById('planta').value;
  const resultado = filterPokemonType(plantaValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');
  divFiltrados.innerHTML = ""; 
  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += `${pokePoke(resultado[i])}`
  }
});

const agua = document.getElementById('agua');

agua.addEventListener('click', () => {
  const aguaValue = document.getElementById('agua').value;
  const resultado = filterPokemonType(aguaValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');
  divFiltrados.innerHTML = ""; 
  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += `${pokePoke(resultado[i])}`
  }
});

const fuego = document.getElementById('fuego');

fuego.addEventListener('click', () => {
  const fuegoValue = document.getElementById('fuego').value;
  const resultado = filterPokemonType(fuegoValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');
  divFiltrados.innerHTML = ""; 
  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += `${pokePoke(resultado[i])}`
  }
});

const aire = document.getElementById('aire');
aire.addEventListener('click', () => {
  const aireValue = document.getElementById('aire').value;
  const resultado = filterPokemonType(aireValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');
  divFiltrados.innerHTML = ""; 
  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += `${pokePoke(resultado[i])}`
  }
});

const electrico = document.getElementById('electrico');
electrico.addEventListener('click', () => {
  const electricoValue = document.getElementById('electrico').value;
  const resultado = filterPokemonType(electricoValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');
  divFiltrados.innerHTML = ""; 
  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += `${pokePoke(resultado[i])}`
  }
});

const psiquico = document.getElementById('psiquico');
psiquico.addEventListener('click', () => {
  const psiquicoValue = document.getElementById('psiquico').value;
  const resultado = filterPokemonType(psiquicoValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');
  divFiltrados.innerHTML = ""; 
  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += `${pokePoke(resultado[i])}`
  }
});


const todos = document.getElementById('todos');
todos.addEventListener('click', () => {
  const todosValue = document.getElementById('todos').value;
  const resultado = filterPokemonType(todosValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');
  divFiltrados.innerHTML = ""; 

  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += `${pokePoke(resultado[i])}`
    
  }
});


function pokePoke(paramPoke){
 return`
  <div class="wrap">
    <div class="tarjeta">
       <div class="infopoke">
        <h4>${paramPoke.name}</h4>

        <div class="imagenpoke">
         <img class="grande" src="${paramPoke.img}" alt="imagenpoke"></img>
         </div>
         
         <p>${paramPoke.num}</p>
       </div>
        <div class="atras">
          <img src="${paramPoke.img}" alt="imagen poke"></img>
           <lo>
            <li>Type: ${paramPoke.type}</li>
            <li>Height: ${paramPoke.height}</li>
            <li>Weaknesses: ${paramPoke.weaknesses}</li>

           </lo>
        </div>
    </div>
  </div>`
  
}
