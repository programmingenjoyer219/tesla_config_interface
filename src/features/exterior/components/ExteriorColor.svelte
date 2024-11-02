<script lang="ts">
	import { exteriorColorStore, type ExteriorColor } from "../stores/exteriorColor.svelte";

	const colors = [
		"deep-blue-metallic",
		"pearl-white",
		"quicksilver",
		"solid-black",
		"stealth-grey",
		"ultra-red",
	];
</script>

<div class="space-y-3 mb-6">
	<p class="font-medium text-gray-800">Exterior Color</p>
	<ul class="grid grid-cols-6 gap-1 sm:gap-2">
		{#each colors as btnColor}
			<li class="grid place-content-center">
				<button
					onclick={() => {exteriorColorStore.value = btnColor as ExteriorColor}}
					class="h-fit w-fit rounded-full focus:ring-4 focus:ring-gray-300/75 p-1"
				>
					<img src="/assets/buttons/button-{btnColor}.avif" alt={btnColor} />
				</button>
			</li>
		{/each}
	</ul>
</div>
