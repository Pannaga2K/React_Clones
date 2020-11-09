import React, { useEffect, useState } from 'react';
import "./C4.css";
import {db} from "../../../firebase";

function C4() {
    const [insideUbisoftCard, sestInsideUbisoftCard] = useState([]);

    useEffect(() => {
        db.collection("insideUBI").onSnapshot((snapshot) => {
            sestInsideUbisoftCard(snapshot.docs.map((doc) => ({
                image: doc.data().image,
                title: doc.data().title,
                subTitle: doc.data().subTitle,
            })));
        });
    }, []);

    console.log(insideUbisoftCard);

    return (
        <div className="body__containerFour">
            <h1>INSIDE UBISOFT</h1>
            <div className="container__cards">
                {insideUbisoftCard?.map((iUC) => (
                    <div className="container__insideUbiCards">
                        <img src={iUC.image} alt="..." />
                        <div className="container__cardsTitle">
                            <p><strong>{iUC.title}</strong></p>
                            <p className="subTitle"><strong>{iUC.subTitle}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default C4;
