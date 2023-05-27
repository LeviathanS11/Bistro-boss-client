const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='mx-auto md:w-3/12 text-center sm:w-3/5 my-8'>
            <p className='text-yellow-600 mb-2'>--- {subHeading} ---</p>
            <h3 className='text-3xl uppercase border-y-2 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;