import Loading from "@/components/loading";
import dynamic from "next/dynamic";
import React from "react";

const RegisterRoute = dynamic(() => import("@/containers/register"), {
	loading: () => <Loading />,
});

export default function Register() {
	return <RegisterRoute />;
}
