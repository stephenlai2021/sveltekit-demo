<script context="module">
	export const load = async ({ fetch }) => {
		/* fetch moviedb api */
		// const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MOVIEDB_APIKEY}`)

		/* fetch endpoint */
		const res = await fetch('/projects/movie.json');
		const { popular } = await res.json();
		return {
			props: {
				popular
			}
		};
	};
</script>

<script>
	import PopularMovies from '$lib/components/movie/PopularMovies.svelte';
	import SearchMovies from '$lib/components/movie/SearchMovies.svelte';
	import { fly } from 'svelte/transition'
	import { searchedMovie } from '$lib/store'

	export let popular;

	searchedMovie.set(null)
</script>

<div in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovies />
	<PopularMovies {popular} />
</div>