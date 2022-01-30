<script context="module">
</script>

<script>
	import { db } from '$lib/firebase/client';
	import { doc, collection, updateDoc, deleteDoc, addDoc, onSnapshot } from 'firebase/firestore';

	let docs = null;
	let collectionRef = collection(db, 'todos');

	const unsub = onSnapshot(collectionRef, (snapshot) => {
		let tempDocs = [];
		snapshot.docs.forEach((doc) => {
			tempDocs.push({ ...doc.data(), id: doc.id });
		});
		docs = tempDocs;
		return () => unsub();
	});

	let newTodo = '';
	const writeTodo = async () => {
		let todosRef = collection(db, 'todos');
		await addDoc(todosRef, {
			createdAt: Date.now(),
			title: newTodo,
			done: false
		});
		newTodo = '';
	};
	const addTodo = (e) => {
		if (e.charCode === 13) {
			writeTodo();
		}
	};

	const delTodo = async (id) => {
		let docRef = doc(db, 'todos', id);
		await deleteDoc(docRef);
	};

	let selectedTodo = null;
	const saveTodo = async (todo) => {
		let docRef = doc(db, 'todos', todo.id);
		await updateDoc(docRef, {
			title: todo.title
		});
		selectedTodo = null;
	};

	const toggleTodo = async (todo) => {
		let todoRef = doc(db, 'todos', todo.id);
		await updateDoc(todoRef, {
			done: !todo.done
		});
	};
</script>

<svelte:head>
	<title>Todo List</title>
</svelte:head>

<h1>Get real time data with Firestsore on client side</h1>
<div class="layout">
	<div class="todo-container">
		<form on:submit|preventDefault={writeTodo}>
			<input type="text" bind:value={newTodo} on:keypress={addTodo} />
			<button type="submit">Add</button>
		</form>
		<br />
		{#if docs}
			{#each docs as todo}
				{#if selectedTodo === todo.id}
					<input type="text" bind:value={todo.title} />
				{:else}
					<span on:click={() => delTodo(todo.id)}>{todo.title}</span>
					<input type="checkbox" bind:checked={todo.done} on:click={() => toggleTodo(todo)} />
				{/if}
				<button on:click={() => delTodo(todo.id)}>delete</button>
				{#if selectedTodo === todo.id}
					<button on:click={() => saveTodo(todo)}>Save</button>
				{:else}
					<button on:click={() => (selectedTodo = todo.id)}>Edit</button>
				{/if}

				<br />
			{/each}
		{:else}
			<p>...waiting</p>
		{/if}
	</div>
</div>

<style>
	:global(.dark) * {
		color: var(--dark-mode-text);
	}
	h1 {
		text-align: center;
	}
	.layout {
		/* border: 1px solid; */
		display: flex;
		justify-content: center;
		/* text-align: center; */
	}
</style>
