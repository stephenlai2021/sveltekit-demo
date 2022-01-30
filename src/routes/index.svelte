<script>
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
		},
	];

	$: searchedKeywords = menuItems.filter((item) => {
		return item.title.toUpperCase().includes(keyword) || item.title.toLowerCase().includes(keyword);
	});
</script>

<div class="page">
	<div class="layout">
		<div class="header">
			<h1>Sveltekit + Firebase tutorials</h1>
			<input type="text" bind:value={keyword} />
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
</div>

<style>
	:global(.dark) a {
		color: var(--dark-mode-text);
	}
	.list-container {
		display: flex;
		justify-content: center;
	}
	.header {
		text-align: center;
	}
	a {
		text-decoration: none;
	}
	li {
		margin: 5px;
	}
</style>
