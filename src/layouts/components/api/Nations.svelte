<script>
import { onMount } from "svelte";

let nations = []
let nationsList

onMount(async () => {

  // Get Nation info
  fetch("https://towny.highstreet.fun/nations")
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(data => {
		console.log(data);
    nations = data.nations.length >= 3 ? data.nations.slice(1, -1).split(', ') : [];;

  }).catch(error => {
    console.log(error);
    return [];
  })
});
</script>

  <ul>
  {#each nations as nation}
  <li>{nation}</li>
  {/each}
  </ul>
