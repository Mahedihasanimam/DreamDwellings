import { useEffect, useState } from "react";

import SingleReview from "./SingleReview";


const Review = () => {
    const [review,setreview]=useState([])
    console.log(review)
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setreview(data))
    },[])
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 ">
           {review.map((item,idx)=><SingleReview item={item} key={idx}></SingleReview>)}
        </div>
    );
};

export default Review;