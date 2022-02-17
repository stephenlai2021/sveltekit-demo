<script>
  import Title from '$lib/components/booklist/Title.svelte'
</script>

<svelte:head>
  <title>Movie Gallery</title>
</svelte:head>

<div class="page">
  <slot />
</div>

<style>
  .page {
    /* border: 1px solid; */
    margin-bottom: 20px;
  }
</style>
