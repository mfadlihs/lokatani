import { Button } from "@mui/material";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BackDrop, Container } from "./style";
import useContainerDimensions from "@/hooks/useContainerDimension";
import logo from "@/public/assets/images/logo.svg";
import { AppContext } from "@/context";
import { getToken } from "@/utils/token";

export default function Navbar() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isUser, setIsUser] = useState(false);

	const { height } = useContainerDimensions<HTMLDivElement>(containerRef);

	useEffect(() => {
		getToken() ? setIsUser(true) : setIsUser(false);
	}, []);

	return (
		<>
			<Container ref={containerRef}>
				<Image width={180} height={80} src={logo} alt='logo' />
				<div className='flex gap-16'>
					<Button variant='outlined' color='secondary' className='text-white'>
						Pasar
					</Button>
					<Button variant='outlined' color='secondary' className='text-white'>
						Artikel
					</Button>
					<Button
						className={`${isUser ? "bg-red-700" : "bg-secondary-1"}`}
						color='secondary'
						variant='contained'>
						{isUser ? "LOG OUT" : "REGISTER"}
						{/* REGISTRASI */}
					</Button>
				</div>
			</Container>
			<BackDrop height={height} />
		</>
	);
}
