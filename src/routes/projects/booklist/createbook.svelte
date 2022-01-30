<script>
	import CreateBookForm from '$lib/components/booklist/CreateBookForm.svelte';
	import { auth } from '$lib/firebase/client';
	import { onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let show = false;

	onMount(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			if (!user) {
				goto('/projects/booklist/login');
			} else {
				show = true;
			}
			return () => unsub;
		});
	});
</script>

{#if show}
	<CreateBookForm />
{:else}
	<p>...waiting</p>
{/if}
