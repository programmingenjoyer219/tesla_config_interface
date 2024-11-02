<script>
	import { interiorColorStore } from "../stores/interiorColor.svelte";
</script>

<div
	class="bg-center bg-cover bg-no-repeat h-[220px]"
	style="background-image: url(/assets/interior/model-y-interior-{interiorColorStore.value}.jpg);"
></div>
