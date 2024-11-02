<script lang="ts">
	import { fullSelfDrivingStore } from "../stores/fullSelfDriving.svelte";
</script>

<div class="mb-6 space-y-3 p-4 rounded-md ring-2 ring-gray-400/75 shadow-md">
	<p class="font-medium text-gray-800">Full Self-Driving</p>
	<div class="flex items-center gap-2">
		<input
			type="checkbox"
			name="full-self-driving"
			id="full-self-driving"
			class="size-6"
			bind:checked={fullSelfDrivingStore.value}
		/>
		<p class="text-sm min-[425px]:text-base">
			Add Full Self-Driving for $8,500
		</p>
	</div>
</div>
