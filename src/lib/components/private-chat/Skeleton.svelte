<script>
	import Shimmer from '$lib/components/booklist/Shimmer.svelte';

	let users = [1, 1, 1, 1, 1, 1, 1, 1];
</script>

<ul>
	{#each users as user}
		<div class="block">
			<div class="imgbx" />
			<div class="details">
				<div class="listHead">
					<div class="title">Stephen Lai</div>
					<div class="time">10:56</div>
				</div>
				<div class="message_p">
					<p>How to make Whatsapp clone using html and css</p>
				</div>
			</div>
			<Shimmer />
		</div>
		{/each}
</ul>

<style>
	.listHead {
		display: flex;
		justify-content: space-between;
		margin-bottom: 2px;
	}

	.time {
		height: 18px;
	}

	.imgbx,
	.title,
	.time,
	.message_p {
		background: #d6d8dc;
	}

	.block {
		background: #f2f2f2;
		position: relative;
		overflow: hidden;
	}

	.title, .time, .message_p p {
		color: transparent;
	}

	.title {
		height: 22px;
		max-width: 100px;
	}

	.message_p {
		height: 18px;
		max-width: 150px;
	}

	.title,
	.message_p {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.imgbx {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.block {
		display: flex;
		padding: 15px;
	}
</style>
