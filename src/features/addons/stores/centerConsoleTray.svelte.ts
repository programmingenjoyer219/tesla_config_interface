let centerConsoleTray = $state<boolean>(false);

export const centerConsoleTrayStore = {
	get value() {
		return centerConsoleTray;
	},
	set value(v) {
		centerConsoleTray = v;
	},
};
