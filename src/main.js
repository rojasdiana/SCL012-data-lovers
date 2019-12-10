import { filterPokemonType } from './data.js';

const planta = document.getElementById('planta');

planta.addEventListener('click', () => {
     
  const plantaValue = document.getElementById('planta').value;
  const resultado = filterPokemonType(plantaValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');
   
  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += resultado[i].name;
  }
});

const agua = document.getElementById('agua');

agua.addEventListener('click', () => {
  const aguaValue = document.getElementById('agua').value;
  const resultado = filterPokemonType(aguaValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');
   
  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += resultado[i].name;
  }
});

const fuego = document.getElementById('fuego');

fuego.addEventListener('click', () => {
  const fuegoValue = document.getElementById('fuego').value;
  const resultado = filterPokemonType(fuegoValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');

  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += resultado[i].name;
  }
});

const aire = document.getElementById('aire');
aire.addEventListener('click', () => {
  const aireValue = document.getElementById('aire').value;
  const resultado = filterPokemonType(aireValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');

  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += resultado[i].name;
  }
});

const electrico = document.getElementById('electrico');
electrico.addEventListener('click', () => {
  const electricoValue = document.getElementById('electrico').value;
  const resultado = filterPokemonType(electricoValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');

  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += resultado[i].name;
  }
});

const psiquico = document.getElementById('psiquico');
psiquico.addEventListener('click', () => {
  const psiquicoValue = document.getElementById('psiquico').value;
  const resultado = filterPokemonType(psiquicoValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');

  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += resultado[i].name;
  }
});

const todos = document.getElementById('todos');
todos.addEventListener('click', () => {
  const todosValue = document.getElementById('todos').value;
  const resultado = filterPokemonType(todosValue);
  const divFiltrados = document.getElementById('pokemonesFiltrados');

  for (let i = 0; i < resultado.length; i += 1) {
    divFiltrados.innerHTML += resultado[i].name;
  }
});
