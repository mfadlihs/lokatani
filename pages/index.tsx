import Loading from "@/components/loading";
import Navbar from "@/components/navbar";
import HomeContainer from "@/containers/home";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const HomeRoutes = dynamic(() => import("@/containers/home"), {
	loading: () => Loading(),
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Lokatani</title>
			</Head>
			<HomeRoutes />
		</>
	);
}
