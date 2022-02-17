<script context="module">
  export const load = async ({ fetch, params }) => {
    console.log('id: ', params.id)
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const res = await fetch(`/projects/ninja-gaming/guides/${params.id}.json`)
    console.log('post | server ', res)
    if (res.ok) {
      const { post } = await res.json()
      return {
        props: {
          id: params.id,
          guide: post
        }
      }
    }
    return {
      status: res.status,
      // error: new Error('Could not fetch guide'),
      error: new Error(`Not Found /${params.id}`),
            
      // status: 301,
      // redirect: '/projects/ninja-gaming/guides'
    }
  }
</script>

<script>
  import { fly } from 'svelte/transition'
  
  export let guide
</script>

<div class="guide" in:fly={{ y: 50, duration: 300, delay: 300 }} out:fly={{ duration: 300 }}>
  <h2>{guide.title}</h2>
  <p>{guide.body}</p>
</div>

<style>
  .guide {
    margin: 20px 0;
    padding: 10px; 
    min-height: calc(100vh - 80px);   
    /* border: 1px dotted rgba(255, 255, 255, 0.2); */
  }
</style>