<script>
	import BookDetails from '$lib/components/booklist/BookDetails.svelte';
	import { db } from '$lib/firebase/client';
	import { collection, onSnapshot } from 'firebase/firestore';
	import { auth } from '$lib/firebase/client';
	import { onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let show = false;
	let books = [];
	let collectionRef = collection(db, 'books');

	const unsub = onSnapshot(collectionRef, (snapshot) => {
		let tempDocs = [];
		snapshot.docs.forEach((doc) => {
			tempDocs.push({ ...doc.data(), id: doc.id });
		});
		books = tempDocs;
		return () => unsub();
	});

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

<div class="home">
	{#if show && books.length}
		<ul>
			{#each books as book (book.id)}
				<BookDetails {book} />
			{/each}
		</ul>
	{:else}
		<p>...waiting</p>
	{/if}
</div>

<style>
	ul {
		margin: 0;
		padding: 0;
	}
</style>
