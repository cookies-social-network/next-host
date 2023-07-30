// DEBT: Подумать, как можно сделать так, чтобы не импортировать из app в pages layout

import {BaseLayout} from "../app/layouts/base";
import {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";
import {NextPage} from "next";

export type NextPageWithLayout = NextPage & { getLayout: (page: ReactElement) => ReactNode };

export type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout }

export default function CNApplication({ Component, pageProps }: AppPropsWithLayout) {
	const renderWithLayout = Component.getLayout || ((page) => (
    <BaseLayout>{page}</BaseLayout>
  ))

	return renderWithLayout(<Component { ...pageProps } />)
}
