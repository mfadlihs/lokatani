import { Button } from "@mui/material";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BackDrop, Container } from "./style";
import useContainerDimensions from "@/hooks/useContainerDimension";
import logo from "@/public/assets/images/logo.svg";
import { AppContext } from "@/context";
import { getToken, setGlobalToken } from "@/utils/token";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
	const router = useRouter();
	const containerRef = useRef<HTMLDivElement>(null);
	const [isUser, setIsUser] = useState(false);
	const {
		token: { token, setToken },
		user: { user },
	} = useContext(AppContext);

	const { height } = useContainerDimensions<HTMLDivElement>(containerRef);

	useEffect(() => {
		token ? setIsUser(true) : setIsUser(false);
	}, [token]);

	const handleClick = () => {
		if (!token) {
			router.push("/register");
			return;
		}
		setToken("");
		setGlobalToken("");
	};

	return (
		<>
			<Container ref={containerRef}>
				<Link href={"/"}>
					<Image width={180} height={80} src={logo} alt='logo' />
				</Link>
				<div className='flex gap-12 items-center'>
					<Link href={"/pasar"}>
						<Button variant='outlined' color='secondary' className='text-white'>
							Pasar
						</Button>
					</Link>
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
					{user && <div className='text-white h5'>{user.nickname}</div>}
				</div>
			</Container>
			<BackDrop height={height} />
		</>
	);
}
