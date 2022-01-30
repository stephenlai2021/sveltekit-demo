<script>
	import { getAllDocs } from '$lib/functions/firebase/getDocs';
	import { onMount } from 'svelte';

	let users = [];
	let err = null;

	onMount(async () => {
		const { docs, error } = await getAllDocs('whatzapp_users');
		users = docs;
		err = error;
	});
</script>

<div class="wrapper">
	<header>
		<img class="background" src="/city.jpg" alt="city pic" />
		<img class="foreground" src="/spiderman2.png" alt="spiderman pic" />
		<div class="title">Welcome</div>
	</header>
	<section>
		In this demo, I use firebase sdk to fetch firestore (all documents in a collection) once , I
		make this fetch function a separate function, and import it on client side to render, with this method an
		indicator animation is not required. However, if we write fetch function directly on client side, then
		a loading indicator is necessary
		<div class="users">
			{#if users}
				{#each users as user}
					<div class="user-list">
						<div class="img-container">
							<img src={user.avatar} alt="user avatar" />
						</div>
						<div class="text">
							<main>
								<p>{user.name}</p>
								<p>{user.email}</p>
							</main>
							<div class="status">
								<div class="box" class:online={user.isOnline} />
							</div>
						</div>
					</div>
				{/each}
			{:else}
				<p>...waiting</p>
			{/if}
		</div>
	</section>
</div>

<style>
	/* parallax effect */
	.wrapper {
		height: 100vh;
		overflow-y: auto;
		overflow-x: hidden;
		perspective: 10px;
		font-family: 'Open Sans', sans-serif;
	}
	header {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		transform-style: preserve-3d;
		z-index: -1;
	}
	.background {
		position: absolute;
		height: 100%;
		width: 100%;
		object-fit: cover;
		z-index: -1;
		transform: translateZ(-10px) scale(2);
	}
	.foreground {
		position: absolute;
		bottom: 0;
		z-index: -1;
		transform: translateZ(-5px) scale(1.5);
	}
	.title {
		font-size: 7rem;
		color: white;
		text-shadow: 0 0 5px black;
	}
	section {
		font-size: 2rem;
		padding: 2rem;
		border-color: #333;
		color: white;
		background: black;
	}
</style>
