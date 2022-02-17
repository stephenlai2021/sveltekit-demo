<script>
	export let title = 'App title';
</script>

<nav>
	<!-- {#if title === 'Movie Database'}
		<a href="/projects/movie">{title}</a>
	{:else if title === 'Messenger'}
	<a href="/projects/chat">{title}</a>
	{/if} -->
	
	<a href="/projects/chat">{title}</a>
</nav>

<style>
	:global(.dark) a {
		color: #bfc2c7;
	}
	nav {
		display: flex;
		min-height: 10vh;
		align-items: center;
		justify-content: center;
	}
	a {
		font-size: 1rem;
		font-weight: bold;
		font-family: 'Poppins', sans-serif;
		color: black;
		text-decoration: none;
	}
</style>
