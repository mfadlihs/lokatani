import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { AppContext } from "@/context";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import Link from "next/link";
import React, {
	FormEventHandler,
	useContext,
	useEffect,
	useState,
} from "react";
import { TextField } from "./style";
import type { Register, statusRegister } from "./types";
import update from "immutability-helper";
import { RestApi } from "@/utils/api";
import { getToken } from "@/utils/token";
import { useRouter } from "next/router";

export default function RegisterContainer() {
	const router = useRouter();
	const {
		token: { token, setToken },
	} = useContext(AppContext);
	const [form, setForm] = useState<Register>({
		confirmPassword: "",
		email: "",
		nickname: "",
		password: "",
		region: "Indonesia",
		status: "",
		username: "",
	});

	useEffect(() => {
		console.log(getToken());
		getToken() && router.push("/");
	}, []);

	const handleStatus = (event: SelectChangeEvent) => {
		setForm({ ...form, status: event.target.value as statusRegister });
	};

	useEffect(() => {
		console.log(token);
	}, [token]);

	const checkPassword: () => boolean = () => {
		if (form.password === form.confirmPassword) {
			return true;
		}
		return false;
	};

	const onSubmit: FormEventHandler = e => {
		e.preventDefault();
		if (!checkPassword()) {
			alert("password tidak sama");
			return;
		}
		RestApi.post("/user/register", form)
			.then(value => {
				setToken(value.data.token);
				router.replace("/");
			})
			.catch(async e => {
				console.log(await e);
				alert(e.response.data.error.details[0].message);
			});

		// setToken()
	};

	return (
		<>
			<Navbar />
			<div className='py-44 px-16'>
				<form>
					<div className='h1'>Register</div>
					<div className='flex gap-4 items-end'>
						<div className='grow'>
							<div className='h3 mt-8 mb-3'>Nickname</div>
							<TextField
								required
								placeholder='Nickname anda'
								className='h5 font-normal'
								value={form.nickname}
								onChange={e => {
									setForm({ ...form, nickname: e.target.value });
								}}
							/>
						</div>
						<div className='grow'>
							<div className='h3 mt-8 mb-3'>Username</div>
							<TextField
								required
								placeholder='Username Anda'
								className='h5 font-normal'
								value={form.username}
								onChange={e => {
									setForm({ ...form, username: e.target.value });
								}}
							/>
						</div>
						<FormControl className='grow'>
							<div className='h3 mt-8 mb-3'>Status</div>
							<Select
								required
								fullWidth
								style={{
									backgroundColor: "rgb(242, 242, 242)",
								}}
								variant='outlined'
								placeholder='Status'
								className='h5 font-normal pt-0'
								value={form.status}
								onChange={handleStatus}>
								<MenuItem value='pembeli'>Pembeli</MenuItem>
								<MenuItem value='penjual'>Penjual</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className='h3 mt-9 mb-3'>Email</div>
					<TextField
						placeholder='Email@example.com'
						type='email'
						className='h5 font-normal'
						required
						value={form.email}
						onChange={e => {
							setForm({ ...form, email: e.target.value });
						}}
					/>
					<div className='h3 mt-9 mb-3'>Password</div>
					<TextField
						placeholder='Masukkan password anda'
						type='password'
						className='h5 font-normal'
						required
						value={form.password}
						onChange={e => {
							setForm({ ...form, password: e.target.value });
						}}
					/>
					<div className='h3 mt-9 mb-3'>Konfirmasi Password</div>
					<TextField
						placeholder='Konfirmasi Password'
						type='password'
						className='h5 font-normal'
						required
						value={form.confirmPassword}
						onChange={e => {
							setForm({ ...form, confirmPassword: e.target.value });
						}}
					/>

					<div className='mt-16 flex justify-between items-center'>
						<div className='flex h4 gap-2'>
							<div className='font-normal text-grey-60'>Sudah punya akun?</div>
							<Link href={"/register"}>
								<div className='text-primary-font'>Masuk</div>
							</Link>
						</div>
						<Button
							variant='contained'
							className='py-4 h4 px-12'
							color='secondary'
							type='submit'
							onSubmit={onSubmit}
							onClick={onSubmit}>
							Register
						</Button>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
}
