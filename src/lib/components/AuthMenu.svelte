<script>
	import { auth } from '$lib/firebase/client';
	import { onAuthStateChanged } from 'firebase/auth';
	import { pageDetails } from '$lib/store';
	import Profile from '$lib/components/Profile.svelte';
	import { showProfile } from '$lib/store';
	import themeStore, { setTheme } from 'svelte-themes';
	import { onMount } from 'svelte';

	let user = auth.currentUser;
	onAuthStateChanged(auth, (_user) => {
		console.log('current user:', _user);
		user = _user;
	});

	let theme = true;
	const toggleTheme = () => {
		theme = !theme;
		if (theme) setTheme('dark');
		if (!theme) setTheme('light');
	};

	onMount(() => {
		if ($themeStore.theme === 'light') theme = false;
		if ($themeStore.theme === 'dark') theme = true;
	});

	$: console.log('theme mode: ', $themeStore.theme);
</script>

<div class="layout">
	<nav>
		<h1 class="logo">Hi 😀</h1>

		{#if $pageDetails}
			<div class="title">
				<h1>
					<a href={JSON.parse($pageDetails).path}>{JSON.parse($pageDetails).title}</a>
				</h1>
			</div>
		{/if}

		<div class="right">
			{#if user && JSON.parse($pageDetails).title === 'Book List'}
				<a class="menu-link" href="/projects/booklist/createbook">Add</a>
			{/if}
			<div class="profile">
				<div class="config">
					<div class="theme" on:click={toggleTheme}>
						{#if $themeStore.theme === 'light'}
							<svg
								class="icon-moon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg
							>
						{:else}
							<svg
								class="icon-sun"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								><path
									fill-rule="evenodd"
									d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
									clip-rule="evenodd"
								/></svg
							>
						{/if}
					</div>
				</div>

				{#if user}
					<div class="img-container" on:click={() => ($showProfile = !$showProfile)}>
						{#if user.photoURL}
							<img src={user.photoURL} alt="" />
						{:else}
							<img
								src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
								alt="user avatar"
							/>
						{/if}
					</div>
				{/if}

				{#if $showProfile}
					<Profile {user} />
				{/if}
			</div>
		</div>
	</nav>
</div>

<style>
	.logo { 
		width: 161px;
	}

	.right {
		display: flex;
		align-items: center;
		margin-left: auto;
	}
	
	.title {
		display: flex;
		justify-content: center;
		margin-left: 142px;
		width: 70%;
	}

	.config {
		margin-right: 20px;
	}

	.theme {
		width: 1.25rem;
		height: 1.25rem;
		cursor: pointer;
		margin-right: 10px;
	}

	.profile {
		height: 100%;
		display: flex;
		align-items: center;
		position: relative;
	}

	.profile .img-container {
		width: 35px;
		height: 35px;
		cursor: pointer;
	}

	.profile .img-container img {
		width: 35px;
		height: 35px;
		object-fit: cover;
		border-radius: 50%;
	}

	a {
		margin-right: 20px;
	}

	.layout {
		position: sticky;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 200;
	}

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px 30px;
	}
</style>
