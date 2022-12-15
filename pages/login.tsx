import Loading from "@/components/loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const LoginRoutes = dynamic(() => import("@/containers/login"), {
	loading: () => Loading(),
});

export default function LoginPage() {
	return (
		<>
			<Head>
				<title>Lokatani - Login</title>
			</Head>
			<LoginRoutes />
		</>
	);
}
