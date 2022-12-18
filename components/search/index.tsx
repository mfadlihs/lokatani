import Image from "next/image";

export default function SearchBar() {
	return (
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
	);
}
