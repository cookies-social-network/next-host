import React, {ReactNode} from 'react';
import {AuthLayout} from "@/app/layouts/auth";

export default function LoginPage() {
	return <h1>Login page</h1>;
}

LoginPage.getLayout = function(page: ReactNode) {
	return <AuthLayout>{page}</AuthLayout>;
};
