<!-- <script context="module">
	import { auth } from '$lib/firebase/client';
	import { onAuthStateChanged } from 'firebase/auth';

	export const load = () => {
		let user;

		onAuthStateChanged(auth, (cred) => {
			if (!user) {
				console.log('no loggedin user !');
				return {
					status: 301,
					redirect: '/demo13'
				};
			} else {
				user = cred;
			}
		});

		return {};
	};
</script> -->

<script>
	import Navbar from '$lib/components/blog/Navbar.svelte';
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>
<div class="page">
	<div class="layout">
		<Navbar />
		<slot />
	</div>
</div>

