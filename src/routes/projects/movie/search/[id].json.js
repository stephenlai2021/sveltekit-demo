export const get = async ({ params }) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_MOVIEDB_APIKEY}&language=en-US&query=${params.id}&page=1:&include_adult=false`
	);

	if (res.ok) {
		const data = await res.json();
		return {
			body: {
				data
			}
		};
	}
};
