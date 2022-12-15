import Loading from "@/components/loading";
import dynamic from "next/dynamic";

const LoginRoutes = dynamic(() => import("@/containers/login"), {
	loading: () => Loading(),
});

export default function LoginPage() {
	return <LoginRoutes />;
}
