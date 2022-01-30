<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/demo4.json');

		if (res.ok) {
			const data = await res.json();
	
			return {
				props: {
					users: data
				}
			};
		}
	};
</script>

<script>
	export let users;
</script>

<!-- <div class="page">
	<h1>Fetching Firestore data</h1>
	<p>
		In this example I integrate firebase-admin sdk, 
    fetching firestore data within api endpoint and return to client;
    on client side fetch this api endpoint and dynamically render on page
	</p>
	<pre>
    {JSON.stringify(users, null, 2)}
  </pre>
</div> -->

<section>
	In this demo, I fetch firestore with firestore Admin SDK in api endpoint (backend), then fetch again on server side (load function)
	<div class="users">
		{#each users.users as user}
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
