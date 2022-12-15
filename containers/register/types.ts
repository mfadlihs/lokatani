export interface Register {
	nickname: string;
	email: string;
	region: string;
	username: string;
	confirmPassword: string;
	password: string;
	status: statusRegister;
}

export type statusRegister = "pembeli" | "penjual" | "";
