import { get, writable, derived } from 'svelte/store';

/** Store for your data.
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const apiData = writable({
  nations: [],
  towns: [],
  residents: []
}, () => {

});

/** Data transformation.
For our use case, we only care about the town names, not the other information.
Here, we'll create a derived store to hold the town names.
**/
export const nations = derived(apiData, ($apiData) => {
  if ($apiData.nations){
    console.log($apiData.nations)
    return $apiData.nations;
  }
  return [];
});

const setNations = async () => {
  let $apiData = get(apiData)

	const response = await fetch('https://towny.highstreet.fun/nations');
	const result = await response.json();
  const nations = result.slice(1, -1).split(', ');
  nations.forEach((nation) => {
    $apiData.nations.push(fetchNation(nation))
  });
  apiData.set($apiData)
}

// Get a single nation
const fetchNation = async (nation:string) => {
	const response = await fetch('https://towny.highstreet.fun/nation/' + nation);
	const result = await response.json();

	return result;
}

// Get a Single town
const fetchTown = async (town:string) => {
	const response = await fetch('https://towny.highstreet.fun/town/' + town);
	const result = await response.json();

	return result;
}

// Get a Single Player
const fetchPlayer = async (player:string) => {
	const response = await fetch('https://towny.highstreet.fun/resident/' + player);
	const result = await response.json();

	return result;
}

setNations()
