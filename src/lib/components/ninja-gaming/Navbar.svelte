<script>
	import { page } from '$app/stores';
	// console.log('page object', $page.url.pathname)

	$: url = $page.url.pathname;
	// $: console.log('url: ', url);
</script>

<div class="menu">
	{#if url != '/projects/ninja-gaming/guides'}
		<a href="/projects/ninja-gaming/guides">View Guides</a>
	{/if}
	{#if url === '/projects/ninja-gaming'}
		<a href="/projects/ninja-gaming/about">About</a>
	{/if}
	{#if url === '/projects/ninja-gaming/about'}
		<a href="/projects/ninja-gaming">Home</a>
	{/if}
</div>

<style>
	:global(.dark) a {
		/* color: var(--dark-mode-text); */
		color: var(--gaming-color);
	}
	.menu {
		/* border: 1px solid; */
		display: flex;
		justify-content: space-around;
		width: 30%;
		margin: auto;
		/* text-align: center; */
	}
</style>
