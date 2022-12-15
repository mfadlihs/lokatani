import Loading from "@/components/loading";
import Navbar from "@/components/navbar";
import HomeContainer from "@/containers/home";
import dynamic from "next/dynamic";
import React from "react";

const HomeRoutes = dynamic(() => import("@/containers/home"), {
	loading: () => Loading(),
});

export default function Home() {
	return <HomeRoutes />;
}
