import Image from 'next/image';

const Header = () => {
    return (
        <div className="relative h-1/6">
            <div className="mx-auto px-2 sm:px-6">
                <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">said ait driss</span>
                            <h1 className="fs-custom-primary text-2xl text-black">
                                SAID
                            </h1>
                        </a>
                    </div>

                    <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                        <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-base">
                            <Image
                                src="/images/svg/close-menu.svg"
                                width={40}
                                height={40}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
