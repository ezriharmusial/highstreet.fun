<script>
import { onMount } from "svelte";

let nations = []
let nationsList

onMount(async () => {

  // Get Nation info
  fetch("http://192.168.178.59:8124/nations")
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
