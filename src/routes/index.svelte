<script>
	import { fly } from 'svelte/transition';

	let keyword = '';

	const menuItems = [
		{
			title: 'Fetching Firestore data on client side',
			path: '/demo1'
		},
		{
			title: 'Fetching Firestore data on server side',
			path: '/demo2'
		},
		{
			title: 'Fetching Firesstore data on server side through Firestore REST API',
			path: '/demo3'
		},
		{
			title:
				'Fetching Firestore data in endpoint using Admin SDK, then return to server or client side to render',
			path: '/demo4'
		},
		{
			title: 'Set up Firebase Javascript SDK',
			path: '/demo5'
		},
		{
			title: 'Set up Firebase Admin SDK',
			path: '/demo6'
		},
		{
			title: 'Sharing secret environment variables with Sveltekit and Vercel',
			path: '/demo7'
		},
		{
			title: 'Hooks: getSession',
			path: '/demo8'
		},
		{
			title: 'Prefetching data',
			path: '/demo9'
		},
		{
			title: 'Dynamic Routes',
			path: '/demo10'
		},
		{
			title: 'Redirect',
			path: '/demo11'
		},
		{
			title: 'Navigation with menu link highlight',
			path: '/demo12'
		},
		{
			title: 'Todo List',
			path: '/projects/todo'
		},
		{
			title: 'Blog',
			path: '/projects/blog'
		},
		{
			title: 'Movie Database',
			path: '/projects/movie'
		},
		{
			title: 'Ninja Gaming',
			path: '/projects/ninja-gaming'
		}
	];

	$: searchedKeywords = menuItems.filter((item) => {
		return item.title.toUpperCase().includes(keyword) || item.title.toLowerCase().includes(keyword);
	});
</script>

<div class="layout">
	<div class="header">
		<h1>Sveltekit + Firebase tutorials</h1>
		<div class="search">
			<form>
				<label for="search_article">Search Article</label>
				<input type="text" name="search_article" bind:value={keyword} />
			</form>
		</div>
	</div>
	<div class="list-container">
		<ol>
			{#each searchedKeywords as item}
				<li>
					<a sveltekit:prefetch href={item.path}>{item.title}</a>
				</li>
			{/each}
		</ol>
	</div>
</div>

<!-- <div class="layout">
	<h1>Welcome to my site 😀</h1>
</div> -->

<style>
	/* .layout {
		height: calc(100vh - 77px);
		width: 100%;
		display: grid;
		place-items: center;
	} */

	:global(.dark) a {
		color: var(--dark-mode-text);
	}

	.list-container {
		display: flex;
	}

	.layout .header {
		display: block;
		padding: 0;
		background: inherit;
	}

	a {
		text-decoration: none;
	}

	li {
		margin: 5px;
	}
</style>
