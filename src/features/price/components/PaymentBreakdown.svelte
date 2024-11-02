<script>
	import { downPaymentStore } from "../stores/downPayment.svelte";
	import { monthlyPaymentStore } from "../stores/monthlyPayment.svelte";
	import { INTEREST_RATE, LOAN_TERM } from "../util/priceConfig";
</script>

<div class="space-y-3">
	<h3 class="text-lg font-medium text-gray-800">Estimated Payment Breakdown</h3>
	<div class="space-y-1">
		<p class="text-sm min-[425px]:text-base">
			Down Payment: <span class="font-medium text-gray-800"
				>${downPaymentStore.value.toLocaleString()}
			</span>
		</p>
		<p class="text-sm min-[425px]:text-base">
			Loan Term: <span class="font-medium text-gray-800"
				>{LOAN_TERM} months
			</span>
		</p>
		<p class="text-sm min-[425px]:text-base">
			Interest Rate: <span class="font-medium text-gray-800"
				>{INTEREST_RATE * 100}% APR
			</span>
		</p>
	</div>
	<div>
		<p class="text-sm min-[425px]:text-base">Estimated Monthly Payment:</p>
		<span class="text-2xl min-[425px]:text-3xl font-bold text-gray-800"
			>${monthlyPaymentStore.value.toFixed(2).toLocaleString()}
		</span>
	</div>
</div>
