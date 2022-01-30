<script>
  import '$lib/style/chat.css'
  import Title from '$lib/components/Title.svelte'
</script>

<svelte:head>
	<title>Instant Messenger</title>
</svelte:head>

<div class="chat">
  <Title title="Messenger" />
  <slot />
</div>