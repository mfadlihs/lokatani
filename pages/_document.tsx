import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
	return (
		<Html>
			<Head>
				{/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap'
					rel='stylesheet'></link>
			</Head>
			<body>
				<Main />

				<NextScript />
			</body>
		</Html>
	);
}
