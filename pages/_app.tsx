import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import theme from "../utils/themeProvider";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
