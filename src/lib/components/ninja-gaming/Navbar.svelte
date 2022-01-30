<script>
	import { page } from '$app/stores';
	// console.log('page object', $page.url.pathname)

	$: url = $page.url.pathname;
	// $: console.log('url: ', url);
</script>

<a href="/projects/ninja-gaming/guides">View Guides</a>
{#if url === '/projects/ninja-gaming'}
	<a href="/projects/ninja-gaming/about">About</a>
{/if}
{#if url === '/projects/ninja-gaming/about'}
	<a href="/projects/ninja-gaming">Home</a>
{/if}

<style>
	:global(.dark) a {
		color: var(--dark-mode-text);
	}
</style>
