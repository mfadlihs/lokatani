import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../utils/themeProvider";
import ContextWrapper from "@/context";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<ContextWrapper>
				<Component {...pageProps} />
			</ContextWrapper>
		</ThemeProvider>
	);
}
