<script>
	import { fly } from 'svelte/transition'
</script>

<!-- <div class="home" in:fly={{ y: 50, duration: 300, delay: 300 }} out:fly={{ duration: 300 }}> -->
<div class="home">
	<h2>Welcome</h2>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti sunt explicabo
		fugit nihil, officiis eaque facere dicta quibusdam, in ipsam, veritatis corporis soluta
		distinctio doloremque ducimus veniam! Laborum, ducimus nesciunt corrupti, eaque ullam totam
		molestias sapiente eum earum facere nobis ex in at? Voluptatibus eum similique doloremque dolor
		minus. Eos autem numquam, expedita eligendi laborum corporis asperiores amet aliquam in
		molestiae nihil maxime vitae fuga facilis vel harum cum assumenda et iste pariatur deleniti
		corrupti. Itaque, sapiente ea dolorem porro repellendus culpa, commodi atque delectus
		reprehenderit nam autem magni quo incidunt reiciendis quaerat natus deleniti. Eum omnis rerum
		aliquid?
	</p>	
</div>

<style>
	h2 {
		text-align: center;
	}

	.home {
		margin: 20px auto;
	}
</style>
