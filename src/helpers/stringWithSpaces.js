export const stringWithSpaces= (string) => {
		return string.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}