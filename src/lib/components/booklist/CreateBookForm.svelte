<script>
	import { db } from '$lib/firebase/client';
	import { addDoc, collection } from 'firebase/firestore';
	import { onAuthStateChanged } from 'firebase/auth';
	import { auth } from '$lib/firebase/client'
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte'

	let title = '';
	let author = '';
	let user = null

	const handleSubmit = () => {
		let colRef = collection(db, 'books');

		addDoc(colRef, {
			title,
			author,
			userId: user.uid,
			isFav: false
		}).then(() => {
			console.log('add book successfully')
			goto('/projects/booklist');
		})
	};

	onMount(() => {
		onAuthStateChanged(auth, _user => {
			user = _user
		})
	})
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h3>Add a New Book</h3>

	<label for="title">
		Book title:
		<input type="text" name="title" bind:value={title} required />
	</label>
	<br>

	<label for="author">
		Book author:
		<input type="text" name="author" bind:value={author} required />	
	</label><br>

	<button>Add Book</button>
</form>
