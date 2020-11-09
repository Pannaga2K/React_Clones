import React, {useEffect, useState} from 'react';
import "./C2.css";
import {db} from "../../../firebase";

function C2() {
    const [currentNews, setCurrentNews] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    var newsTitle = ["ALL NEWS", "GHOST RECON BREAKPOINT", "WATCH DOGS LEGION"];

    useEffect(() => {
        db.collection("news").doc(newsTitle[selectedIndex]).collection("news").onSnapshot((snapshot) => {
            setCurrentNews((state) => (snapshot.docs.map((doc) => (
                doc.data()
            ))));
        });
    }, [selectedIndex]);

    console.log(currentNews);

// =====================================================================
    // const newsDB = db.collection("news");

    // useEffect(() => {
    //     newsDB.onSnapshot((snapshot) => {
    //         console.log(snapshot.docs);
    //         if(i < snapshot.docs.length) {
    //             newsDB.doc(snapshot.docs[i]?.id).collection("news").onSnapshot((ss) => {
    //                 ss.docs.map((doc) => {
    //                     setNews(state => [...state, doc.data()]);
    //                 });
    //             })
    //         }
    //         i++;
    //     });
    // }, [i]);

    // // SET CURRENT NEWS_LIST
    // useEffect(() => {
    //     news.map((news1) => {
    //         if(clicked+1 === news1.id) {
    //             console.log(news1);
    //             setCurrentNews(state => [...state, news1]);
    //         }
    //     });
    // }, [i]);

// ============================================================================
    

    const onClick = (i) => {
        setSelectedIndex(i);
        // console.log(index);
    }

    return (
        <div className="body__containerTwo">
            <h1>LATEST NEWS</h1>
            <ul className="contianer__newsList">
                {newsTitle.map((nT, index) => (
                    <li id={index===selectedIndex ? ("selected__news") : ("")}><button onClick={() => onClick(index)}>{nT}</button></li>
                ))}
            </ul>
            <div className="container__bodyNews">
                <div className="container__news">
                    {currentNews?.map((n, index) => (
                        <div className={(currentNews.length%2 === 1 && index === 0 ? ("container__newsGrid__odd") : ("container__newsGrid"))}>
                            <img src={n.image} alt="..." />
                            <div className="container__newsGride__tagline">
                                <p>{n.date}</p>
                                <h3>{n.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="container__button">VIEW ALL NEWS</button>
            </div>
        </div>
    )
}

export default C2;
