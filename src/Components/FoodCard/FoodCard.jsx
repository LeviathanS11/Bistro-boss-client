
const FoodCard = ({item}) => {
    const{image,price,name,recipe}=item;
    return (
        <div className="card w-80 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image  } alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-3 top-3 ">${price}</p>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-end mx-auto">
                    <button className="btn btn-outline border-0 border-b-2">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;