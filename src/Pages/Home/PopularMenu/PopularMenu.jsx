
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {

    const[menu]=useMenu();
    const popular=menu.filter(item=> item.category === "popular")


    return (
        <section className="mb-12">
            <SectionTitle heading={"From Our Menu"}
            subHeading={"Popular Items"}>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    popular.map(item=><MenuItem key={item._id}
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