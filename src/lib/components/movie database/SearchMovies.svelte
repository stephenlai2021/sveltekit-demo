<script>
  import { goto } from '$app/navigation'
	import { fly } from 'svelte/transition'

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
	.search {
		position: relative;
		width: 30%;
		margin: 1rem;
		/* border: 1px solid; */
	}
	button {
		font-size: 0.7rem;
		padding: 0rem 1rem;
		background: rgb(96, 110, 201);
		color: white;
		font-weight: bold;
		border: none;
		position: absolute;
		bottom: 50%;
		right: 0;
		transform: translate(0, 50%);
		height: 100%;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		cursor: pointer;
	}
	input {
		width: 100%;
		border: none;
		font-size: 1rem;
		font-family: 'Poppins', sans-serif;
		outline: none;
		color: white;
		padding: 0.5rem 0.1rem;
		transition: background 0.75s ease-out;
		font-weight: bold;
		background: rgb(63, 63, 63);
		border-radius: 10px;
		padding: 1rem;
	}
	label {
		position: absolute;
		font-size: 0.8rem;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		pointer-events: none;
		color: white;
		padding: 0rem 1rem;
	}
  input.selected {
    background: rgb(50, 50, 50);
  }
</style>
