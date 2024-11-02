<script>
	import Accessories from "$features/addons/components/Accessories.svelte";
	import Exterior from "$features/exterior/components/Exterior.svelte";
	import ExteriorColor from "$features/exterior/components/ExteriorColor.svelte";
	import FullSelfDriving from "$features/addons/components/FullSelfDriving.svelte";
	import Interior from "$features/interior/components/Interior.svelte";
	import InteriorColor from "$features/interior/components/InteriorColor.svelte";
	import PaymentBreakdown from "$features/price/components/PaymentBreakdown.svelte";
	import PerformancePackage from "$features/addons/components/PerformancePackage.svelte";
	import TotalPrice from "$features/price/components/TotalPrice.svelte";
	import PerformanceWheels from "$features/addons/components/PerformanceWheels.svelte";
</script>

<section class="p-6">
	<div class="container mx-auto max-w-7xl wrapper-grid">
		<!-- left column : images -->
		<div class="relative">
			<div class="flex flex-col items-stretch sticky top-4">
				<!-- car -->
				<Exterior />
				<!-- interior -->
				<Interior />
			</div>
		</div>
		<!-- right column : config menu -->
		<div class="flex flex-col items-stretch">
			<div class="text-center space-y-2 mb-6 sm:text-left">
				<h1 class="text-4xl font-bold text-gray-800 sm:text-6xl">Model Y</h1>
				<p class="text-xl text-gray-800 font-extralight sm:text-2xl">
					Customize Your Car
				</p>
			</div>
			<!-- car color -->
			<ExteriorColor />
			<!-- interior color -->
			<InteriorColor />
			<!-- wheel type -->
			<PerformanceWheels />
			<!-- full self driving -->
			<FullSelfDriving />
			<!-- performance package -->
			<PerformancePackage />
			<!-- accessories -->
			<Accessories />
			<!-- total price -->
			<TotalPrice />
			<!-- division line -->
			<div class="w-full h-1 bg-gray-200 mb-6"></div>
			<!-- payment breakdown -->
			<PaymentBreakdown />
		</div>
	</div>
</section>

<style>
	.wrapper-grid {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 1.5rem;
	}
	@media (min-width: 680px) {
		.wrapper-grid {
			display: grid;
			grid-template-columns: 6fr 4fr;
			column-gap: 1.5rem;
		}
	}
</style>
