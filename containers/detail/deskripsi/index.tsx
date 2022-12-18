import { Product } from "@/services/types";
import { rupiah } from "@/utils/currency";
import StarIcon from "@mui/icons-material/Star";
import { Divider } from "@mui/material";

export default function Deskripsi({ data }: { data: Product }) {
	return (
		<div className='grow'>
			<div className='font-bold text-[40px] mb-2'>{data.namaproduk}</div>
			<div className='font-bold text-5xl mb-4'>
				{rupiah(data.harga)}
				<span className='text-grey-60 text-2xl font-medium'>/250gr</span>
			</div>
			<div className='flex gap-4 mb-8'>
				<div className='bg-grey-10 py-3 px-5 flex items-center gap-2 text-grey-60'>
					<StarIcon className='text-yellow-500' />
					<span>5</span>
				</div>
				<div className='bg-grey-10 py-3 px-5 flex items-center gap-2 text-grey-60'>
					Terjual 20rb kg
				</div>
			</div>
			<div className='w-full h-[1.5px] mb-5 bg-gray-300'></div>
			<div className='h4 mb-2'>Deskripsi</div>
			<div className='body1 text-grey-60 mb-5'>{data.deskripsi}</div>
			<div className='w-full h-[1.5px] bg-gray-300'></div>
		</div>
	);
}
