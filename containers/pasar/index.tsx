import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import Banner from "./banner";
import Products from "./products";

export default function PasarContainer() {
	return (
		<div className=''>
			<Navbar />
			<div className='px-16 py-16'>
				<Banner />
				<Products />
			</div>
			<Footer />
		</div>
	);
}
