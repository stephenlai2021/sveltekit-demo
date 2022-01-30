<script context="module">
  export const load = ({ error, status }) => {
    return {
      props: {
        status,
        message: error.message
      }
    }
  }
</script>

<script>
  export let message, status
</script>

<p>
  Status: {status}
</p>
<p>
  Error message: {message}
</p>