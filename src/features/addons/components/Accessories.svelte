<script>
	import AllWeatherInteriorLiners from "$features/addons/components/AllWeatherInteriorLiners.svelte";
	import CenterConsoleTray from "$features/addons/components/CenterConsoleTray.svelte";
	import Sunshade from "$features/addons/components/Sunshade.svelte";
</script>

<div class="mb-6 space-y-3">
	<p class="text-gray-800 font-medium">Accessories</p>
	<div class="grid grid-rows-3 gap-2">
		<CenterConsoleTray />
		<Sunshade />
		<AllWeatherInteriorLiners />
	</div>
</div>
