import Particles from 'react-tsparticles';
import ReactTypingEffect from 'react-typing-effect';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const HomePage = () => {
    const options = {
        backgroundMode: {
            enable: true,
            zIndex: 0,
        },
        fpsLimit: 60,
        interactivity: {
            detectsOn: 'canvas',
            events: {
                onHover: {
                    enable: true,
                    mode: 'bubble',
                    parallax: {enable: false, force: 2, smooth: 10},
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 100,
                    duration: 0.3,
                    opacity: 1,
                    size: 4,
                    speed: 3,
                },
                grab: {distance: 100, line_linked: {opacity: 0.5}},
                push: {particles_nb: 4},
                remove: {particles_nb: 2},
                repulse: {distance: 200, duration: 0.4},
            },
        },
        particles: {
            color: {value: '#fff'},
            links: {
                color: '#ffffff',
                distance: 500,
                enable: false,
                opacity: 1,
                width: 20,
            },
            move: {
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
                direction: 'bottom',
                enable: true,
                outMode: 'out',
                random: false,
                size: true,
                speed: 20,
                straight: true,
            },
            number: {
                density: {enable: true, area: 800},
                value: 100,
            },
            opacity: {
                random: true,
                value: 0.8,
            },
            shape: {
                type: 'circle',
            },
            size: {
                random: true,
                value: 6,
            },
        },
        detectRetina: true,
    };
    return (
        <div className="relative flex px-2 gap-4 h-5/6 items-center">
            <Particles options={options} />
            <div className="hidden flex-col md:flex">
                <ul>
                    <li className="my-1">
                        <a href="#" title="twitter">
                            <Image
                                src={'/images/svg/twitter.svg'}
                                width={15}
                                height={15}
                                className="hover:scale-125"
                            />
                        </a>
                    </li>
                    <li className="my-1">
                        <a href="#" title="facebook">
                            <Image
                                src={'/images/svg/facebook.svg'}
                                width={15}
                                height={15}
                                className="hover:scale-125"
                            />
                        </a>
                    </li>
                    <li className="my-1">
                        <a href="#" title="github">
                            <Image
                                src={'/images/svg/github.svg'}
                                width={15}
                                height={15}
                                className="hover:scale-125"
                            />
                        </a>
                    </li>
                </ul>

                <p className={styles.followme}>Follow me</p>
            </div>
            <div className="flex-auto pl-3">
                <h2 className="py-5 m-1 font-bold">
                    <span className="pl-2 py-2 rounded-full background-primary">
                        I'm
                    </span>{' '}
                    Said Ait Driss.
                </h2>
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
                    className="typing-effect text-5xl font-bold m-1"
                />
                <h2 className="py-5 text-5xl font-bold m-1">
                    Based in Moroco.
                </h2>
                <div className="flex gap-2 m-1">
                    <button className="relative py-2 px-6 background-primary rounded-lg text-black font-bold truncate hover:text-white">
                        <span className={styles.wave}></span>
                        <span className="text">Hire me</span>
                    </button>
                    <button className="relative p-2 font-bold">
                        My resume
                    </button>
                </div>
            </div>
            <div className="">
                <ul className={styles.headerdots}>
                    <li>
                        <a
                            href="#/home-1/intro"
                            aria-current="page"
                            className="active">
                            <span className={styles.headerdotsCircle}></span>
                        </a>
                    </li>
                    <li>
                        <a href="#/home-1/about">
                            <span className={styles.headerdotsCircle}></span>
                        </a>
                    </li>
                    <li>
                        <a href="#/home-1/resume">
                            <span className={styles.headerdotsCircle}></span>
                        </a>
                    </li>
                    <li>
                        <a href="#/home-1/service">
                            <span className={styles.headerdotsCircle}></span>
                        </a>
                    </li>
                    <li>
                        <a href="#/home-1/portfolio">
                            <span className={styles.headerdotsCircle}></span>
                        </a>
                    </li>
                    <li>
                        <a href="#/home-1/blog">
                            <span className={styles.headerdotsCircle}></span>
                        </a>
                    </li>
                    <li>
                        <a href="#/home-1/testimonial">
                            <span className={styles.headerdotsCircle}></span>
                        </a>
                    </li>
                    <li>
                        <a href="#/home-1/contact">
                            <span className={styles.headerdotsCircle}></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
