<script>
	import { performanceWheelsStore } from "$features/addons/stores/performanceWheels.svelte";
	import { exteriorColorStore } from "../stores/exteriorColor.svelte";

	let imgLink = $derived(
		performanceWheelsStore.value
			? `exterior-performance/model-y-${exteriorColorStore.value}-performance.jpg`
			: `exterior/model-y-${exteriorColorStore.value}.jpg`
	);
</script>

<div
	id="car"
	class="bg-center bg-cover bg-no-repeat h-[200px] sm:h-[300px]"
	style="background-image: url(/assets/{imgLink});"
></div>

<style>
	#car {
		background-size: 150%;
	}
	@media (max-width: 680px) {
		#car {
			background-size: 125%;
		}
	}
</style>
