import React from "react";

export default function Products() {
    return (
        <div className="products">
            <div className="products__left">
                <div className="products__left__top">
                    <div className="products__text">
                        <p className="products__text__category">TOP PRODUKT</p>
                        <h3 className="products__text__name">Stůl Singapur</h3>
                        <p className="products__text__description">Konferenční stolek v zajímavém eklektickém stylu se hodí do každého moderního interiéru.</p>
                    </div>
                    <img className="products__left__top__image" alt="betonový stůl Singapur" src="/img/singapur.jpg"/>
                </div>
                <div className="products__left__bottom">
                    <div className="products__left__bottom__left">
                        <div className="products__text">
                            <p className="products__text__category">SLEVA 10 %</p>
                            <h3 className="products__text__name">Stůl Paříž</h3>
                            <p className="products__text__description">Tento měsíc nabízíme ve slevě industriální stůl Paříž - ocel.</p>
                        </div>
                        <img className="products__left__bottom__left__image" alt="betonový stůl Paříž" src="/img/paris.jpg" />
                    </div>

                    <div className="products__left__bottom__right">
                        <div className="products__text">
                            <p className="products__text__category">NOVÝ DESIGN</p>
                            <h3 className="products__text__name">Jídelní stůl Kjóto</h3>
                            <p className="products__text__description">Tradiční tvar stolu Kjóto byl inspirován japonským designem.</p>
                        </div>
                        <img className="products__left__bottom__right__image" alt="betonový stůl Berlín" src="/img/berlin.jpg" />
                    </div>
                </div>
            </div>

            <div className="products__right">
                <div className="products__text">
                    <p className="products__text__category">KOLEKCE</p>
                    <h3 className="products__text__name">Kolekce Box</h3>
                    <p className="products__text__description">Zařiďte si zahradu nebo terasu kolekcí betonových květináčů Box.</p>
                </div>
                <img className="products__right__image" alt="sada_betonových_květináčů" src="/img/sada_kvetinacu.jpg" />
            </div>
        </div>
    );
}