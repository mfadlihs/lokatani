import Image from "next/image";
import React from "react";

export default function Footer() {
	return (
		<div className='w-screen bg-primary-2 p-8'>
			<Image
				src='/assets/images/logo.svg'
				width={200}
				height={150}
				alt='logo'
				className='m-auto block'
			/>
		</div>
	);
}
