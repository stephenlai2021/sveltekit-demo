<script>
	import { signOut } from 'firebase/auth';
  import { goto } from '$app/navigation'
  import { browser } from '$app/env'
  import { auth } from '$lib/firebase/client'
  import { onAuthStateChanged } from 'firebase/auth'

  let user = auth.currentUser
  onAuthStateChanged(auth, _user => {
    console.log('current user:', _user)
    user = _user
  })  
  
  const handleLogout = async () => {
    await signOut(auth);
        goto('/projects/booklist/login')
  };
</script>

<div class="layout">
	<nav>
		<h1>My Book List</h1>

		<div>
			<!-- for logged in users -->
			{#if user}
				<div class="menu">
					<a href="/projects/booklist">Home</a>
					<a href="/projects/booklist/createbook">Add new book</a>
					<button on:click={handleLogout}>Logout</button>
				</div>
			{/if}

			<!-- for logged out users -->
			{#if !user}
				<div class="menu">
					<a href="/projects/booklist/login">Login</a>
					<a href="/projects/booklist/signup">Signup</a>
				</div>
			{/if}
		</div>
	</nav>

	<!-- show user email -->
	{#if user}
		<span>logged in as {user.email}</span>
	{/if}
</div>

<style>
	:global(.dark) h1, a {
		color: var(--dark-mode-color);
	}
	a {
		margin-right: 20px;
	}
	h1 {
		margin: 0;
	}
	.menu {
		height: 100%;
		display: flex;
		align-items: center;
	}
	.layout {
		margin: 30px 0;
	}
	nav {
		display: flex;
		justify-content: space-between;
	}
</style>
