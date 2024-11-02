let performanceWheels = $state<boolean>(false);

export const performanceWheelsStore = {
	get value() {
		return performanceWheels;
	},
	set value(v) {
		performanceWheels = v;
	},
};
