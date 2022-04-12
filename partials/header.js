import Image from 'next/image';
import {useState, useEffect} from 'react';
import SliderOver from '../partials/sliderOver';

const Header = () => {
    const [menuSrc, setMenuSrc] = useState('/images/svg/close-menu.svg');
    const [ShowSlid, setShowSlid] = useState(false);

    useEffect(() => {
        if (ShowSlid) {
            setMenuSrc('/images/svg/open-menu.svg');
        } else {
            setMenuSrc('/images/svg/close-menu.svg');
        }
    }, [ShowSlid]);
    return (
        <div className="relative h-1/6">
            <div className="mx-auto px-2 sm:px-6">
                <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#" className="z-10">
                            <span className="sr-only">said ait driss</span>
                            <h1 className="fs-custom-primary text-2xl text-black">
                                SAID
                            </h1>
                        </a>
                    </div>

                    <div className="relative md:flex items-center justify-end md:flex-1 lg:w-0">
                        <button
                            onClick={() => setShowSlid(true)}
                            className="z-10 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-base">
                            <Image
                                src={menuSrc}
                                width={40}
                                height={40}
                                onMouseEnter={() =>
                                    setMenuSrc('/images/svg/open-menu.svg')
                                }
                                onMouseLeave={() => {
                                    if (!ShowSlid) {
                                        setMenuSrc(
                                            '/images/svg/close-menu.svg',
                                        );
                                    }
                                }}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <SliderOver ShowSlid={ShowSlid} setShowSlid={setShowSlid} />
        </div>
    );
};

export default Header;
