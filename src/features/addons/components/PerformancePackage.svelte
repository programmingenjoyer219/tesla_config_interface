<script lang="ts">
	import { performanceUpgradeStore } from "../stores/performanceUpgrade.svelte";
</script>

<div class="mb-6 space-y-3">
	<p class="text-gray-800 font-medium">Performance Package</p>
	<button
		onclick={() =>
			(performanceUpgradeStore.value = !performanceUpgradeStore.value)}
		class="w-full text-sm min-[425px]:text-base font-medium p-4
		{performanceUpgradeStore.value
			? 'bg-slate-700 text-gray-50 hover:bg-gray-400'
			: 'bg-gray-200 text-gray-800 hover:bg-gray-400'}
		rounded-md transition-colors duration-200"
		>Performance Upgrade (+5,000)
	</button>
</div>
