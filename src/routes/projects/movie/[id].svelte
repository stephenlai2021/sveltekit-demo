<script context="module">
	export const load = async ({ fetch, params }) => {
		// const res = await fetch(`/projects/movie/${params.id}.json`)
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${
				import.meta.env.VITE_MOVIEDB_APIKEY
			}`
		);

		if (res.ok) {
			const data = await res.json();
			return {
				props: {
					movie: data
				}
			};
		}
	};
</script>

<script>
	// import { page } from '$app/stores'
	// console.log('movie id: ', $page.params.id)

	import { fly } from 'svelte/transition';

	export let movie;
	// console.log('movie details: ', movie);
</script>

<!-- <pre>
  {JSON.stringify(movie, null, 2)}
</pre> -->

<div class="page">
	<div
		class="movie-details"
		in:fly={{ y: 50, duration: 500, delay: 500 }}
		out:fly={{ duration: 500 }}
	>
		<div class="img-container">
			<img src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path} alt={movie.title} />
		</div>
		<div class="text-container">
			<h1>{movie.title}</h1>
			<p class="overview">{movie.overview}</p>
			<p>
				<span>Release date:</span>
				{movie.release_date} <br />
				<span>Budget:</span> ${movie.budget} <br />
				<span>Rating:</span>
				{movie.vote_average} <br />
				<span>Runtime:</span>
				{movie.runtime} mins
			</p>
		</div>
	</div>
</div>

<style>
	.page {
		padding-top: 20px;
	}

	h1 {
		padding: 1rem 0;
	}
	p {
		padding: 0 0 2rem 0;
	}
	.img-container {
		width: 100%;
		/* border: 1px solid; */
	}
	img {
		min-width: 100%;
		border-radius: 1rem;
		object-fit: cover;
		/* border: 1px solid; */
	}
	span {
		font-weight: bold;
	}
</style>
