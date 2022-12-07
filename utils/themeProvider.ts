import { ThemeProvider, createTheme } from "@mui/material/styles";
import ColorConstant, { grey, primary, secondary } from "./colorConstant";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: primary[2],
			"100": primary[1],
		},
		secondary: {
			main: secondary[1],
		},
		text: {
			primary: primary.font,
			secondary: grey[60],
		},
	},
});

export default theme;
