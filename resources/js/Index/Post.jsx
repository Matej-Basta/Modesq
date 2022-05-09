import React from "react";
//custom components
import InfoButton from "../Components/InfoButton";

export default function Post({src, alt}) {
    return (
        <div className="blog__posts__post">
            <img src={src} alt={alt} className="blog__posts__post__picture"/>
            <h3 className="blog__posts__post__heading">Exteriérové modulární květináče</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem labore rem deserunt quia magnam?</p>
            <InfoButton />
        </div>
    );
}