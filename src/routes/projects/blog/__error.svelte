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
  export let status, message
</script>

<div class="page">
  <p>
    Status Code: {status}
  </p>
  <p>
    Error Message: {message}
  </p>
</div>