<script>
	import Title from '$lib/components/ninja-gaming/Title.svelte';
	import { fly } from 'svelte/transition';
</script>

<!-- <div class="about" in:fly={{ y: 50, duration: 300, delay: 300 }} out:fly={{ duration: 300 }}> -->
<div class="about">
	<h2>About Us</h2>
	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus esse eligendi eum velit
		assumenda! Ratione nulla ut tempora consequuntur esse ea excepturi quisquam amet natus
		exercitationem, nesciunt rerum eligendi praesentium maxime odio in neque itaque maiores quae id
		dignissimos earum? Odit sapiente autem tempora. Adipisci nostrum non quisquam assumenda,
		doloribus laudantium vero laboriosam dolorum, natus ullam dolore? Quam quas aperiam officiis
		magni voluptas necessitatibus quaerat quisquam iste ut velit, sequi quos. Iusto, quas illo sint
		reprehenderit blanditiis omnis earum saepe adipisci, ea maxime quibusdam quo consectetur aliquam
		necessitatibus deserunt nisi fugiat voluptatem optio. Similique temporibus nobis dolores. Eum, a
		assumenda.
	</p>
</div>

<style>
	h2 {
		text-align: center;
	}
	.about {
		margin: 20px auto;
	}
</style>
