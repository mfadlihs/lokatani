import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function RootProduct() {
	return (
		<div className='flex mb-16 text-grey-60 gap-3 font-bold text-base'>
			<span className=''>Produk Saya</span>
			<ChevronRightIcon />
			<span className='text-primary-1'>Informasi Produk</span>
		</div>
	);
}
