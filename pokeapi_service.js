// pokeapi.service.js
const BASE_URL = "https://pokeapi.co/api/v2";

async function pedir (ruta) {
const respuesta = await fetch(BASE_URL + ruta);
if ('respuesta.ok) {
throw new Error( Error $(respuesta.status) ');

return respuesta.json ();

export function obtenerPokemon (nombre) {
return pedir('/pokemon/$(nombre)');

// una lista de pokemon, la respuesta trae(count, next, previous, results
export function listarPokemon(limite=10){
return pedir ('/pokemonYlimit=$(limite)');
}
//un tipo(fire, water, grass...)
export function obtenerTipo(tipo){
  return pedir('/type/$(tipo)');
}