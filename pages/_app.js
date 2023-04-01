import '../styles/globals.css';

import ReactGA from 'react-ga';



function MyApp({Component, pageProps}) {

    ReactGA.initialize('G-BELHMW8GX8');

    return <Component {...pageProps} />;
}

export default MyApp;
