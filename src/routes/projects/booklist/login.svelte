<script>
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '$lib/firebase/client';
	import { onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte'
	
	let show = false;
	let email = '';
	let password = '';

	let error = null;
	let isPending = false;

	const handleSubmit = async () => {
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			if (!res) {
				throw new Error('Could not complete login !');
			}
			error = null;

			isPending = false;
			goto('/projects/booklist');
		} catch (err) {
			console.log(err.message);
			error = err.message;
			isPending = false;
		}
	};

	onMount(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			if (user) {
				goto("/projects/booklist");
      } else {
				show = true;
      }
      return () => unsub;
    });
  });
</script>

{#if show}
	<form on:submit|preventDefault={handleSubmit}>
		<h3>Login</h3>

		<label for="email">Email:</label>
		<input type="text" name="email" bind:value={email} required />

		<label for="password">Password:</label>
		<input type="text" name="password" bind:value={password} required />

		<button>Login</button>
	</form>
{:else}
	<p>Checking user authentication staus...</p>
{/if}
