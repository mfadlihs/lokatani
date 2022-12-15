import { Button } from "@mui/material";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BackDrop, Container } from "./style";
import useContainerDimensions from "@/hooks/useContainerDimension";
import logo from "@/public/assets/images/logo.svg";
import { AppContext } from "@/context";
import { getToken } from "@/utils/token";
import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();
	const containerRef = useRef<HTMLDivElement>(null);
	const [isUser, setIsUser] = useState(false);
	const {
		token: { token },
	} = useContext(AppContext);

	const { height } = useContainerDimensions<HTMLDivElement>(containerRef);

	useEffect(() => {
		token ? setIsUser(true) : setIsUser(false);
	}, []);

	const handleClick = () => {
		token && router.push("/register");
	};

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
						variant='contained'
						onClick={handleClick}>
						{isUser ? "LOG OUT" : "REGISTER"}
					</Button>
				</div>
			</Container>
			<BackDrop height={height} />
		</>
	);
}
