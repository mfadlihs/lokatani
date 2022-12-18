import Loading from "@/components/loading";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const AddRoute = dynamic(() => import("@/containers/add"), {
	loading: () => <Loading />,
});

export default function Add() {
	return (
		<>
			<Head>
				<title>Tambah Produk</title>
			</Head>
			<AddRoute />
		</>
	);
}
