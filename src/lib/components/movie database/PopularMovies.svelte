<script>
  import MovieCard from '$lib/components/movie database/MovieCard.svelte'

	export let popular;
</script>

<h3>Popular Movies</h3>
<div class="popular-movies">
	{#each popular as movie}
    <MovieCard {movie} />
	{/each}
</div>
<!-- <br> -->

<style>
  .popular-movies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-column-gap: 1rem;
  }
  h3 {
    padding: 0 1rem;
  }
</style>