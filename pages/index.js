import Head from 'next/head';
import Script from 'next/script';
import Page from '../layout/page.layout';
import ReactTypingEffect from 'react-typing-effect';
import styles from '../styles/home.module.css';
import Grain from './home/grain';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
} from 'react-icons/ai';
import {useEffect, useState} from 'react';

export default function Home() {
    useEffect(() => {
        const meImg = document.getElementById('me');

        const mouseEnterListner = meImg.addEventListener('mouseenter', () => {
            const socialLinks = document.querySelectorAll('.social-link');
            socialLinks.forEach(link => {
                link.classList.add('block');
                link.classList.remove('hidden');
            });
        });
        const mouseLeaveListener = meImg.addEventListener('mouseleave', () => {
            const socialLinks = document.querySelectorAll('.social-link');
            socialLinks.forEach(link => {
                link.classList.add('hidden');
                link.classList.remove('block');
            });
        });

        return () => {
            meImg.removeEventListener('mouseenter', mouseEnterListner);
            meImg.removeEventListener('mouseleave', mouseLeaveListener);
        };
    }, []);

    return (
        <Page>
            <div className="relative flex px-2 h-full">
                <Head>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=G-BELHMW8GX8`}
                    />
                    <Script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', 'G-BELHMW8GX8', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                    <title>Said Ait Driss | Full Stack web developer and devOps engineer</title>
                    <meta
                        name="description"
                        content="Looking for a full stack developer with expertise in html, css, Node.js, React, php, js, laravel, bootstrap, and Tailwind CSS,...? Look no further than my portfolio! My name is Said Ait Driss, and I showcase my skills in building robust, scalable web applications using the latest technologies in the industry. Discover my portfolio to see my work and learn more about how I can help your business thrive."
                    />
                    <meta
                        name="keywords"
                        content="said ait driss,web developer,html developer,css developer,js developer,node js developer,python developer,laravel developer,php developer,bootstrap developer,tailwind css developer,seo,google,search engine,contact me,hire me,said ait driss portfolio"
                    />
                    <meta name="robots" content="index" />
                    <meta name="robots" content="follow" />
                    
                    <meta name="pinterest:description" content="Looking for a full stack developer with expertise in html, css, Node.js, React, php, js, laravel, bootstrap, and Tailwind CSS,...? Look no further than my portfolio! My name is Said Ait Driss, and I showcase my skills in building robust, scalable web applications using the latest technologies in the industry. Discover my portfolio to see my work and learn more about how I can help your business thrive."/>
                    <meta name="pinterest:image" content="https://i.pinimg.com/1200x/ae/18/b9/ae18b9729fe94d1305561df09cc2e4a9.jpg"/>
                    
                    <meta property="og:title" content="Said Ait Driss | Full Stack web developer and devOps engineer" />
                    <meta property="og:description" content="Looking for a full stack developer with expertise in html, css, Node.js, React, php, js, laravel, bootstrap, and Tailwind CSS,...? Look no further than my portfolio! My name is Said Ait Driss, and I showcase my skills in building robust, scalable web applications using the latest technologies in the industry. Discover my portfolio to see my work and learn more about how I can help your business thrive." />
                    <meta property="og:image" content="https://saidaitdriss.me/images/portfolio.png" />
                    <meta property="og:url" content="https://saidaitdriss.me/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="Said Ait Driss Portfolio" />
                    <meta property="og:locale" content="fr_MA, en_MA" />
                </Head>
                <div className="flex flex-wrap justify-center min-w-full mt-28">
                    <div className="pl-10 sm:pl-20 md:pl-30 lg:pl-52 order-last md:order-first min-w-full mt-20 md:mt-40">
                        <h1 className="pb-5 m-1 font-bold text-white">
                            <span className="pl-2 py-2 rounded-full background-primary text-black">
                                I'm
                            </span>{' '}
                            Said Ait Driss.
                        </h1>
                        <ReactTypingEffect
                            text={[
                                'Front-end Developer',
                                'Back-end Developer',
                                'React-native Developer',
                            ]}
                            speed="100"
                            eraseSpeed="100"
                            eraseDelay="1000"
                            typingDelay="500"
                            staticText="I'm a"
                            className="typing-effect md:text-6xl sm:text-3xl font-bold m-1 text-white"
                        />
                        <h3 className="py-5 md:text-5xl sm:text-2xl font-bold m-1 text-white">
                            Based in Moroco.
                        </h3>
                        <div className="flex gap-2 m-1 mt-6">
                            <button className="relative py-2 px-6 background-primary rounded-lg text-black font-bold truncate hover:text-white">
                                <span className={styles.wave}></span>
                                <span className="text">Hire me</span>
                            </button>
                            <button className="relative p-2 font-bold text-white hover:text-primary">
                                My resume
                            </button>
                        </div>
                    </div>
                    <div
                        className="min-w-full sm:mx-auto h-40 md:h-80 md:mt-28 menu"
                        id="me">
                        <img
                            alt='said ait driss | me |  Full Stack web developer and devOps engineer'
                            src="/background.jpeg"
                            className="shadow-sm hover:shadow-md hover:shadow-[#adff02] cursor-pointer md:absolute relative md:inset-y-0 md:right-0 z-50 md:me-40 w-48 md:w-80 h-48 md:h-80 border-2 rounded-full border-primary md:mt-64 mx-auto duration-100 ease-in-out transition"
                        />
                    </div>
                    <div className="bg-gray-300">
                        <a
                            href="#"
                            className={`social-link shadow-md shadow-[#adff02] absolute w-16 h-16 background-primary  md:right-0 md:me-40 border-4 rounded-full border-primary hover:scale-105 md:inset-y-0 md:mt-48 duration-100 ease-in-out transition hidden`}>
                            <AiFillGithub
                                size={40}
                                className="absolute right-0 left-0 top-0 bottom-0 m-auto"
                            />
                        </a>
                        <a
                            href="#"
                            className={`social-link shadow-md shadow-[#adff02] absolute w-16 h-16 background-primary md:right-0 md:mt-36 md:me-72 border-4 rounded-full border-primary hover:scale-105 duration-100 md:inset-y-0 hidden`}>
                            <AiFillLinkedin
                                size={40}
                                className="absolute right-0 left-0 top-0 bottom-0 m-auto"
                            />
                        </a>
                        <a
                            href="#"
                            className={`social-link shadow-md shadow-[#adff02] absolute w-16 h-16 background-primary md:right-0 md:mt-48 border-4 rounded-full border-primary hover:scale-105 duration-100 md:inset-y-0 hidden`}
                            style={{marginInlineEnd: '26rem'}}>
                            <AiFillTwitterCircle
                                size={40}
                                className="absolute right-0 left-0 top-0 bottom-0 m-auto"
                            />
                        </a>
                    </div>
                </div>
                <Grain />
            </div>
        </Page>
    );
}
