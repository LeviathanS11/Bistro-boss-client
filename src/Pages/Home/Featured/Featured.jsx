import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-10 bg-fixed">
            <div className="bg-slate-400 bg-opacity-10">
            <SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center   pb-20 pt-12 px-30">
                <div>
                    <img className="w-[400px]" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-8">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.</p>
                    <button className="btn btn-outline border-0 border-b-2 ">Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;