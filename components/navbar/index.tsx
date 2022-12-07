import { Button } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import { BackDrop, Container } from "./style";
import useContainerDimensions from "@/hooks/useContainerDimension";

export default function Navbar() {
	const containerRef = useRef<HTMLDivElement>(null);

	// console.log(useContainerDimensions<HTMLDivElement>(containerRef).height);
	const { height } = useContainerDimensions<HTMLDivElement>(containerRef);

	return (
		<>
			<Container ref={containerRef}>
				<Image
					width={180}
					height={80}
					src={"/assets/images/logo.svg"}
					alt='logo'
				/>
				<div className='flex gap-16'>
					<Button variant='outlined' color='secondary' className='text-white'>
						Pasar
					</Button>
					<Button variant='outlined' color='secondary' className='text-white'>
						Artikel
					</Button>
					<Button
						className='bg-secondary-1'
						color='secondary'
						variant='contained'>
						REGISTRASI
					</Button>
				</div>
			</Container>
			<BackDrop height={height} />
		</>
	);
}
