import { useState } from "react";

async function usefetch(url)
{
    try {
    const data=await fetch(url).then((data)=>data.json());
    console.log("reading json data",data)
    return data;
    } catch (error) {
        console.log(error);
    }

}
export default usefetch;