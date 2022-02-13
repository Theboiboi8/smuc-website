import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {ExampleTabs} from '../components/tabs'
import Script from "next/script";

export default function Home() {
	return (
		<>
			<div className=' selection:bg-slate-700 selection:text-slate-400'>
				<div className={styles.container}>
					<Head>
						<title>S.M.U.C. - Features</title>
						<meta name="description" content="The Official Features Page For S.M.U.C."/>
						<link rel="icon" href="/favicon.ico"/>
					</Head>

					<Script async src="https://cdn.splitbee.io/sb.js"></Script>

					<main className={styles.main}>
						<ExampleTabs/>
					</main>
				</div>
			</div>
		</>
	)
}
