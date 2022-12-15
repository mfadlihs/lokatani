import { TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

export default function Banner() {
	return (
		<>
			<div className='mb-11 flex bg-grey-10 w-full py-4 px-6 justify-between border-[0.5px] border-solid border-[#00000010]'>
				<div className='flex gap-5'>
					<Image
						src={"/assets/icons/search.svg"}
						alt='search'
						width={60}
						height={60}
					/>
					<div className='h-full w-[1px] bg-gray-400 mr-5'></div>
				</div>
				<input className='outline-none border-none p-0 h4 font-medium grow bg-transparent' />
				<Image
					src={"/assets/icons/cart.svg"}
					alt='search'
					width={60}
					height={60}
				/>
			</div>
			<div className='w-full'>
				<Swiper spaceBetween={50} slidesPerView={1}>
					<SwiperSlide>
						<img src='/assets/images/jumbotron.png' className='w-full ' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='/assets/images/jumbotron.png' className='w-full' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='/assets/images/jumbotron.png' className='w-full' />
					</SwiperSlide>
					<div className='swiper-pagination  h-2 bg-black'>asdasd</div>
				</Swiper>
			</div>
		</>
	);
}
