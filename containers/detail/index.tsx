import Footer from "@/components/footer";
import Loading from "@/components/loading";
import Navbar from "@/components/navbar";
import { Product } from "@/services/types";
import { RestApi } from "@/utils/api";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DetailContainer() {
	const router = useRouter();
	const { id } = router.query;
	const [data, setData] = useState<Product>();

	useEffect(() => {
		if (!id) return;
		RestApi.get(`/produk/${id}`).then(e => {
			setData(e.data);
		});
	}, [id]);

	if (!data) {
		return (
			<>
				<Head>
					<title>Lokatani</title>
				</Head>
				<Loading />
			</>
		);
	}

	return (
		<>
			<Head>
				<title>{data ? data.namaproduk : "Lokatani"}</title>
			</Head>
			<div className=''>
				<Navbar />
				<div className='px-16 py-16'></div>
				<Footer />
			</div>
		</>
	);
}
