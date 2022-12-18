import { TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SearchBar from "@/components/search";

export default function Banner() {
	return (
		<>
			<SearchBar />
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
