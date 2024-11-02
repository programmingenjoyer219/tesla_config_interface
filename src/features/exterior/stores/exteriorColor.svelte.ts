export type ExteriorColor =
	| "deep-blue-metallic"
	| "pearl-white"
	| "quicksilver"
	| "solid-black"
	| "stealth-grey"
	| "ultra-red";

let exteriorColor = $state<ExteriorColor>("deep-blue-metallic");

export const exteriorColorStore = {
	get value() {
		return exteriorColor;
	},
	set value(v) {
		exteriorColor = v;
	},
};
