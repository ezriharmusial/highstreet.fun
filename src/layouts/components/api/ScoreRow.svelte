<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export let board = "vault_eco_balance"
  export let type = "alltime"
  export let position = "1"
  export let format = "score"

  const apiData = writable({
    "playerName": "---",
    "playerDisplayName": "---",
    "playerPrefix": "",
    "playerSuffix": "",
    "playerUUID": "null",
    "position": position,
    "board": board,
    "type": type,
    "score": -1.0,
    "scorePretty": "---",
    "scoreFormatted": "---",
    "scoreTime": "---"
  })

  onMount(async () => {
    fetch(`https://leaderboards.highstreet.fun/${board}/${type}/${position}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      apiData.set(data);
    }).catch(error => {
      console.log(error);
      return [];
    });
  });
</script>

<dt class="text-sm font-bold leading-6 text-gray-900 flex justify-left items-center">
  {position}. <img
  class="group-hover:scale-[1.03] transition duration-300 w-8 mx-2"
  src={"https://api.creepernation.net/head/" + $apiData.playerName}
  alt={$apiData.playerUUID}
  width={48}
  height={48}
  transition:name={"image" + $apiData.playerName}
  /> {$apiData.playerPrefix} {$apiData.playerDisplayName || $apiData.playerName} {$apiData.playerSuffix}
</dt>
<dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex justify-center items-center">
  {#if format == "score"}{$apiData.score}
  {:else if format == "scorePretty"}{$apiData.scorePretty}
  {:else if format == "scoreFormatted"}{$apiData.scoreFormatted}
  {:else if format == "scoreTime"}{$apiData.scoreTime}{/if}
</dd>
