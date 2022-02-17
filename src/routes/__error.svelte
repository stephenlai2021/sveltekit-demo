<script context="module">
	export const load = ({ error }) => {
		return {
			props: {
				message: error.message
			}
		};
	};
</script>

<script>
  import '$lib/style/ninja-gaming.css'

	export let message
</script>

<div class="layout">
	<!-- <p>Status: {status}</p>
	<p>Error message: {message}</p> -->

	<div class="error">
		<h2>Ooops</h2>
		<p>{message}</p>
		<a href="/projects/ninja-gaming/guides">View all Guides...</a>
	</div>
</div>

<style>
	.error {
    /* margin: 40px 0; */
		text-align: center;
		margin-bottom: 60px;
	}
</style>
