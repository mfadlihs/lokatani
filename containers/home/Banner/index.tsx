import { Button } from "@mui/material";
import Image from "next/image";
import { TagCard } from "./style";
import banner from "@/public/assets/images/home-banner.png";
import checklist from "@/public/assets/icons/checklist.svg";
import Link from "next/link";

export default function Banner() {
	return (
		<div className='relative mt-16 h-screen '>
			<Image
				src={banner}
				alt='banner'
				width={670}
				height={560}
				className='absolute right-2 select-none -z-40'
			/>
			<div className='flex pt-12'>
				<div>
					<div className='h1 text-primary-font mb-4'>
						Penuhi Kebutuhan <br />
						Agraria dengan Mudah
					</div>
					<div
						className='h3 text-text-secondary mb-16'
						style={{ fontWeight: 400 }}>
						Kamu dapat melakukan jual-beli produk
						<br />
						pangan ke seluruh Indonesia!
					</div>
					<Link href={"/pasar"}>
						<Button color='secondary' variant='contained'>
							Jelajahi Lokatani
						</Button>
					</Link>
				</div>
				<div>
					<TagCard>
						<Image src={checklist} width={20} height={20} alt='checklist' />
						Baca Artikel Seputar Pertanian
					</TagCard>
					<TagCard className='mt-6 ml-10'>
						<Image src={checklist} width={20} height={20} alt='checklist' />
						Belanja Kebutuhan Pangan
					</TagCard>
					<TagCard className='mt-6'>
						<Image src={checklist} width={20} height={20} alt='checklist' />
						Jual Bahan Pangan
					</TagCard>
				</div>
			</div>
		</div>
	);
}
