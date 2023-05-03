import Head from 'next/head';
import Page from '../layout/page.layout';
// import Grain from './home/grain';
import Image from 'next/image';

const Contact = () => {
    return (
        <Page className="relative flex px-2 h-full">
            <Head>
                <title>Contact me | contact said ait driss</title>
                <meta
                    name="description"
                    content="If you have any questions or would like to work together, feel fe to contact me! I am always open to new opportunities and am happy to chat.."
                />
                <meta name="robots" content="index"/>
                <meta name="robots" content="nofollow"/>
                <meta name="keywords" content="contact said ait driss,said ait driss,web developer,html,css,js,node js,python,laravel,php,bootstrap,tailwind css,seo,google,search engine,contact us,hire me"/>
            </Head>
            <div>
                {/* <Grain /> */}
                <div className='mt-8 p-2 h-full overflow-y-auto'>
                    <form className='lg:w-6/12 xl:w-5/12 xs:w-100 mx-auto shadow-sm shadow-[#adff02] rounded-lg backdrop-blur-md pb-5 text-center'>
                        <h2 className='text-white p-2 text-6xl text-center m-2'>Hello!</h2>
                        <Image alt="contact me | contact said ait driss" src={'/missed_chances.svg'} width={400} height={200} />
                        <p className='text-slate-400 text-center p-2 italic'>
                            If you have any questions or would like to work together, feel fe to contact me! I am always open to new opportunities and am happy to chat.
                        </p>
                        <div className='text-white m-2 text-start w-11/12 pl-5 sm:pl-10 md:pl-8 xl:pl-6'>
                            <label htmlFor="fullName">Full Name : </label>
                        </div>
                        <input type={"text"} name="fullName" id='fullName' 
                                className='w-11/12 rounded-lg px-2 py-5 m-2 mt-0 opacity-40 bg-transparent border text-white' placeholder='Your full name here !'/>
                        <div className='text-white m-2 text-start w-11/12 pl-5 sm:pl-10 md:pl-8 xl:pl-6'>
                            <label htmlFor="email">Email : </label>
                        </div>
                        <input type={"email"} name="email" id='email' 
                                className='w-11/12 px-2 py-5 rounded-lg p-2 m-2 mt-0 opacity-40 bg-transparent border text-white' placeholder='Your email here !'/>
                        <div className='text-white m-2 text-start w-11/12 pl-5 sm:pl-10 md:pl-8 xl:pl-6'>
                            <label htmlFor="message">Message :</label> 
                        </div>
                        <textarea   name="message" id='message'
                                    className='p-2 rounded-lg w-11/12 m-2 opacity-40 bg-transparent border h-32 max-h-32 min-h-32 text-white' placeholder='Your message content here !'>
                        </textarea>
                        <div className='m-2 text-center p-5 pb-0'>
                            <button className='text-black font-bold rounded-lg w-full p-5 background-primary mb-5 h-20 mx-auto hover:text-white shadow-sm hover:shadow-[#adff02]'>
                                Send
                            </button>
                        </div>
                        <a href='mailto:saidaitdrissofficial@gmail.com' className='text-white'>Contact me via mail ?</a>
                    </form>
                </div>
            </div>
        </Page>
    );
};

export default Contact;
