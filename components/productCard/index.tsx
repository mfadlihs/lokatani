import { Product } from "@/services/types";
import { rupiah } from "@/utils/currency";
import Image from "next/image";
import React from "react";
import { Container, ImageCard } from "./style";

export default function ProductCard({ data }: { data: Product }) {
	return (
		<Container className='body1 text-grey-60 m-auto'>
			<ImageCard>
				<div className='items-center w-fit pad py-2 px-3 bg-grey-10 absolute gap-1 rounded-tr-xl bottom-0 left-0 flex'>
					<img src='/assets/icons/star.svg' className='w-[30px] h-[30px]' />5
				</div>
			</ImageCard>
			<div className='pt-4 pb-2'>
				<div className='h6 mb-2 text-black'>{data.namaproduk}</div>
				<div className='flex items-center'>
					<div className='h4 text-black'>
						{rupiah(data.harga)}
						<span className='body1 text-grey-60'>/250gr</span>
					</div>
				</div>
				<div className='flex justify-between mt-3'>
					<div>
						<div className='flex items-center gap-1'>
							<img src='/assets/icons/pin.svg' />
							<span>Kab. Sidoarjo</span>
						</div>
						<div className='mt-2'>
							<div>
								Terjual <span className='text-black font-bold'>20K+</span> (kg)
							</div>
						</div>
					</div>
					<div className='bg-[#4BA063] p-5 rounded-lg cursor-pointer'>
						<img src='/assets/icons/addcart.svg' />
					</div>
				</div>
			</div>
		</Container>
	);
}
