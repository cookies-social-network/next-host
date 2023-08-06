// DEBT: Подумать, как можно сделать так, чтобы не импортировать из app в pages layout

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

import { BaseLayout } from 'app/layouts/base'

export type NextPageWithLayout = NextPage & { getLayout: (page: ReactElement) => ReactNode }

export type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout }

export default function CNApplication({ Component, pageProps }: AppPropsWithLayout) {
  const renderWithLayout = Component.getLayout || ((page) => <BaseLayout>{page}</BaseLayout>)

  return renderWithLayout(<Component {...pageProps} />)
}
