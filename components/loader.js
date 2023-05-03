const Loader = ({width}) => {
    return (
        <div
            className="w-full bg-gray-200 rounded-full dark:bg-gray-700 absolute top-0"
            id="loader"
            style={{height: '0.2rem'}}>
            <div
                className="background-primary rounded-full"
                style={{width: `${width}%`, height: '0.2rem'}}></div>
        </div>
    );
};

export default Loader;
