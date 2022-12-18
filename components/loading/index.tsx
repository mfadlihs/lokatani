import { motion } from "framer-motion";

export default function Loading() {
	return (
		<div className='w-full h-screen overflow-hidden bg-primary-2 flex justify-center flex-col items-center'>
			<motion.img
				src='/assets/images/logo.svg'
				width={300}
				animate={{
					scale: [1.2, 1, 1.2],
				}}
				transition={{
					duration: 2.5,
					repeat: Infinity,
				}}></motion.img>
		</div>
	);
}
