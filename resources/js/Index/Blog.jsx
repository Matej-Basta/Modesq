import React from "react";
//custom components
import Post from "./Post";

export default function Blog() {
    return (
        <div className="blog">
            <div className="blog__text">
                <h2 className="blog__text__heading">Inspirace, projekty a realizace</h2>
                <p className="blog__text__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores nihil dolorem fuga vel ullam, molestiae quos, iusto ex expedita cupiditate offi</p>
            </div>

            <div className="blog__posts">
                <Post src={"/img/blog-post.jpg"} alt={"interiér 1"}/>
                <Post src={"/img/blog-post1.jpg"} alt={"interiér 2"}/>
                <Post src={"/img/blog-post2.jpg"} alt={"interiér 3"}/>
            </div>
        </div>
    );
}