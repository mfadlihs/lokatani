import Loading from "@/components/loading";
import DetailContainer from "@/containers/detail";
import dynamic from "next/dynamic";

const DetailRoute = dynamic(() => import("@/containers/detail"), {
	loading: () => <Loading />,
});

export default function Detail() {
	return <DetailRoute />;
}
