import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@mui/material";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { TextField } from "./style";

export default function LoginContainer() {
	const [userForm, setUserForm] = useState({
		username: "",
		password: "",
	});

	useEffect(() => {
		console.log(userForm);
	}, [userForm]);

	return (
		<>
			<Navbar />
			<div className='px-16 mt-48 min-h-screen'>
				<div className='h1 text-primary-font'>Masuk</div>
				<form>
					<div className='h3 mt-16 mb-3'>Email</div>
					<TextField
						placeholder='Masukkan Email anda'
						className='h5 font-normal'
						onChange={e => {
							setUserForm({ ...userForm, username: e.target.value });
						}}
						type='email'
					/>
					<div className='mt-8 h3 mb-3'>Password</div>
					<TextField
						placeholder='Masukkan password anda'
						className='h5 font-normal'
						type='password'
						onChange={e => {
							setUserForm({ ...userForm, password: e.target.value });
						}}
					/>
					<div className='mt-16 flex justify-between items-center'>
						<div className='flex h4 gap-2'>
							<div className='font-normal text-grey-60'>Belum punya akun?</div>
							<Link href={"/register"}>
								<div className='text-primary-font'>Register</div>
							</Link>
						</div>
						<Button
							variant='contained'
							className='py-4 h4 px-12'
							color='secondary'>
							Masuk
						</Button>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
}
