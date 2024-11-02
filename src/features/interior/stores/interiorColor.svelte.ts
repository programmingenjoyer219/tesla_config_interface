export type InteriorColor = "light" | "dark";

let interiorColor = $state<InteriorColor>("light");

export const interiorColorStore = {
	get value() {
		return interiorColor;
	},
	set value(v) {
		interiorColor = v;
	},
};
