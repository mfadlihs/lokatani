export interface Product {
	id: number;
	namaproduk: string;
	harga: number;
	jumlah: number;
	deskripsi: string;
	createdAt: string;
	updatedAt: string;
	userId: number;
}

export interface ProdukEdit {
	namaproduk: string;
	harga: number;
	jumlah: number;
	deskripsi: string;
}

export interface User {
	id: number;
	nickname: string;
	email: string;
	region: string;
	username: string;
	status: string;
	createdAt: string;
	updatedAt: string;
}
