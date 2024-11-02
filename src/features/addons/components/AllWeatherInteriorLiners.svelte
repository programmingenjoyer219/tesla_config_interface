<script lang="ts">
	import { ALL_WEATHER_INTERIOR_LINERS_RATE } from "$features/price/util/priceConfig";
	import { allWeatherInteriorLinersStore } from "../stores/allWeatherInteriorLiners.svelte";
</script>

<div class="accessory p-4 rounded-md ring-2 ring-gray-400/75 shadow-md">
	<div class="flex items-center justify-start">
		<span class="text-sm min-[425px]:text-base"
			>All-Weather Interior Liners</span
		>
	</div>
	<div class="flex items-center justify-start">
		<input
			type="checkbox"
			class="size-6"
			bind:checked={allWeatherInteriorLinersStore.value}
		/>
	</div>
	<div class="flex items-center justify-start">
		<span class="text-sm min-[425px]:text-base"
			>${ALL_WEATHER_INTERIOR_LINERS_RATE}</span
		>
	</div>
</div>
