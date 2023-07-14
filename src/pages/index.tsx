'use client'

import Banner from '@/app/components/banner'
import '../app/globals.css'
import React from "react"
import Spotilight from '@/app/components/spotlight'
import Info from '@/app/components/info'
import Head from 'next/head'
import Footer from '@/app/components/footer'

export default function Home() {
  return (
    <main>
      <Head>
        <title>King - Tekken 8</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Banner />
      <Info />
      <Spotilight />
      <Footer />
    </main>
  )
}
