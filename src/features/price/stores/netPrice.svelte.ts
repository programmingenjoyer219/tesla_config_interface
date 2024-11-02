import { allWeatherInteriorLinersStore } from "$features/addons/stores/allWeatherInteriorLiners.svelte";
import { centerConsoleTrayStore } from "$features/addons/stores/centerConsoleTray.svelte";
import { fullSelfDrivingStore } from "$features/addons/stores/fullSelfDriving.svelte";
import { performanceUpgradeStore } from "$features/addons/stores/performanceUpgrade.svelte";
import { performanceWheelsStore } from "$features/addons/stores/performanceWheels.svelte";
import { sunshadeStore } from "$features/addons/stores/sunshade.svelte";
import { DerivedPrice } from "../util/derivedPrice";
import {
	ALL_WEATHER_INTERIOR_LINERS_RATE,
	BASE_PRICE,
	CENTER_CONSOLE_TRAY_RATE,
	FULL_SELF_DRIVING_RATE,
	PERFORMANCE_PACKAGE_RATE,
	SUNSHADE_RATE,
	WHEEL_TYPE_RATE,
} from "../util/priceConfig";

const isRateAdded = {
	performanceWheels: false,
	performanceUpgrade: false,
	fullSelfDriving: false,
	centerConsoleTray: false,
	sunshade: false,
	allWeatherInteriorLiners: false,
};

let derivedPrice = new DerivedPrice(BASE_PRICE, isRateAdded);

let netPrice = $derived.by(() => {
	derivedPrice.updateDerivedPrice(
		performanceWheelsStore,
		"performanceWheels",
		WHEEL_TYPE_RATE
	);

	derivedPrice.updateDerivedPrice(
		performanceUpgradeStore,
		"performanceUpgrade",
		PERFORMANCE_PACKAGE_RATE
	);

	derivedPrice.updateDerivedPrice(
		fullSelfDrivingStore,
		"fullSelfDriving",
		FULL_SELF_DRIVING_RATE
	);

	derivedPrice.updateDerivedPrice(
		centerConsoleTrayStore,
		"centerConsoleTray",
		CENTER_CONSOLE_TRAY_RATE
	);

	derivedPrice.updateDerivedPrice(sunshadeStore, "sunshade", SUNSHADE_RATE);

	derivedPrice.updateDerivedPrice(
		allWeatherInteriorLinersStore,
		"allWeatherInteriorLiners",
		ALL_WEATHER_INTERIOR_LINERS_RATE
	);

	return derivedPrice.value;
});

export const netPriceStore = {
	get value() {
		return netPrice;
	},
};
