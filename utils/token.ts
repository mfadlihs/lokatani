export const getToken: () => string = () => {
	if (typeof window != undefined) {
		return JSON.parse(localStorage.getItem("lokatani-token") as string);
	}
};

export const setGlobalToken: (token: string) => void = token => {
	localStorage.setItem("lokatani-token", JSON.stringify(token));
};
