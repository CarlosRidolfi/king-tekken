'use client'

import Banner from '@/app/components/banner'
import '../app/globals.css'
import React from "react"
import Info from '@/app/components/info'
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
        <title>King - Tekken 8</title>
        <link rel="favicon" href="/static/favicon.ico" />
      </Head>
      <Banner />
      <Info />
    </main>
  )
}
