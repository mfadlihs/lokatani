import { getToken, setGlobalToken } from "@/utils/token";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface CONTEXT_TYPE {
	token: {
		token: string;
		setToken: React.Dispatch<React.SetStateAction<string>>;
	};
}

export const AppContext = createContext<CONTEXT_TYPE>({} as CONTEXT_TYPE);

export default function ContextWrapper({ children }: { children: ReactNode }) {
	const [token, setToken] = useState<string | null>("");

	useEffect(() => {
		setToken(getToken());
		// setToken(gettoken)
		// setToken(localStorage.getItem(''))
	}, []);

	useEffect(() => {
		token && setGlobalToken(token);
	}, [token]);

	const DEFAULT_VALUE = {
		token: {
			token,
			setToken,
		},
	} as CONTEXT_TYPE;

	return (
		<AppContext.Provider value={DEFAULT_VALUE}>{children}</AppContext.Provider>
	);
}
