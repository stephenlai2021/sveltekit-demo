<script context="module">
	export const load = async ({ fetch, params }) => {
		// const res = await fetch(`/projects/movie/search/${params.id}.json`)
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${
				import.meta.env.VITE_MOVIEDB_APIKEY
			}&language=en-US&query=${params.id}&page=1:&include_adult=false`
		);
		if (res.ok) {
			const data = await res.json();
			return {
				props: { 
					searchedMovies: data.results
					// searchedMovies: data
				}
			};
		}
	};
</script>

<script>
	import MovieCard from '$lib/components/movie database/MovieCard.svelte';

	export let searchedMovies;
</script>

<!-- <pre>
  {JSON.stringify(searchedMovies, null, 2)}
</pre> -->

<div class="searched-movies">
	{#each searchedMovies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		grid-column-gap: 1rem;
	}
</style>
