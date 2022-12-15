import Loading from "@/components/loading";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const PasarRoute = dynamic(() => import("@/containers/pasar"), {
	loading: () => <Loading />,
});

export default function Pasar() {
	return (
		<>
			<Head>
				<title>Lokatani - Pasar</title>
			</Head>
			<PasarRoute />
		</>
	);
}
