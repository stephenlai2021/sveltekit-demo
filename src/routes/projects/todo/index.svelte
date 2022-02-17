<script>
	import { db } from '$lib/firebase/client';
	import { doc, collection, updateDoc, deleteDoc, addDoc, onSnapshot } from 'firebase/firestore';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { auth }	 from '$lib/firebase/client'
	import { onAuthStateChanged } from 'firebase/auth'

	let docs = null;
	let newTodo = '';
	let selectedTodo = null;
	let collectionRef = collection(db, 'todos');

	const unsub = onSnapshot(collectionRef, (snapshot) => {
		let tempDocs = [];
		snapshot.docs.forEach((doc) => {
			tempDocs.push({ ...doc.data(), id: doc.id });
		});
		docs = tempDocs;
		return () => unsub();
	});

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
		if (e.charCode === 13) writeTodo();
		writeTodo();
	};

	const delTodo = async (id) => {
		let docRef = doc(db, 'todos', id);
		await deleteDoc(docRef);
	};

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

	let show = false;
	onMount(() => {
		onAuthStateChanged(auth, user => {
			if (!user) {
				goto('/projects/todo/login');
			} else {
				show = true;
			}
		})
	});
</script>

<svelte:head>
	<title>Todo List</title>
</svelte:head>

{#if show}
	<div class="wrapper">
		<div class="container">
			<form on:submit|preventDefault={addTodo}>
				<input type="text" class="todo-input" bind:value={newTodo} />
				<button class="todo-button" type="submit">
					<span class="material-icons">add</span>
				</button>
			</form>
			<div class="todo-container">
				{#if docs}
					<ul class="todo-list">
						{#each docs as todo}
							<div class="todo">
								{#if selectedTodo === todo.id}
									<input class="todo-title" type="text" bind:value={todo.title} />
								{:else}
									<span
										class="todo-title show-cursor"
										class:selected={todo.done}
										on:click={() => (todo.done = !todo.done)}>{todo.title}</span
									>
								{/if}
								<div class="btn-group">
									{#if selectedTodo === todo.id}
										<button on:click={() => saveTodo(todo)}>
											<span class="material-icons">done</span>
										</button>
									{:else}
										<button class="btn-edit" on:click={() => (selectedTodo = todo.id)}>
											<span class="material-icons">edit</span>
										</button>
									{/if}
									<button class="btn-del" on:click={() => delTodo(todo.id)}>
										<span class="material-icons">delete</span>
									</button>
								</div>
							</div>
						{/each}
					</ul>
				{:else}
					<div class="waiting">
						<img
							src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
							alt="loading animation"
						/>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	:root {
		--theme-color: #d88771;
		--btn-del-color: #ff6f47;
		--btn-edit-color: rgb(73, 204, 73);
	}

	.waiting img {
		width: 50px;
	}

	.waiting {
		width: 380px;
		height: 345px;
		display: grid;
		place-items: center;
	}

	.btn-group button {
		border: none;
		cursor: pointer;
	}

	.btn-group button.btn-edit {
		background: var(--btn-edit-color);
	}

	.btn-group button.btn-del {
		background: var(--btn-del-color);
	}

	.btn-group button span {
		color: white;
		font-size: 18px;
		display: flex;
		align-items: center;
		margin: 0 10px;
	}

	.selected {
		text-decoration: line-through;
	}

	.todo {
		display: flex;
		justify-content: space-between;
		margin: 0.5rem 0;
	}

	.todo-title.show-cursor {
		cursor: pointer;
	}

	.todo-title {
		width: 300px;
		line-height: 36px;
		margin-right: 5px;

		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.wrapper {
		display: flex;
		min-height: 60%;
		justify-content: center;
		font-family: 'Poppins', sans-serif;
		margin-bottom: 30px;
		background: inherit;
	}

	.container {
		padding-top: 30px;
	}

	form {
		display: flex;
		justify-content: space-between;
		background: white;
		position: relative;
	}

	form input {
		width: 400px;
		padding: 0.5rem;
		font-style: 2rem;
		border: 2px solid #d88771;
	}

	form button {
		height: 36px;
		color: #d88771;
		cursor: pointer;
		transition: all 0.3s ease;
		position: absolute;
		right: 0;
	}

	form button:hover {
		background: var(--theme-color);
		color: white;
	}

	form button {
		padding: 0.5rem;
		font-style: 2rem;
		border: none;
		background: transparent;
	}

	.todo .btn-group {
		display: flex;
	}
</style>
