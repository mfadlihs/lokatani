import ProductCard from "@/components/productCard";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
	return (
		<div className='my-16'>
			<div>
				<div className='h3 mb-8 flex justify-between items-center'>
					<div>Rekomendasi Untukmu</div>
					<div className='bg-primary-1 p-6 h-min rounded-[50%] flex justify-center items-center'>
						<img
							src='/assets/icons/plus.svg'
							className='w-[40px] h-[40px]'
							alt='plus icon'
						/>
					</div>
				</div>
				<Swiper spaceBetween={50} slidesPerView={3}>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
				</Swiper>
			</div>
			<div>
				<div className='h3 mt-12 mb-8'>Produk Terlaris</div>
				<Swiper spaceBetween={50} slidesPerView={3}>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
