<script>
export const board = "vault_eco_balance"
export const type = "alltime"
export const size = 5
import ScoreRow from "./ScoreRow.svelte"

</script>

<article class="card card-hover variant-filled-primary bg-black/10 rounded-md p-4 my-4">
    <header class="card-header">
        <h3>Top {size} {board}'s of {type}</h3>
    </header>
    <main>
        <dl class="divide-y divide-gray-100">
          {#each {length: 5} as _, i}
          <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <ScoreRow board={board} type={type} position={i+1} />
          </div>
          {/each}
        </dl>
    </main>
    <footer class="card-footer"></footer>
</article>
