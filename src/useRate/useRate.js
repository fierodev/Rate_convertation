import { useState, useEffect } from "react";
import { RATE_URL, USD, EUR, PLN } from "../constants/constants";

export const useRate = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    
    useEffect(()=>{
    fetch(RATE_URL)
    .then(rez => {
        return rez.json()
    })
    .then(rez => {
        setLoading(false);
        setData(
            rez.filter(elem => elem.cc === USD || elem.cc === EUR || elem.cc === PLN)
        );
    })
    .catch((err)=> console.log(err));
    }, [])
    
 
    return {
        loading,
        data
    }

};