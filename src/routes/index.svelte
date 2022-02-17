<script>
	import { onMount } from 'svelte'
	import { auth } from '$lib/firebase/client'
	import { onAuthStateChanged } from 'firebase/auth'
	import { goto } from '$app/navigation'

	let show = false;
	onMount(() => {
		onAuthStateChanged(auth, user => {
			if (!user) {
				goto('/login');
			} else {
				show = true;
			}
		})
	});
</script>

{#if show}
<div class="layout">
	<header>
		<img class="background" src="/city.jpg" alt="city pic" />
		<img class="foreground" src="/spiderman2.png" alt="spiderman pic" />
		<div class="title">Welcome</div>
	</header>
	<section>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore mollitia error obcaecati quo magnam itaque. Quo sed labore dolores modi iure magni commodi veniam quaerat impedit cumque doloremque enim recusandae eum temporibus soluta, voluptate laboriosam totam, nobis nam pariatur cupiditate! Quo veniam molestias cupiditate consequatur totam saepe magnam vitae!
		</p>
	</section>
</div>
{/if}

<style>
	.layout {
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
		align-items: end;
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
</style>
