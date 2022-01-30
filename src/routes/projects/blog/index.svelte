<script context="module">
	export const load = async () => {
		// let data = null;

		// const result = await fetch('/projects/blog.json')
		const result = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await result.json();

		return {
			props: {
				posts: data
			}
		};
	};
</script>

<script>
	import { loggedInUser, fetchedPosts } from '$lib/store';
	import { fly } from 'svelte/transition';

	export let posts;
	console.log('posts | component', posts)

	const fetchPosts = async () => {
		try {
			const result = await fetch('https://jsonplaceholder.typicode.com/posts');
			const posts = await result.json();
			fetchedPosts.set(posts);

			return posts;
		} catch (error) {
			console.log(error.message);
		}
	};
</script>


	<h1 style:color="red">Welcome</h1>
	<div class="layout">
		{#if $loggedInUser}
			<!-- {#await fetchPosts()}
				<p>...waiting</p>
			{:then posts} -->
			<ul>
				{#each posts as post}
					<li>
						<a sveltekit:prefetch href="/projects/blog/{post.id}">{post.title}</a>
					</li>
				{/each}
			</ul>
			<!-- {:catch error}
				<p>{error.message}</p>
			{/await} -->
		{:else}
			<p>Please login to view posts 😀</p>
		{/if}
	</div>

<style>
	:global(.dark) a {
		color: var(--dark-mode-text);
	}
	.layout {
		display: flex;
		justify-content: center;
		border: 1px solid;
	}
	a {
		color: black;
		text-decoration: none;
	}
	h1,
	p {
		/* margin-left: 40px; */
	}
	h1 {
		text-align: center;
	}
</style>
