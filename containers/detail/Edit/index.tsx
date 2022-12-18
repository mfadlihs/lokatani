import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { AppContext } from "@/context";

export default function Edit() {
	const {
		token: { token },
	} = useContext(AppContext);

	return (
		<div>
			<Button
				variant='contained'
				className='bg-secondary-1 py-3 px-12 block mb-3'
				disabled={!!!token}>
				<div className='flex gap-2 items-center'>
					<EditIcon />
					<span className='text-black h6'>edit produk</span>
				</div>
			</Button>
			<Button
				variant='outlined'
				color='error'
				className='py-3 px-12 block border-[2px]'
				fullWidth
				disabled={!!!token}>
				hapus produk
			</Button>
		</div>
	);
}
