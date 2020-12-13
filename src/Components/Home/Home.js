import React from 'react';
import './Home.css';
import { bannerImageUrl } from '../../data';
import { schemeData } from '../../data';
import Scheme from '../Scheme/Scheme';
import RelatedTopics from '../RelatedTopics/RelatedTopics';

function Home() {
    return (
        <>
            <div className="banner-image">
                <img src={bannerImageUrl} className="banner-image" alt="banner image" />
            </div>
            <div className="container">
                <div className="left-container">
                    <section className="heading-news">
                        <h4>{schemeData.headingNews}</h4>
                        <marquee width="60%" direction="left" height="30px">{schemeData.subHeading}</marquee>
                    </section>
                    <section className="schemes-container">
                        <Scheme data={schemeData.scheme}/>
                    </section>
                </div>
                <div className="right-container">
                    <RelatedTopics />
                </div>
            </div>
        </>
    )
}

export default Home
