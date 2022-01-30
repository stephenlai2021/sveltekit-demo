<script>
	import '$lib/style/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>Sveltekit Demo</title>
</svelte:head>

<Navbar />
<slot />

<style>
	:global(body) {
		transition: background-color 0.3s;
	}
	:global(.dark) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
</style>
