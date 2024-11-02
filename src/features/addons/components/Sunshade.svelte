<script lang="ts">
	import { SUNSHADE_RATE } from "$features/price/util/priceConfig";
	import { sunshadeStore } from "../stores/sunshade.svelte";
</script>

<div class="accessory p-4 rounded-md ring-2 ring-gray-400/75 shadow-md">
	<div class="flex items-center justify-start">
		<span class="text-sm min-[425px]:text-base">Sunshade</span>
	</div>
	<div class="flex items-center justify-start">
		<input type="checkbox" class="size-6" bind:checked={sunshadeStore.value} />
	</div>
	<div class="flex items-center justify-start">
		<span class="text-sm min-[425px]:text-base">${SUNSHADE_RATE}</span>
	</div>
</div>
