<script>
	import Header from "$components/Header.svelte";
  import "../app.css";
  
  let { children } = $props();
</script>

<svelte:head>
  <title>
    Tesla Configurator
  </title>
</svelte:head>

<Header />
<main>
  {@render children()}
</main>