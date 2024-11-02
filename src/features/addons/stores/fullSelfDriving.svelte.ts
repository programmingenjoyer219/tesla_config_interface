let fullSelfDriving = $state<boolean>(false);

export const fullSelfDrivingStore = {
	get value() {
		return fullSelfDriving;
	},
	set value(v) {
		fullSelfDriving = v;
	},
};
