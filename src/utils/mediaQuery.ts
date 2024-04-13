export const calculateMediaQueryMax = (width: number) => {
	return window.matchMedia(`screen and (max-width: ${width}px)`).matches;
};
