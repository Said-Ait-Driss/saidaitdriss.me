import Particles from 'react-tsparticles';
import ReactTypingEffect from 'react-typing-effect';
import styles from '../styles/Home.module.css';

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
        <div className="relative flex px-2 gap-4 h-5/6  justify-center items-center">
            <Particles options={options} />
            <div className="flex-auto pl-3">
                <h2 className="fs-custom-third  py-5">
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
                    staticText="I'am"
                    className="typing-effect text-4xl font-bold"
                />
                <h2 className="py-5 text-4xl font-bold">Based in Moroco.</h2>
                <div className="flex gap-2">
                    <button className="relative py-2 px-6 background-primary rounded-lg text-black font-bold truncate">
                        <span className={styles.wave}></span>
                        <span className="text">Hire me</span>
                    </button>
                    <button className="p-2 font-bold">My resume</button>
                </div>
            </div>
            <div className="flex-auto">dsd</div>
        </div>
    );
};

export default HomePage;
