let performanceUpgrade = $state<boolean>(false);

export const performanceUpgradeStore = {
	get value() {
		return performanceUpgrade;
	},
	set value(v) {
		performanceUpgrade = v;
	},
};
