import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Link} from "@nextui-org/react";
import {GitHubLogo} from '../components/github-logo';
import React from "react";
import Typewriter from 'typewriter-effect';
import Script from "next/script";

export default function Home() {
    return (
        <>

            <div className=' selection:bg-slate-700 selection:text-slate-400 relative'>
                <div className={styles.container}>
                    <Head>
                        <title>S.M.U.C.</title>
                        <meta name="description" content="The Official Page For S.M.U.C."/>
                        <link rel="icon" href="/favicon.ico"/>
                    </Head>

                    <Script async src="https://cdn.splitbee.io/sb.js"></Script>

                    <main className={styles.mainNoHomo} css={{
                        position: 'fixed',
                    }}>
                        <div className={styles.headertext}>
                            <div className={styles.epic}>
                                <div
                                    className="select-none flex-auto ml-auto mr-[27.2rem] dark:bg-transparent bg-neutral-900 rounded">
                                    <span className={styles.animatedgradient}>
                                        S.M.U.C.
                                    </span>
                                </div>
                            </div>
                            <div
                                className="bg-neutral-700 text-stone-400 rounded-xl flex flex-wrap max-w-xl py-2 px-2 my-5 inline break-normal select-none shadow-lg shadow-neutral-700/50">
                                <span className={styles.largeFont}>
                                    <Typewriter
                                        wrapperClassName={styles.codefont}
                                        options={{
                                            loop: true,
                                        }}
                                        onInit={(typewriter) => {
                                            typewriter.typeString('The Simplest Minecraft Utility Client')
                                            typewriter.pauseFor(1000)
                                            typewriter.deleteAll(10)
                                            typewriter.pauseFor(100)
                                            typewriter.typeString('Built For Fabric 1.18.1')
                                            typewriter.pauseFor(1000)
                                            typewriter.deleteAll(10)
                                            typewriter.pauseFor(100)
                                                .start();
                                        }}
                                    />
                                </span>
                            </div>
                            <span className="select-none">
                                <div className={styles.headertext}>
                                    Try The New&nbsp;
                                    <span className={styles.epic}>
                                        <Link href="/smuc" >
                                            <a className="inline-block rounded-2xl shadow">
                                                <span className=" underline bg-transparent">
                                                    V0.1
                                                </span>
                                            </a>
                                        </Link>
                                    </span>
                                    &nbsp;Release!
                                </div>
                                <div className='mt-5'>
                                    <div className={styles.grid}>
                                        <Link data-splitbee-event="View Features" href="/smuc" className={styles.card}>
                                            <a className='prose prose-strong'>
                                                <h2> Explore S.M.U.C. &rarr;</h2>
                                                <p>View All The Available And Upcoming Features And More To Come</p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </main>
                    <footer className={styles.footer}>
                        <Link data-splitbee-event="View Github Page" href='https://github.com/Theboiboi8'>
                            <a className={styles.left}>
                                Theboiboi8 <GitHubLogo/>
                            </a>
                        </Link>
                    </footer>
                </div>
            </div>
        </>
    )
}
