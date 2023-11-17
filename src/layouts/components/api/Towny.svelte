<script>
import { onMount } from "svelte";
import { apiData } from "./store";

import Residents from "./Residents.svelte"
import Nations from "./Nations.svelte"

let nations
let towns
let residents

onMount(async () => {

  // Get Nations
  fetch("https://towny.highstreet.fun/nations")
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(data => {
		console.log(data);
    nations = data.nations.slice(1, -1).split(', ');
  }).catch(error => {
    console.log(error);
    return [];
  });

  // Get Towns
  fetch("https://towny.highstreet.fun/towns")
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(data => {
		console.log(data);
    towns = data.towns.slice(1, -1).split(', ');
  }).catch(error => {
    console.log(error);
    return [];
  });
});
// $: console.log($apiData)

</script>

<main class="container content">
	<h1>HighStreet SMP Towny World</h1>
  <h2>Naties</h2>
  <Nations client:only />
  <h2>Steden</h2>
  <ul>
  {#each towns as town}
  <li>{town}</li>
  {/each}
  </ul>
  <h2>Spelers</h2>
  <Residents client:only/>
</main>

<style>

</style>
