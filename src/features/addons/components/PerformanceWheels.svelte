<script lang="ts">
	import { WHEEL_TYPE_RATE } from "$features/price/util/priceConfig";
	import { performanceWheelsStore } from "../stores/performanceWheels.svelte";
</script>

<div class="mb-6 space-y-3">
	<p class="font-medium text-gray-800">Wheels</p>
	<div class="grid grid-rows-2 gap-2">
		<button
			onclick={() => {
				performanceWheelsStore.value = false;
			}}
			class="font-medium text-sm min-[425px]:text-base p-4 {performanceWheelsStore.value
				? 'bg-white text-slate-700 hover:bg-slate-700 hover:text-gray-50'
				: 'bg-slate-700 text-gray-50 hover:bg-opacity-90'} rounded-md transition-colors duration-200"
			>Standard Wheels
		</button>
		<button
			onclick={() => {
				performanceWheelsStore.value = true;
			}}
			class="font-medium text-sm min-[425px]:text-base p-4 {performanceWheelsStore.value
				? 'bg-slate-600 text-gray-50'
				: 'bg-gray-200 text-slate-700'} rounded-md hover:bg-slate-600 hover:text-gray-50 transition-colors duration-200"
			>Performance Wheels (+{WHEEL_TYPE_RATE.toLocaleString()})
		</button>
	</div>
</div>
