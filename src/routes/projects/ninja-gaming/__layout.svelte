<script>
	import Navbar from '$lib/components/ninja-gaming/Navbar.svelte';
	import Title from '$lib/components/ninja-gaming/Title.svelte';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Ninja Gaming</title>
</svelte:head>

<main in:fly={{ y: 50, duration: 300, delay: 300 }} out:fly={{ duration: 300 }}>
	<slot />
	<Navbar />
	<div class="footer">
		<p>Copyright 2022 Ninja Gaming Guides</p>
	</div>
</main>

<style>
	.footer {
		text-align: center;
		margin: 30px 0;
		/* border: 1px solid; */
	}

	header {
		display: flex;
		justify-content: center;
	}

	main {
		/* max-width: 960px;
		margin: auto; */
		height: 100vh;
		/* padding: 20px auto; */
	}
</style>
