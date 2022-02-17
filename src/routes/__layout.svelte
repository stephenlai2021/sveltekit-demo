<script context="module">
</script>

<script>
	import '$lib/style/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Auth from '$lib/components/AuthMenu.svelte';
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
</script>

<svelte:head>
	<title>Sveltekit Demo</title>
</svelte:head>

<SvelteTheme />
<div class="layout">
	<Auth />
	<div class="page">
		<Navbar />
		<div class="content">
			<slot />
		</div>
	</div>
</div>

<style>
	.layout {
		overflow-x: hidden;
	}

	.content {
		margin-left: 20%;
		height: 100%;
		width: 70%;
	}

	.page {
		width: 100vw;
		border: 1px solid rgba(255, 255, 255, 0.06);
		display: flex;
		overflow-y: auto;
		height: 90vh;
	}
</style>
