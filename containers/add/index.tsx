import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ProdukEdit } from "@/services/types";
import { RestApi } from "@/utils/api";
import { getToken } from "@/utils/token";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState, FormEventHandler, useEffect } from "react";
import { Deskripsi, TextField } from "./style";

export default function AddContainer() {
	const router = useRouter();
	const [data, setData] = useState<ProdukEdit>({
		namaproduk: "",
		harga: 0,
		jumlah: 0,
		deskripsi: "",
	});

	const handleSubmit: FormEventHandler = e => {
		e.preventDefault();
		RestApi.post("/produk/create", data, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
			.then(_ => {
				router.replace("/pasar");
			})
			.catch(_ => {
				alert("anda bukan penjual");
			});
	};

	return (
		<div>
			<Navbar />
			<div className='px-16 py-16'>
				<form onSubmit={handleSubmit}>
					<div className='h4 text-primary-2'>Nama Produk</div>
					<TextField
						className='mt-3 mb-10'
						required
						onChange={e => {
							setData({ ...data, namaproduk: e.target.value });
						}}
					/>
					<div className='h4 text-primary-2'>Harga</div>
					<TextField
						className='mt-3 mb-10'
						type='number'
						required
						onChange={e => {
							setData({ ...data, harga: Number(e.target.value) });
						}}
					/>
					<div className='h4 text-primary-2'>Jumlah</div>
					<TextField
						className='mt-3 mb-10'
						type='number'
						required
						onChange={e => {
							setData({ ...data, jumlah: Number(e.target.value) });
						}}
					/>
					<div className='h4 text-primary-2'>Deskripsi</div>
					<Deskripsi
						className='mt-3 mb-10'
						rows={6}
						required
						onChange={e => {
							setData({ ...data, deskripsi: e.target.value });
						}}
					/>
					<div className='flex justify-end'>
						<Button
							variant='contained'
							className='bg-secondary-1 text-black py-3 px-6'
							type='submit'>
							Selesai & Tambahkan
						</Button>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}
