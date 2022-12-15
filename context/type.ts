import React from "react";

export interface CONTEXT_TYPE {
	token: {
		token: string;
		setToken: React.Dispatch<React.SetStateAction<string>>;
	};
}

export const DEFAULT_VALUE_CONTEXT = {
	token: {
		token: "",
		setToken: () => null,
	},
} as CONTEXT_TYPE;
