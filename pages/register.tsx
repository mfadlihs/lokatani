import Loading from "@/components/loading";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const RegisterRoute = dynamic(() => import("@/containers/register"), {
	loading: () => <Loading />,
});

export default function Register() {
	return (
		<>
			<Head>
				<title>Lokatani - Register</title>
			</Head>
			<RegisterRoute />
		</>
	);
}
