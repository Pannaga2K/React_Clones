import React, { useEffect, useState } from 'react';
import "./C3.css";
import {db} from "../../../firebase";

function C3() {
    const [storeCard, setStoreCard] = useState([]);

    useEffect(() => {
        db.collection("store__card").onSnapshot((snapshot) => {
            setStoreCard(snapshot.docs.map((doc) => ({
                image: doc.data().image,
                title: doc.data().title
            })));
        });
    }, []);

    console.log(storeCard);

    return (
        <div className="body__containerThree">
            <h1>UBISOFT STORE</h1>
            <div className="container__store">
                {storeCard?.map((sC) => (
                    <div className="container__storeCard">
                        <img className="container__storeCardImage" src={sC.image} alt="..." />
                        <div className="container__storeCardTitle">
                            <p><strong>{sC.title}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default C3;
