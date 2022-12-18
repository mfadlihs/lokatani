import Loading from "@/components/loading";
import ProductCard from "@/components/productCard";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CircularProgress } from "@mui/material";
import { Product } from "@/services/types";
import { RestApi } from "@/utils/api";
import LoadingIndicator from "@/components/LoadingIndicator";

export default function Products() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		RestApi.get("/produk/productlist").then(e => setProducts(e.data));
	}, []);

	useEffect(() => {
		console.log(products);
	}, [products]);

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
				<Swiper spaceBetween={10} slidesPerView={3.5}>
					{products.length === 0 ? (
						<LoadingIndicator />
					) : (
						products.map(e => {
							return (
								<SwiperSlide>
									<ProductCard data={e} />
								</SwiperSlide>
							);
						})
					)}
				</Swiper>
			</div>
			<div>
				<div className='h3 mt-12 mb-8'>Produk Terlaris</div>
				<Swiper spaceBetween={10} slidesPerView={3.5}>
					{products.length === 0 ? (
						<LoadingIndicator />
					) : (
						products.map(e => {
							return (
								<SwiperSlide>
									<ProductCard data={e} />
								</SwiperSlide>
							);
						})
					)}
				</Swiper>
			</div>
		</div>
	);
}
