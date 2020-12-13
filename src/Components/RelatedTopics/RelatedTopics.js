import React from 'react';
import './RelatedTopics.css';
import { relatedTopics } from '../../data';

const RelatedTopics = () => {
    const { heading, links } = relatedTopics;
    return (
        <div className="relatedTopics">
            <h4 className="relatedTopicHeader">{heading}</h4>
            <ul>
                {
                    links.map((link) => {
                        const {id, name, url} = link;
                        return (<li key={id} className="relatedLinks">
                            <a href={url}>{name}</a>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default RelatedTopics
