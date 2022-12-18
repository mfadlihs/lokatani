import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "./style";

export default function Article() {
	return (
		<div className='mt-36 flex justify-between gap-16'>
			<Card>
				<Image
					src={"/assets/images/pasar.png"}
					width={350}
					height={266}
					alt='pasar'
					className='mx-auto block'
				/>
				<div className='h2 text-center mt-10'>Pasar</div>
				<div className='mt-4 h5 font-normal text-center text-text-secondary'>
					Belanja kebutuhan dan jual bahan panganmu di lokatani
				</div>
				<Link href='/pasar'>
					<Button
						variant='contained'
						fullWidth
						color='secondary'
						className='font-bold py-5 text-base mt-16'>
						KUNJUNGI PASAR
					</Button>
				</Link>
			</Card>
			<Card>
				<Image
					src={"/assets/images/artikel.png"}
					width={350}
					height={266}
					alt='pasar'
					className='mx-auto block'
				/>
				<div className='h2 text-center mt-10'>Artikel</div>
				<div className='mt-4 h5 font-normal text-center text-text-secondary'>
					Tetap up-to-date tentang kondisi terkini dunia pangan dan pertanian di
					Indonesia bahkan dunia
				</div>
				<Button
					variant='contained'
					fullWidth
					color='secondary'
					className='font-bold py-5 text-base mt-8'>
					KUNJUNGI PASAR
				</Button>
			</Card>
		</div>
	);
}
