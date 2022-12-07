import Footer from "@/components/footer";
import Image from "next/image";
import React from "react";
import Article from "./Article";
import Banner from "./Banner";

export default function HomeContainer() {
	return (
		<>
			<div className='px-16 overflow-x-hidden mb-36'>
				<div className=''>ini home ges</div>
				<Banner />
				<Article />
			</div>
			<Footer />
		</>
	);
}
