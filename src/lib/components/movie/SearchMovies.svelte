<script>
  import { goto } from '$app/navigation'
	import { fly } from 'svelte/transition'
	import { searchedMovie } from '$lib/store'

	let searchTerm = '';
	let active = false;

  const cancelInactive = () => {
    if (searchTerm) {
      active = true
    } else {
      active = false
    }
  }
  const handleSearch = () => {
		searchedMovie.set(searchTerm)
    goto('/projects/movie/search/' + searchTerm)
  }
</script>

<form class="search" on:submit|preventDefault={handleSearch}>
	{#if !active}
		<label in:fly={{ y: -10, duration: 500 }} out:fly={{ y: -10, duration: 500 }} for="search_movie">Search Movie</label>
	{/if}
	<input 
    type="text" 
    name="search_movie" 
    class:selected={active}
    bind:value={searchTerm} 
    on:focus={() => (active = true)} 
    on:blur={cancelInactive}
  />
  {#if searchTerm}
	  <button out:fly={{ x: 0, duration: 500 }} in:fly={{ x: 20, duration: 500 }} type="submit">Search</button>
  {/if}
</form>

<style>
	
</style>
