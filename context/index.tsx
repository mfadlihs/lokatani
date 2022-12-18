import { User } from "@/services/types";
import { RestApi } from "@/utils/api";
import { getToken, setGlobalToken } from "@/utils/token";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface CONTEXT_TYPE {
	token: {
		token: string;
		setToken: React.Dispatch<React.SetStateAction<string>>;
	};
	user: {
		user: User;
		setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
	};
}

export const AppContext = createContext<CONTEXT_TYPE>({} as CONTEXT_TYPE);

export default function ContextWrapper({ children }: { children: ReactNode }) {
	const [token, setToken] = useState<string | null>("");
	const [user, setUser] = useState<User | null>();

	useEffect(() => {
		setToken(getToken());
	}, []);

	useEffect(() => {
		if (token === "") {
			setUser(null);
			return;
		}
		setGlobalToken(token as string);
		RestApi.get("/user", {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
			.then(e => {
				setUser(e.data);
			})
			.catch(_ => {
				alert("token salah mohon login ulang");
				setToken("");
				setGlobalToken("");
			});
	}, [token]);

	useEffect(() => {
		console.log(user);
	}, [user]);

	const DEFAULT_VALUE = {
		token: {
			token,
			setToken,
		},
		user: {
			user,
			setUser,
		},
	} as CONTEXT_TYPE;

	return (
		<AppContext.Provider value={DEFAULT_VALUE}>{children}</AppContext.Provider>
	);
}
