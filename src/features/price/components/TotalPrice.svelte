<script lang="ts">
	import { netPriceStore } from "../stores/netPrice.svelte";
</script>

<div class="my-6">
	<h3 class="text-base min-[425px]:text-lg font-medium text-gray-800">
		Total Price
	</h3>
	<h2 class="text-2xl min-[425px]:text-3xl font-bold text-gray-800">
		${netPriceStore.value.toLocaleString()}
	</h2>
</div>
