<script>
	import { onMount } from 'svelte'
	import { auth } from '$lib/firebase/client'
	import { onAuthStateChanged } from 'firebase/auth'
	import { goto } from '$app/navigation'

	let show = false;
	onMount(() => {
		onAuthStateChanged(auth, user => {
			if (!user) {
				goto('/login');
			} else {
				show = true;
			}
		})
	});
</script>

{#if show}
<div class="layout">
	<h1>Welcome to my site 😀</h1>
</div>
{/if}

<style>
	.layout {
		height: calc(100vh - 77px);
		width: 100%;
		display: grid;
		place-items: center;
	}
</style>
