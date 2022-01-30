<script context="module">
	import { getAllDocs } from '$lib/functions/firebase/getDocs';

	export const load = async () => {
		const { docs } = await getAllDocs('whatzapp_users');

		return {
			props: {
				users: docs
			}
		};
	};
</script>

<script>
	export let users;
	console.log('users | client: ', users);
</script>

<!-- <div class="page"> -->
<section>
	In this demo, I fetch firestore on server side, I also make fetch function a separate file, and I import it in load function, because the data is passed down as props before the page component is mounted, an loading indicator is not required
	<div class="users">
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
	</div>
</section>


