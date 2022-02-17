<script>
	import Shimmer from '$lib/components/booklist/Shimmer.svelte'

  let books = [1, 1, 1]
</script>

<ul>
	{#each books as book}
		<li>
			<div class="details">
				<div class="title" />
				<p class="author" />
			</div>
			<div class="icons">
				<div class="icon-wrapper">
					<span class="icon" />
				</div>
				<div class="icon-wrapper">
					<span class="icon" />
				</div>
			</div>
			<Shimmer />
		</li>
		{/each}
	</ul>

<style>
	li {
		overflow: hidden;
		position: relative;
		list-style: none;
		border-radius: 5px;
		padding: 10px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
		background: #f2f2f2;
		width: 500px;
	}

	.title,
	.icon,
	.author {
		background: var(--dark-mode-text);
	}

	span {
		width: 26px;
		height: 26px;
	}

	.author {
		width: 100px;
		height: 24px;
		margin-top: 10px;
	}

	.icons {
		display: flex;
	}

	.icon {
		cursor: pointer;
		display: flex;
		margin-left: 10px;
	}

	.title {
		width: 400px;
		height: 28px;
	}	
</style>
