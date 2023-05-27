import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem=data.filter(item=>item.category === 'popular');
            setMenu(popularItem)
        })
    },[])
    return (
        <section className="mb-12">
            <SectionTitle heading={"From Our Menu"}
            subHeading={"Popular Items"}>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    menu.map(item=><MenuItem key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-4">
            <button className=" btn btn-outline border-0 border-b-2 ">Show More</button>
            </div>
        </section>
    );
};

export default PopularMenu;