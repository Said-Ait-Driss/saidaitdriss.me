import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../shared/header';
import { initGA, logPageView } from '../lib/analytics';

export default function Page({children}) {
    const router = useRouter();

    useEffect(() => {
        initGA();
      }, []);
    
      useEffect(() => {
        logPageView();
      }, [router.pathname]);

      
    return (
        <div className="h-full">
            <Head>
                <Script
                    async
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
                <meta name="author" content="Said Ait Driss,said ait driss" />
                <meta http-equiv="content-language" content="en, fr, ar" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-M3D8ZCH"
                    height="0"
                    width="0"
                    style={{display: 'none', visibility: 'hidden'}}></iframe>
            </noscript>
            <Header />
            {children}
        </div>
    );
}
