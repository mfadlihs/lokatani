import React, { useState } from "react";
import { Gambar } from "./style";

export default function Image() {
	const [current, setCurrent] = useState(1);

	return (
		<div className='w-min'>
			<img
				src='/assets/images/product.png'
				width={450}
				height={450}
				alt='gambar'
				className='rounded-3xl'
			/>
			<div className='flex mt-2 justify-between gap-4'>
				<Gambar active={current == 1} onClick={() => setCurrent(1)} />
				<Gambar active={current == 2} onClick={() => setCurrent(2)} />
				<Gambar active={current == 3} onClick={() => setCurrent(3)} />
			</div>
			{/* <Gambar src='/assets/images/product.png' width={300} height={300} /> */}
		</div>
	);
}
