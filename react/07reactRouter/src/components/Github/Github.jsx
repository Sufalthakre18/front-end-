import React from "react";
import { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){
    const data=useLoaderData()
    // const [data,setData]=useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

    return(
        <div className="bg-gray-900 text-white text-3xl p-4">
        Github Followers :{data.followers}
        <img className="rounded-full mx-9 shadow-lg animate-bounce" src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    )
}
export default Github;


export const gihubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/Sufalthakre18')

    return response.json()
}