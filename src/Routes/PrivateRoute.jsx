//private route er vitore jei children gula thakebe shei gulai parameter hisebe deya hoyeche.

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    // console.log(location);
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress w-56"></progress>//user ache kina eite check korte kichu ta somoy jai("onAuthStateChange").jar karone dekha jai navigate hoye onno route a chole jacche.tai age loading use kora hocche.loading jokhon false hobe totokkhone user ache kina check kora hoye zabe.user thakle "onAuthStateChange" er vitore loading state false hobe.then children return korbe.
    }
    if (user) {
        return children;//jodi user thake tobe jei children er kache jawa dorkar chilo shei khene chole jabe.
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>//user na thakle navigate kore onno route a pathai dibe.eikhane "login"route e pathabe.
};

export default PrivateRoute;