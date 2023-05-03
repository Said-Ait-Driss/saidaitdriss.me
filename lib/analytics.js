import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('G-BELHMW8GX8');
};

export const logPageView = () => {
    ReactGA.set({page: window.location.pathname});
    ReactGA.pageview(window.location.pathname);
};

export const handleClickEvent = (category = 'Button', action = 'click', label) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};
