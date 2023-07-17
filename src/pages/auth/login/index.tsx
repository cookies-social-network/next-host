import React, {ReactNode} from 'react';

const  AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			{ children }
		</div>
	)
}


export default function LoginPage() {
	return <h1>Login page</h1>;
}

LoginPage.getLayout = function(page: any) {
	return <AuthLayout>{page}</AuthLayout>;
};