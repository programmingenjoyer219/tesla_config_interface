<script lang="ts">
	import { CENTER_CONSOLE_TRAY_RATE } from "$features/price/util/priceConfig";
	import { centerConsoleTrayStore } from "../stores/centerConsoleTray.svelte";
</script>

<div class="accessory p-4 rounded-md ring-2 ring-gray-400/75 shadow-md">
	<div class="flex items-center justify-start">
		<span class="text-sm min-[425px]:text-base">Center Console Tray</span>
	</div>
	<div class="flex items-center justify-start">
		<input
			type="checkbox"
			class="size-6"
			bind:checked={centerConsoleTrayStore.value}
		/>
	</div>
	<div class="flex items-center justify-start">
		<span class="text-sm min-[425px]:text-base"
			>${CENTER_CONSOLE_TRAY_RATE}</span
		>
	</div>
</div>
