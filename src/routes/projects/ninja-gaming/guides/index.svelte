<script context="module">
	export const load = async ({ fetch }) => {
		// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
		const res = await fetch('/projects/ninja-gaming/guides.json');

		if (res.ok) {
			const { posts } = await res.json();
			return {
				props: {
					guides: posts
				}
			};
		}
		return {
			status: res.status,
			error: new Error('Could not fetch guides')
		};
	};
</script>

<script>
	import { fly } from 'svelte/transition';

	export let guides;
</script>

<div class="page" in:fly={{ y: 50, duration: 300, delay: 300 }} out:fly={{ duration: 300 }}>
	<ul>
		{#each guides as guide}
			<li>
				<a sveltekit:prefetch href={`/projects/ninja-gaming/guides/${guide.id}`}>{guide.title}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	:global(.dark) a {
		/* color: var(--dark-mode-text); */
		color: var(--gaming-color);
	}

	.page {
		padding-top: 10px;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		cursor: pointer;
	}

	a {
		display: inline-block;
		margin-top: 10px;
		padding: 10px;
		/* border: 1px dotted rgba(255, 255, 255, 0.2); */
		cursor: pointer;
	}
</style>
