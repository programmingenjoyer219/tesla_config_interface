export class DerivedPrice {
	public value: number;
	public priceTracker: { [key: string]: boolean };

	constructor(value: number, priceTracker: { [key: string]: boolean }) {
		this.value = value;
		this.priceTracker = priceTracker;
	}

	updateDerivedPrice(
		store: { value: boolean },
		priceTrackerAttribute: string,
		featureRate: number
	) {
		if (store.value) {
			if (this.priceTracker[priceTrackerAttribute] !== true) {
				this.value += featureRate;
				this.priceTracker[priceTrackerAttribute] = true;
			}
		} else {
			if (this.priceTracker[priceTrackerAttribute] !== false) {
				this.value -= featureRate;
				this.priceTracker[priceTrackerAttribute] = false;
			}
		}
	}
}
