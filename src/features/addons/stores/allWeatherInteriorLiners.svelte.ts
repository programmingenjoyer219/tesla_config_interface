let allWeatherInteriorLiners = $state<boolean>(false);

export const allWeatherInteriorLinersStore = {
	get value() {
		return allWeatherInteriorLiners;
	},
	set value(v) {
		allWeatherInteriorLiners = v;
	},
};
