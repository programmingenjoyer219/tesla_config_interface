let sunshade = $state<boolean>(false);

export const sunshadeStore = {
	get value() {
		return sunshade;
	},
	set value(v) {
		sunshade = v;
	},
};
