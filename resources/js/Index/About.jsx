import React from "react";
//custom compnents
import InfoButton from "./InfoButton";

export default function About() {
    return (
        <div className="about">
            <div className="about__image">
                <img className="about__image" src="/img/slide-1.jpg" alt="betonový interiér" />
            </div>
            
            <div className="about__texts">
                <div className="about__texts__text">
                    <h3 className="about__texts__text__heading">Blok o produktech, materiálu a službách.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam ducimus corporis accusantium velit alias nulla fuga ex nesciunt exercitationem laborum, quidem dolorum quasi aspernatur?</p>
                    <InfoButton />
                </div>

                <div className="about__texts__text">
                    <h3 className="about__texts__text__heading">Blok o projektech, spolupráci a službách.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae minima eligendi fugiat facilis. Asperiores error illum, ab quas ipsa quis corrupti nobis impedit rerum, harum similique distinctio iusto, adipisci alias!</p>
                    <InfoButton />
                </div>
            </div>
        </div>
    );
}