<script lang="ts">
	import { interiorColorStore, type InteriorColor } from "../stores/interiorColor.svelte";

	const colors = ["dark", "light"];
</script>

<div class="space-y-3 mb-6">
	<p class="font-medium text-gray-800">Interior Color</p>
	<ul class="grid grid-cols-6 gap-1 sm:gap-2">
		{#each colors as btnColor}
			<li class="grid place-content-center">
				<button
					onclick={() => (interiorColorStore.value = btnColor as InteriorColor)}
					class="h-fit w-fit rounded-full focus:ring-4 focus:ring-gray-300/75 p-1"
				>
					<img src="/assets/buttons/button-{btnColor}.avif" alt={btnColor} />
				</button>
			</li>
		{/each}
	</ul>
</div>
