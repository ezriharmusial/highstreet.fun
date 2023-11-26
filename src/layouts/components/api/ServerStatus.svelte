<script>
  let apiData = fetch(`https://api.highstreet.fun/global`)
    .then(response => response.json())
</script>

{#await apiData}
<!-- Niet persee ofzo -->
<span>Loading</span>
{:then data }
<pre>
{JSON.stringify(data, null, 2)}
</pre>
{:catch error }
<p>Oops er ging iets fout: {error}</p>
{/await}
