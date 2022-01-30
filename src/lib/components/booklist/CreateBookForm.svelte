<script>
	import { db } from '$lib/firebase/client';
	import { addDoc, collection } from 'firebase/firestore';
	import { goto } from '$app/navigation';

	let title = '';
	let author = '';

	const handleSubmit = async () => {
		let colRef = collection(db, 'books');

		const res = await addDoc(colRef, {
			title,
			author
		});
		goto('/projects/booklist');
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h3>Add a New Book</h3>

	<label for="title">Book title:</label>
	<input type="text" name="title" bind:value={title} required />

	<label for="author">Book author:</label>
	<input type="text" name="author" bind:value={author} required />

	<button>Add Book</button>
</form>
