import { INTEREST_RATE, LOAN_TERM } from "../util/priceConfig";
import { downPaymentStore } from "./downPayment.svelte";
import { netPriceStore } from "./netPrice.svelte";

let monthlyPayment = $derived.by(() => {
	const loanAmount = netPriceStore.value - downPaymentStore.value;
	const monthlyInterestRate = INTEREST_RATE / 12;
	return (
		(loanAmount *
			(monthlyInterestRate * Math.pow(1 + monthlyInterestRate, LOAN_TERM))) /
		(Math.pow(1 + monthlyInterestRate, LOAN_TERM) - 1)
	);
});

export const monthlyPaymentStore = {
	get value() {
		return monthlyPayment;
	},
};
