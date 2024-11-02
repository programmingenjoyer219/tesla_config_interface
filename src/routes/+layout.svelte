<script>
	import Header from "$components/Header.svelte";
  import "../app.css";
  
  let { children } = $props();
</script>

<Header />
<main>
  {@render children()}
</main>