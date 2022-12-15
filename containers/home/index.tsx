import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import Article from "./Article";
import Banner from "./Banner";

export default function HomeContainer() {
	return (
		<div className='overflow-x-hidden'>
			<Navbar />
			<div className='px-16 mb-36'>
				<Banner />
				<Article />
			</div>
			<Footer />
		</div>
	);
}
