import { CircularProgress } from "@mui/material";

export default function LoadingIndicator({ height = 32 }: { height?: number }) {
	return (
		<div className={`w-screen h-${height} flex justify-center items-center`}>
			<CircularProgress />
		</div>
	);
}
