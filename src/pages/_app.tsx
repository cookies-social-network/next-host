import React, {ReactNode} from "react";

const  RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			header
			{ children }
		</div>
	)
}


export default function CNApplication({ Component, pageProps }: any) {
	const renderWithLayout =
		Component.getLayout ||
		function (page: any) {
			return <RootLayout>{page}</RootLayout>
		}

	return renderWithLayout(<Component { ...pageProps } />)
}