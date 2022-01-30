export const get = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MOVIEDB_APIKEY}`)
  if (res.ok) {
    const data = await res.json()
    return {
      body: {
        popular: data.results
      }
    } 
  }
}