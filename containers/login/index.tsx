import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { RestApi } from "@/utils/api";
import { Button } from "@mui/material";
import React, { FormEventHandler, useContext, useState } from "react";
import type { AxiosError } from "axios";
import { TextField } from "./style";
import Link from "next/link";
import { ErrorLogin } from "./type";
import { AppContext } from "@/context";

export default function LoginContainer() {
	const {
		token: { setToken },
	} = useContext(AppContext);
	const [userForm, setUserForm] = useState({
		username: "",
		password: "",
	});

	const handleSubmit: FormEventHandler = e => {
		e.preventDefault();
		RestApi.post("/user/login", userForm)
			.then(e => {
				setToken(e.data.token);
			})
			.catch((e: AxiosError) => {
				const response = e.response?.data as ErrorLogin;
				alert(response.message);
			});
	};

	return (
		<>
			<Navbar />
			<div className='px-16 py-44 min-h-screen'>
				<div className='h1 text-primary-font'>Masuk</div>
				<form onSubmit={handleSubmit}>
					<div className='h3 mt-16 mb-3'>Username</div>
					<TextField
						placeholder='Masukkan username anda'
						className='h5 font-normal'
						onChange={e => {
							setUserForm({ ...userForm, username: e.target.value });
						}}
						required
					/>
					<div className='mt-8 h3 mb-3'>Password</div>
					<TextField
						placeholder='Masukkan password anda'
						className='h5 font-normal'
						type='password'
						onChange={e => {
							setUserForm({ ...userForm, password: e.target.value });
						}}
						required
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
							color='secondary'
							type='submit'>
							Masuk
						</Button>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
}
