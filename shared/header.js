import Link from 'next/link'
import { handleClickEvent } from '../lib/analytics';

export default function Header() {

    return (
        <header className="text-white">
            <div className="container mx-auto py-4 px-6 flex items-center justify-between">
                <a
                    href={"/"}
                    className="font-['Monofett'] text-5xl hover:text-primary">
                    Said
                </a>
                <nav className="flex justify-items-center">
                    <Link href="/loading?link=//">
                         <div className="px-3 py-2 hover:text-gray-300 font-['Cairo'] underline-offset-8 hover:underline hover:text-primary cursor-pointer">
                             Home
                         </div>
                    </Link>
                    <Link href="/loading?link=about">
                        <div className="px-3 py-2 hover:text-gray-300 font-['Cairo'] underline-offset-8 hover:underline hover:text-primary cursor-pointer" onClick={()=>handleClickEvent("Button","Click","About")}>
                            About
                        </div>
                    </Link>
                    <Link href="loading?link=contact">
                        <div className="px-3 py-2 hover:text-gray-300 font-['Cairo'] underline-offset-8 hover:underline hover:text-primary cursor-pointer">
                            Contact
                        </div>
                    </Link>
                </nav>
                <button
                    onClick={() => handleClickEvent('Button',"Click","Hire me")}
                    className="font-['Cairo'] border-solid border rounded-full p-3 hover:border-primary hover:text-primary font-bold hidden md:block">
                    Hire me
                </button>
            </div>
        </header>
    );
}
