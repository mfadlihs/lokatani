import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function Edit() {
	return (
		<div>
			<Button
				variant='contained'
				className='bg-secondary-1 py-3 px-12 block mb-3'>
				<div className='flex gap-2 items-center'>
					<EditIcon />
					<span className='text-black h6'>edit produk</span>
				</div>
			</Button>
			<Button
				variant='outlined'
				color='error'
				className='py-3 px-12 block border-[2px]'
				fullWidth>
				hapus produk
			</Button>
		</div>
	);
}
