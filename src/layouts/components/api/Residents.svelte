<script>
import { onMount } from "svelte";

let residents

onMount(async () => {
  // Get Residents
  fetch("https://towny.highstreet.fun/residents")
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(data => {
		console.log(data);
    residents = data.residents.length >= 3 ? data.residents.slice(1, -1).split(', ') : [];
  }).catch(error => {
    console.log(error);
    return [];
  });
});
</script>

  <section class="grid grid-cols-3 md:grid-cols-5 gap-2 mb-4">
  {#each residents as resident}
  <div class="card bg-black/10 rounded-md p-4 variant-ghost card-hover" alt="{resident}'s Player profile" >
  <figure class="text-center m-4 flex flex-col justify-center w-32">
    <figcaption class="mb-2 bg-black/40 text-white font-bold rounded-md">{resident}</figcaption>
    <img src="https://mc-heads.net/head/{resident}" class="mx-auto rounded-lg" alt="{resident}" width="150" height="150" loading="lazy" decoding="async">
  </figure>
  </div>
  {/each}
  </section>
