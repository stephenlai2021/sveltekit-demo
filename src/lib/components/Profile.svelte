<script>
	import { auth } from '$lib/firebase/client';
	import { signOut } from 'firebase/auth';
	import { page } from '$app/stores';
	import { showProfile } from '$lib/store';

	export let user;
	console.log('user | profile: ', user);

	let logout = false;
	const handleLogout = () => {
		signOut(auth).then(() => {
			console.log('signout successfully !');
			logout = true;
		});
		showProfile.set(false);
	};

	$: if (logout) {
		console.log('current path: ', $page.url.fullpath);
		if ($page.url.fullpath === '/projects/booklist') {
			goto('/projects/booklist/login');
		}
		if ($page.url.fullpath === '/projects/todo') {
			goto('/projects/todo/login');
		}
		// if ($page.url.fullpath === '/projects/') {
		// 	goto('/projects/login');
		// }
	}
</script>

<div class="profile">
	<div class="container">
		<div class="img-container">
			{#if user.photoURL}
				<img src={user.photoURL} alt="user avatar" />
			{:else}
				<img
					src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
					alt=""
				/>
			{/if}
		</div>
		{#if user.displayName}
			<div class="user-name">{user.displayName}</div>
		{/if}
		<p class="user-email">{user.email}</p>
		<div class="btn-container">
			<button on:click={handleLogout}>Logout</button>
		</div>
	</div>
</div>

<style>
	.btn-container {
		/* border: 1px solid; */
		margin-top: 15px;
	}

	.btn-container button {
		padding: 5px 10px;
	}

	.profile {
		position: absolute;
		right: 0;
		top: 60px;
		z-index: 100;
		/* width: 150px; */
		background: white;
		border-radius: 8px;
		padding: 20px 30px;
		display: flex;
		justify-content: center;
	}

	.container {
		text-align: center;
	}

	.img-container {
		display: flex;
		justify-content: center;
		/* border: 1px solid; */
		width: 100%;
		height: 80px;
	}

	.img-container img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}

	.user-email {
		margin-top: 10px;
	}

	.user-name {
		color: black;
		/* font-weight: bold; */
		/* border: 1px solid; */
		/* width: 100%; */
		/* text-overflow: nowrap; */
		margin-top: 10px;
	}
</style>
