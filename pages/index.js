import Head from "next/head";
import Image from "next/image";
import { Inter } from 'next/font/google'
import Section2 from "./section2";
import Section3 from "./Section3";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ['latin'] })
// const [darkMode, setDarkMode] = useState('true');

export default function Home() {
  return (
    <div >
      <Head>
        <title>Shiku Portfolio</title>
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <Navbar />
        <Section2 />
        <Section3 />
      </main>
    </div>
  )
}
