import { useEffect, useState } from "react";
const useNav = () => {
    //navbar scroll when active state
    const [nav, setNav] = useState(false);

    //navbar scroll changeBackground function
    const changeBackground = () => {
         if (window.scrollY >= 300) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
    },[]);
     
     return { nav };
}

export default useNav;