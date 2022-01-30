<script>
	import { goto } from '$app/navigation';
	import { auth } from '$lib/firebase/client';
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte'

	let show = false
	let error = null;
	let isPending = false;

	let email = '';
	let password = '';

	const handleSubmit = async () => {
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			if (!res) {
				throw new Error('Could not complete signup !');
			}
			error = null;
			isPending = false;
      goto('/projects/booklist')
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
	<h3>Sign up</h3>

	<label for="email">Email:</label>
	<input type="text" name="email" bind:value={email} required />

	<label for="password">Password:</label>
	<input type="text" name="password" bind:value={password} required />

	<button type="submit">Signup</button>
	{#if error}
		<p>{error}</p>
	{/if}
</form>
{:else}
  <p>Checking user authentication status...</p>	
{/if} 