<script>
	import { page } from '$app/stores';
	import { pageDetails } from '$lib/store';

	const nav = [
		{ title: 'Home', path: '/' },
		{ title: 'Todo List', path: '/projects/todo' },
		{ title: 'Movie Gallery', path: '/projects/movie' },
		{ title: 'Book List', path: '/projects/booklist' },
		{ title: 'Ninja Gaming', path: '/projects/ninja-gaming' },
		{ title: 'Private Chat', path: '/projects/private-chat' }
	];

	const handleSaveTitle = (item) => {
		pageDetails.set(
			JSON.stringify({
				title: item.title,
				path: item.path
			})
		);
	};
</script>

<div class="container">
	<div class="nav-container">
		<ul>
			{#each nav as item}
				<li>
					<a
						href={item.path}
						sveltekit:prefetch
						class:active={$page.url.pathname === item.path}
						on:click={() => handleSaveTitle(item)}
					>
						{item.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.container {
		padding-top: 10px;
		overflow-y: auto;
		min-height: calc(100vh - 80px);
	}

	ul {
		flex-direction: row;
		flex-wrap: wrap;
	}

	li {
		list-style: none;
		padding: 10px 50px 10px 30px;
		border-right: none;
		border-left: none;
		/* border: 1px solid; */
	}

	.active {
		text-decoration: underline;
	}
</style>
