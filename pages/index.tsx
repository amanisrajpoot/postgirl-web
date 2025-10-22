import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Compare from '@/components/Compare';
import Features from '@/components/Features';
import CTA from '@/components/CTA';

export default function Home(){
  return (
    <>
      <Head>
        <title>Postgirl — A lightweight Postman alternative</title>
        <meta name="description" content="Postgirl is a sleek, cross-platform Postman alternative. Tiny binaries. No Electron. No sign-in. Just APIs." />
      </Head>
      <Header />
      <main>
        <Hero />
        <Compare />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
