import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@mui/material";
import React from "react";
import { Deskripsi, TextField } from "./style";

export default function AddContainer() {
	return (
		<div>
			<Navbar />
			<div className='px-16 py-16'>
				<div className='h4 text-primary-2'>Nama Produk</div>
				<TextField className='mt-3 mb-10' />
				<div className='h4 text-primary-2'>Harga</div>
				<TextField className='mt-3 mb-10' type='number' />
				<div className='h4 text-primary-2'>Jumlah</div>
				<TextField className='mt-3 mb-10' type='number' />
				<div className='h4 text-primary-2'>Deskripsi</div>
				<Deskripsi className='mt-3 mb-10' rows={6} />
				<div className='flex justify-end'>
					<Button
						variant='contained'
						className='bg-secondary-1 text-black py-3 px-6'>
						Selesai & Tambahkan
					</Button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
