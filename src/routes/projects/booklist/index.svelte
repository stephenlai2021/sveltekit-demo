<!-- <script context="module">	
	export const load = async () => {
		const res = await fetch('/projects/booklist.json')

		if (res.ok) {
			const { books } = await res.json()
			return {
				props: {
					books
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not fetch data')
		}
	};
</script> -->
<script>
	// export let books;

	import BookDetails from '$lib/components/booklist/BookDetails.svelte';
	import { db } from '$lib/firebase/client';
	import { collection, onSnapshot, query, where } from 'firebase/firestore';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase/client';
	import { onAuthStateChanged } from 'firebase/auth';
	import Skeleton from '$lib/components/booklist/Skeleton.svelte';

	let user = null;
	let show = false;
	let books = [];

	let q = null;
	let colRef = collection(db, 'books');

	onMount(() => {
		onAuthStateChanged(auth, (_user) => {
			if (!_user) {
				goto('/projects/booklist/login');
			} else {
				user = _user;
				q = query(colRef, where('userId', '==', user.uid));
				console.log('user | booklist', user);
				show = true;
			}
		});
	});

	$: if (q) {
		const unsub = onSnapshot(q, (snapshot) => {
			let tempDocs = [];
			snapshot.docs.forEach((doc) => {
				tempDocs.push({ ...doc.data(), id: doc.id });
			});
			books = tempDocs;
			return () => unsub();
		});
	}

	let timeout = false;
	$: if (!books.length) {
		setTimeout(() => (timeout = true), 3000);
	}
</script>

<!-- Server Side Render -->
<!-- <div class="home">
	<ul>
		{#each books as book}
			<BookDetails {book} />
		{/each}
	</ul>
</div> -->

<!-- Client Side Render -->
{#if show}
	<div class="home">
		{#if books.length}
			<ul>
				{#each books as book (book.id)}
					<BookDetails {book} />
				{/each}
			</ul>
		{/if}

		{#if !books.length && !timeout}
			<div class="waiting">
				<!-- <img
					src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
					alt="loading animation"
				/> -->
				<Skeleton />
			</div>
		{/if}

		{#if !books.length && timeout}
			<div class="waiting">
				<h3>
					You don't have a book list, please
					<a href="/projects/booklist/createbook">add new book</a>
				</h3>
			</div>
		{/if}
	</div>
{/if}

<style>
	a {
		text-decoration: underline;
	}

	ul {
		min-width: 400px;

		/* border: 1px solid; */
	}

	.waiting {
		display: grid;
		place-items: center;
		height: 30vh;
	}

	.waiting img {
		width: 50px;
	}

	.home {
		display: flex;
		justify-content: center;
		padding-top: 20px;
		/* border: 1px solid; */
	}

	ul {
		margin: 0;
		padding: 0;
	}
</style>
