import { netPriceStore } from "./netPrice.svelte";

let downPayment = $derived(netPriceStore.value * 0.1);

export const downPaymentStore = {
	get value() {
		return downPayment;
	},
};
